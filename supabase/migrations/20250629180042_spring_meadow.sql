/*
  # Table des modules de formation

  1. Structure
    - `id` (uuid, primary key)
    - `title` (text)
    - `description` (text)
    - `category` (enum)
    - `duration` (integer, en minutes)
    - `level` (text)
    - `certification` (text)
    - `objectives` (jsonb)
    - `prerequisites` (jsonb)
    - `is_active` (boolean)
    - `created_by` (uuid, foreign key)
    - `created_at` (timestamp)
    - `updated_at` (timestamp)

  2. Sécurité
    - Enable RLS
    - Policies pour lecture/écriture selon le rôle
*/

CREATE TABLE IF NOT EXISTS modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('tronc-commun', 'executant', 'charge-chantier', 'specialise')),
  duration integer NOT NULL DEFAULT 0,
  level text NOT NULL,
  certification text NOT NULL,
  objectives jsonb DEFAULT '[]'::jsonb,
  prerequisites jsonb DEFAULT '[]'::jsonb,
  is_active boolean DEFAULT true,
  created_by uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE modules ENABLE ROW LEVEL SECURITY;

-- Politique pour que tous les utilisateurs authentifiés puissent lire les modules actifs
CREATE POLICY "Authenticated users can read active modules"
  ON modules
  FOR SELECT
  TO authenticated
  USING (is_active = true);

-- Politique pour que les formateurs et admins puissent créer des modules
CREATE POLICY "Formateurs and admins can create modules"
  ON modules
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('admin', 'formateur')
    )
  );

-- Politique pour que les créateurs et admins puissent modifier leurs modules
CREATE POLICY "Creators and admins can update modules"
  ON modules
  FOR UPDATE
  TO authenticated
  USING (
    created_by = auth.uid() OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_modules_category ON modules(category);
CREATE INDEX IF NOT EXISTS idx_modules_active ON modules(is_active);
CREATE INDEX IF NOT EXISTS idx_modules_created_by ON modules(created_by);