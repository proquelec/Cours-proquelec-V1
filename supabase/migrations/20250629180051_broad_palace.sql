/*
  # Table des diapositives

  1. Structure
    - `id` (uuid, primary key)
    - `module_id` (uuid, foreign key)
    - `title` (text)
    - `content` (text)
    - `type` (enum)
    - `media_url` (text, nullable)
    - `notes` (text, nullable)
    - `duration` (integer, en secondes)
    - `order_index` (integer)
    - `created_at` (timestamp)
    - `updated_at` (timestamp)

  2. Sécurité
    - Enable RLS
    - Hérite des permissions du module parent
*/

CREATE TABLE IF NOT EXISTS slides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text NOT NULL,
  type text NOT NULL CHECK (type IN ('text', 'image', 'video', 'quiz')),
  media_url text,
  notes text,
  duration integer DEFAULT 300,
  order_index integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE slides ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs puissent lire les slides des modules actifs
CREATE POLICY "Users can read slides of active modules"
  ON slides
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM modules 
      WHERE id = module_id AND is_active = true
    )
  );

-- Politique pour que les formateurs et admins puissent créer des slides
CREATE POLICY "Formateurs and admins can create slides"
  ON slides
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('admin', 'formateur')
    )
  );

-- Politique pour que les créateurs de modules et admins puissent modifier les slides
CREATE POLICY "Module creators and admins can update slides"
  ON slides
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM modules 
      WHERE id = module_id AND (
        created_by = auth.uid() OR
        EXISTS (
          SELECT 1 FROM users 
          WHERE id = auth.uid() AND role = 'admin'
        )
      )
    )
  );

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_slides_module_id ON slides(module_id);
CREATE INDEX IF NOT EXISTS idx_slides_order ON slides(module_id, order_index);
CREATE UNIQUE INDEX IF NOT EXISTS idx_slides_unique_order ON slides(module_id, order_index);