/*
  # Seed data for electrical training application

  1. Test Users
    - Creates admin, formateur, and stagiaire test accounts
    - Uses proper UUID generation for primary keys
    - Includes proper password hashing placeholders

  2. Notes
    - Modules and slides will be migrated separately via admin interface
    - Password hashes should be updated with real values in production
*/

-- Insérer un utilisateur admin de test
INSERT INTO users (id, name, email, password_hash, role, is_active)
VALUES (
  gen_random_uuid(),
  'Administrateur Test',
  'admin@formation-electrique.fr',
  '$2b$10$example_hash_here', -- Remplacer par un vrai hash
  'admin',
  true
) ON CONFLICT (email) DO NOTHING;

-- Insérer un formateur de test
INSERT INTO users (id, name, email, password_hash, role, is_active)
VALUES (
  gen_random_uuid(),
  'Formateur Électrique',
  'formateur@formation-electrique.fr',
  '$2b$10$example_hash_here', -- Remplacer par un vrai hash
  'formateur',
  true
) ON CONFLICT (email) DO NOTHING;

-- Insérer quelques stagiaires de test
INSERT INTO users (name, email, password_hash, role, is_active)
VALUES 
  ('Jean Dupont', 'jean.dupont@example.com', '$2b$10$example_hash_here', 'stagiaire', true),
  ('Marie Martin', 'marie.martin@example.com', '$2b$10$example_hash_here', 'stagiaire', true),
  ('Pierre Durand', 'pierre.durand@example.com', '$2b$10$example_hash_here', 'stagiaire', true)
ON CONFLICT (email) DO NOTHING;

-- Note: Les modules et slides seront migrés depuis les données TypeScript existantes
-- via l'interface d'administration ou un script de migration séparé.