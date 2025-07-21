/*
  # Table de progression des utilisateurs

  1. Structure
    - `id` (uuid, primary key)
    - `user_id` (uuid, foreign key)
    - `module_id` (uuid, foreign key)
    - `current_slide` (integer)
    - `completion_percentage` (integer)
    - `last_accessed` (timestamp)
    - `total_time_spent` (integer, en secondes)
    - `best_score` (integer, nullable)
    - `attempts_count` (integer)
    - `created_at` (timestamp)
    - `updated_at` (timestamp)

  2. Sécurité
    - Enable RLS
    - Les utilisateurs ne voient que leur propre progression
*/

CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_id uuid NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  current_slide integer DEFAULT 0,
  completion_percentage integer DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
  last_accessed timestamptz DEFAULT now(),
  total_time_spent integer DEFAULT 0,
  best_score integer,
  attempts_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, module_id)
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs puissent lire leur propre progression
CREATE POLICY "Users can read own progress"
  ON user_progress
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Politique pour que les utilisateurs puissent créer leur propre progression
CREATE POLICY "Users can create own progress"
  ON user_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Politique pour que les utilisateurs puissent modifier leur propre progression
CREATE POLICY "Users can update own progress"
  ON user_progress
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- Politique pour que les formateurs et admins puissent voir toute la progression
CREATE POLICY "Formateurs and admins can read all progress"
  ON user_progress
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('admin', 'formateur')
    )
  );

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_module_id ON user_progress(module_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_last_accessed ON user_progress(last_accessed);
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_progress_unique ON user_progress(user_id, module_id);