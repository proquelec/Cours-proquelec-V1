/*
  # Fix users table schema for Supabase Auth compatibility

  1. Schema Changes
    - Remove password_hash column (managed by Supabase Auth)
    - Make name column nullable with default value
    - Ensure proper defaults for other columns

  2. Security
    - Maintain existing RLS policies
    - Ensure proper user data access controls
*/

-- Remove password_hash column as it's managed by Supabase Auth
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'password_hash'
  ) THEN
    ALTER TABLE users DROP COLUMN password_hash;
  END IF;
END $$;

-- Make name column nullable with a default value
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'name' AND is_nullable = 'NO'
  ) THEN
    ALTER TABLE users ALTER COLUMN name DROP NOT NULL;
    ALTER TABLE users ALTER COLUMN name SET DEFAULT 'Nouvel utilisateur';
  END IF;
END $$;

-- Ensure role has a default value
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'role' AND column_default IS NOT NULL
  ) THEN
    ALTER TABLE users ALTER COLUMN role SET DEFAULT 'formateur';
  END IF;
END $$;

-- Create a trigger function to handle new user creation from auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, name, email, role)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'name', 'Nouvel utilisateur'),
    new.email,
    COALESCE(new.raw_user_meta_data->>'role', 'formateur')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create user profile when auth user is created
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();