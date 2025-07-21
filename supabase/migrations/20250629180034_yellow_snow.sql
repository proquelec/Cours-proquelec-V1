/*
  # Table des utilisateurs

  1. Structure
    - `id` (uuid, primary key)
    - `name` (text)
    - `email` (text, unique)
    - `password_hash` (text)
    - `role` (enum: admin, formateur, stagiaire)
    - `avatar_url` (text, nullable)
    - `created_at` (timestamp)
    - `updated_at` (timestamp)
    - `last_login` (timestamp, nullable)
    - `is_active` (boolean, default true)

  2. Sécurité
    - Enable RLS on `users` table
    - Add policies for user data access
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  role text NOT NULL CHECK (role IN ('admin', 'formateur', 'stagiaire')),
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  last_login timestamptz,
  is_active boolean DEFAULT true
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs puissent lire leurs propres données
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Politique pour que les utilisateurs puissent modifier leurs propres données
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Politique pour que les admins puissent tout voir
CREATE POLICY "Admins can read all users"
  ON users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_active ON users(is_active);