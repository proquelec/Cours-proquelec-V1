/*
  # Table des questions de quiz

  1. Structure
    - `id` (uuid, primary key)
    - `module_id` (uuid, foreign key)
    - `question` (text)
    - `options` (jsonb)
    - `correct_answer` (integer)
    - `explanation` (text)
    - `time_limit` (integer, en secondes)
    - `order_index` (integer)
    - `created_at` (timestamp)
    - `updated_at` (timestamp)

  2. Sécurité
    - Enable RLS
    - Hérite des permissions du module parent
*/

CREATE TABLE IF NOT EXISTS quiz_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  question text NOT NULL,
  options jsonb NOT NULL DEFAULT '[]'::jsonb,
  correct_answer integer NOT NULL,
  explanation text NOT NULL,
  time_limit integer DEFAULT 30,
  order_index integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs puissent lire les questions des modules actifs
CREATE POLICY "Users can read quiz questions of active modules"
  ON quiz_questions
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM modules 
      WHERE id = module_id AND is_active = true
    )
  );

-- Politique pour que les formateurs et admins puissent créer des questions
CREATE POLICY "Formateurs and admins can create quiz questions"
  ON quiz_questions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('admin', 'formateur')
    )
  );

-- Politique pour que les créateurs de modules et admins puissent modifier les questions
CREATE POLICY "Module creators and admins can update quiz questions"
  ON quiz_questions
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
CREATE INDEX IF NOT EXISTS idx_quiz_questions_module_id ON quiz_questions(module_id);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_order ON quiz_questions(module_id, order_index);
CREATE UNIQUE INDEX IF NOT EXISTS idx_quiz_questions_unique_order ON quiz_questions(module_id, order_index);