/*
  # Table des sessions de formation

  1. Structure
    - `id` (uuid, primary key)
    - `module_id` (uuid, foreign key)
    - `user_id` (uuid, foreign key)
    - `start_time` (timestamp)
    - `end_time` (timestamp, nullable)
    - `slide_times` (jsonb, temps passé sur chaque slide)
    - `quiz_results` (jsonb, résultats du quiz)
    - `completed` (boolean)
    - `score` (integer, nullable)
    - `created_at` (timestamp)
    - `updated_at` (timestamp)

  2. Sécurité
    - Enable RLS
    - Les utilisateurs ne voient que leurs propres sessions
*/

CREATE TABLE IF NOT EXISTS training_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  start_time timestamptz NOT NULL,
  end_time timestamptz,
  slide_times jsonb DEFAULT '[]'::jsonb,
  quiz_results jsonb DEFAULT '[]'::jsonb,
  completed boolean DEFAULT false,
  score integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE training_sessions ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs puissent lire leurs propres sessions
CREATE POLICY "Users can read own training sessions"
  ON training_sessions
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Politique pour que les utilisateurs puissent créer leurs propres sessions
CREATE POLICY "Users can create own training sessions"
  ON training_sessions
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Politique pour que les utilisateurs puissent modifier leurs propres sessions
CREATE POLICY "Users can update own training sessions"
  ON training_sessions
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- Politique pour que les formateurs et admins puissent voir toutes les sessions
CREATE POLICY "Formateurs and admins can read all training sessions"
  ON training_sessions
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('admin', 'formateur')
    )
  );

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_training_sessions_user_id ON training_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_training_sessions_module_id ON training_sessions(module_id);
CREATE INDEX IF NOT EXISTS idx_training_sessions_completed ON training_sessions(completed);
CREATE INDEX IF NOT EXISTS idx_training_sessions_start_time ON training_sessions(start_time);