-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, name, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'name', 'Nouvel utilisateur'),
    COALESCE(new.raw_user_meta_data->>'role', 'formateur')
  )
  ON CONFLICT (email) DO UPDATE SET
    name = COALESCE(new.raw_user_meta_data->>'name', users.name),
    role = COALESCE(new.raw_user_meta_data->>'role', users.role),
    updated_at = NOW();
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing function if it exists to avoid parameter defaults error
DROP FUNCTION IF EXISTS create_test_user(text,text,text,text);

-- Function to create test users (for development/testing)
CREATE FUNCTION create_test_user(
  user_email text,
  user_password text,
  user_name text,
  user_role text
)
RETURNS uuid AS $$
DECLARE
  user_id uuid;
  existing_user_id uuid;
BEGIN
  -- Check if user already exists in auth.users
  SELECT id INTO existing_user_id FROM auth.users WHERE email = user_email;
  
  IF existing_user_id IS NOT NULL THEN
    -- User already exists, just update the public.users table
    INSERT INTO public.users (id, email, name, role, is_active, created_at, updated_at)
    VALUES (
      existing_user_id,
      user_email,
      user_name,
      user_role,
      true,
      NOW(),
      NOW()
    )
    ON CONFLICT (email) DO UPDATE SET
      name = EXCLUDED.name,
      role = EXCLUDED.role,
      is_active = EXCLUDED.is_active,
      updated_at = NOW();
    
    RETURN existing_user_id;
  END IF;
  
  -- Generate a new UUID for the user
  user_id := gen_random_uuid();
  
  -- Create auth user
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
  ) VALUES (
    '00000000-0000-0000-0000-000000000000',
    user_id,
    'authenticated',
    'authenticated',
    user_email,
    crypt(user_password, gen_salt('bf')),
    NOW(),
    NOW(),
    NOW(),
    '{"provider":"email","providers":["email"]}',
    jsonb_build_object('name', user_name, 'role', user_role),
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
  );

  -- Create user profile (this will be handled by the trigger, but we add it here for safety)
  INSERT INTO public.users (id, email, name, role, is_active, created_at, updated_at)
  VALUES (
    user_id,
    user_email,
    user_name,
    user_role,
    true,
    NOW(),
    NOW()
  )
  ON CONFLICT (email) DO UPDATE SET
    name = EXCLUDED.name,
    role = EXCLUDED.role,
    is_active = EXCLUDED.is_active,
    updated_at = NOW();

  RETURN user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create user profile
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Create test users if they don't exist
DO $$
DECLARE
  test_users RECORD;
  result_user_id uuid;
BEGIN
  -- Define test users
  FOR test_users IN 
    SELECT * FROM (VALUES
      ('yoombal28@gmail.com', 'password123', 'Formateur Principal', 'formateur'),
      ('admin@formation.com', 'admin123', 'Administrateur', 'admin'),
      ('stagiaire@formation.com', 'stagiaire123', 'Stagiaire Test', 'stagiaire')
    ) AS t(email, password, name, role)
  LOOP
    -- Create or update test user
    SELECT create_test_user(
      test_users.email,
      test_users.password,
      test_users.name,
      test_users.role
    ) INTO result_user_id;
    
    RAISE NOTICE 'Processed test user: % (ID: %)', test_users.email, result_user_id;
  END LOOP;
END $$;

-- Update existing users table to ensure consistency
INSERT INTO public.users (id, email, name, role, is_active, created_at, updated_at)
SELECT 
  au.id,
  au.email,
  CASE 
    WHEN au.email = 'yoombal28@gmail.com' THEN 'Formateur Principal'
    WHEN au.email = 'admin@formation.com' THEN 'Administrateur'
    WHEN au.email = 'stagiaire@formation.com' THEN 'Stagiaire Test'
    ELSE COALESCE(au.raw_user_meta_data->>'name', 'Utilisateur')
  END,
  CASE 
    WHEN au.email = 'yoombal28@gmail.com' THEN 'formateur'
    WHEN au.email = 'admin@formation.com' THEN 'admin'
    WHEN au.email = 'stagiaire@formation.com' THEN 'stagiaire'
    ELSE COALESCE(au.raw_user_meta_data->>'role', 'formateur')
  END,
  true,
  NOW(),
  NOW()
FROM auth.users au
WHERE au.email IN ('yoombal28@gmail.com', 'admin@formation.com', 'stagiaire@formation.com')
ON CONFLICT (email) DO UPDATE SET
  name = EXCLUDED.name,
  role = EXCLUDED.role,
  is_active = EXCLUDED.is_active,
  updated_at = NOW();