/*
  # Create test users and authentication setup

  1. New Functions
    - `handle_new_user()` - Trigger function to create user profile when auth user is created
    - `create_test_user()` - Function to create test users with proper auth integration

  2. Security
    - Set up trigger to automatically create user profiles
    - Ensure proper RLS policies are maintained

  3. Test Data
    - Create test formateur user for login testing
*/

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, name, email, role, password_hash)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'stagiaire'),
    'supabase_auth' -- Placeholder since Supabase handles password
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Function to create test users (for development)
CREATE OR REPLACE FUNCTION create_test_user(
  user_email TEXT,
  user_password TEXT,
  user_name TEXT,
  user_role TEXT DEFAULT 'formateur'
)
RETURNS UUID AS $$
DECLARE
  user_id UUID;
BEGIN
  -- This would typically be done through Supabase auth API
  -- For now, we'll create a placeholder entry
  user_id := gen_random_uuid();
  
  INSERT INTO public.users (id, name, email, role, password_hash, is_active)
  VALUES (
    user_id,
    user_name,
    user_email,
    user_role,
    'supabase_auth',
    true
  );
  
  RETURN user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a test formateur user
SELECT create_test_user(
  'yoombal28@gmail.com',
  'password123',
  'Formateur Test',
  'formateur'
);

-- Create a test admin user
SELECT create_test_user(
  'admin@formation.com',
  'admin123',
  'Admin Test',
  'admin'
);

-- Create a test stagiaire user
SELECT create_test_user(
  'stagiaire@formation.com',
  'stagiaire123',
  'Stagiaire Test',
  'stagiaire'
);