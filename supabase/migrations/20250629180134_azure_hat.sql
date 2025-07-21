/*
  # Fonction pour mettre à jour la progression utilisateur

  Cette fonction met à jour automatiquement la progression d'un utilisateur
  lorsqu'il avance dans un module.
*/

CREATE OR REPLACE FUNCTION update_user_progress(
  p_user_id uuid,
  p_module_id uuid,
  p_current_slide integer,
  p_time_spent integer DEFAULT 0
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  total_slides integer;
  completion_pct integer;
BEGIN
  -- Obtenir le nombre total de slides du module
  SELECT COUNT(*) INTO total_slides
  FROM slides
  WHERE module_id = p_module_id;

  -- Calculer le pourcentage de completion
  IF total_slides > 0 THEN
    completion_pct := ROUND((p_current_slide::float / total_slides::float) * 100);
  ELSE
    completion_pct := 0;
  END IF;

  -- Insérer ou mettre à jour la progression
  INSERT INTO user_progress (
    user_id,
    module_id,
    current_slide,
    completion_percentage,
    last_accessed,
    total_time_spent,
    attempts_count,
    updated_at
  )
  VALUES (
    p_user_id,
    p_module_id,
    p_current_slide,
    completion_pct,
    now(),
    p_time_spent,
    1,
    now()
  )
  ON CONFLICT (user_id, module_id)
  DO UPDATE SET
    current_slide = GREATEST(user_progress.current_slide, p_current_slide),
    completion_percentage = GREATEST(user_progress.completion_percentage, completion_pct),
    last_accessed = now(),
    total_time_spent = user_progress.total_time_spent + p_time_spent,
    attempts_count = user_progress.attempts_count + 1,
    updated_at = now();
END;
$$;