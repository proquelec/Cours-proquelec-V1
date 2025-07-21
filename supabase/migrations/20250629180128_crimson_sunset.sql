/*
  # Table des analytiques

  1. Structure
    - `id` (uuid, primary key)
    - `event_type` (text)
    - `user_id` (uuid, foreign key, nullable)
    - `module_id` (uuid, foreign key, nullable)
    - `slide_id` (uuid, foreign key, nullable)
    - `event_data` (jsonb)
    - `timestamp` (timestamp)
    - `session_id` (text)
    - `ip_address` (inet, nullable)
    - `user_agent` (text, nullable)

  2. Sécurité
    - Enable RLS
    - Seuls les admins et formateurs peuvent lire les analytiques
*/

CREATE TABLE IF NOT EXISTS analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  module_id uuid REFERENCES modules(id) ON DELETE SET NULL,
  slide_id uuid REFERENCES slides(id) ON DELETE SET NULL,
  event_data jsonb DEFAULT '{}'::jsonb,
  timestamp timestamptz DEFAULT now(),
  session_id text,
  ip_address inet,
  user_agent text
);

ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Politique pour que seuls les formateurs et admins puissent lire les analytiques
CREATE POLICY "Formateurs and admins can read analytics"
  ON analytics
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('admin', 'formateur')
    )
  );

-- Politique pour que tous les utilisateurs authentifiés puissent créer des événements
CREATE POLICY "Authenticated users can create analytics events"
  ON analytics
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_user_id ON analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_module_id ON analytics(module_id);
CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON analytics(timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_session_id ON analytics(session_id);