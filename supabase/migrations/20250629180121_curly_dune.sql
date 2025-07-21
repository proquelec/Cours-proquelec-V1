/*
  # Table des certifications

  1. Structure
    - `id` (uuid, primary key)
    - `user_id` (uuid, foreign key)
    - `module_id` (uuid, foreign key)
    - `certification_name` (text)
    - `score` (integer)
    - `issued_date` (timestamp)
    - `expiry_date` (timestamp, nullable)
    - `certificate_url` (text, nullable)
    - `is_valid` (boolean)
    - `created_at` (timestamp)

  2. Sécurité
    - Enable RLS
    - Les utilisateurs voient leurs propres certifications
*/

CREATE TABLE IF NOT EXISTS certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_id uuid NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  certification_name text NOT NULL,
  score integer NOT NULL CHECK (score >= 0 AND score <= 100),
  issued_date timestamptz DEFAULT now(),
  expiry_date timestamptz,
  certificate_url text,
  is_valid boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs puissent lire leurs propres certifications
CREATE POLICY "Users can read own certifications"
  ON certifications
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Politique pour que les formateurs et admins puissent créer des certifications
CREATE POLICY "Formateurs and admins can create certifications"
  ON certifications
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('admin', 'formateur')
    )
  );

-- Politique pour que les formateurs et admins puissent voir toutes les certifications
CREATE POLICY "Formateurs and admins can read all certifications"
  ON certifications
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('admin', 'formateur')
    )
  );

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_certifications_user_id ON certifications(user_id);
CREATE INDEX IF NOT EXISTS idx_certifications_module_id ON certifications(module_id);
CREATE INDEX IF NOT EXISTS idx_certifications_issued_date ON certifications(issued_date);
CREATE INDEX IF NOT EXISTS idx_certifications_valid ON certifications(is_valid);