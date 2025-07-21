/*
  # Fonction pour obtenir les statistiques globales

  Cette fonction retourne les statistiques globales de la plateforme.
*/

CREATE OR REPLACE FUNCTION get_global_statistics()
RETURNS TABLE (
  total_sessions bigint,
  active_users bigint,
  completion_rate numeric,
  average_time numeric,
  sessions_trend text,
  users_trend text,
  completion_trend text
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_sessions bigint;
  previous_sessions bigint;
  current_users bigint;
  previous_users bigint;
  current_completion numeric;
  previous_completion numeric;
BEGIN
  -- Sessions totales ce mois
  SELECT COUNT(*) INTO current_sessions
  FROM training_sessions
  WHERE start_time >= date_trunc('month', CURRENT_DATE);
  
  -- Sessions le mois précédent
  SELECT COUNT(*) INTO previous_sessions
  FROM training_sessions
  WHERE start_time >= date_trunc('month', CURRENT_DATE - interval '1 month')
    AND start_time < date_trunc('month', CURRENT_DATE);
  
  -- Utilisateurs actifs ce mois
  SELECT COUNT(DISTINCT user_id) INTO current_users
  FROM training_sessions
  WHERE start_time >= date_trunc('month', CURRENT_DATE);
  
  -- Utilisateurs actifs le mois précédent
  SELECT COUNT(DISTINCT user_id) INTO previous_users
  FROM training_sessions
  WHERE start_time >= date_trunc('month', CURRENT_DATE - interval '1 month')
    AND start_time < date_trunc('month', CURRENT_DATE);
  
  -- Taux de completion actuel
  SELECT ROUND(
    COUNT(CASE WHEN completed = true THEN 1 END)::numeric / 
    NULLIF(COUNT(*), 0) * 100, 
    1
  ) INTO current_completion
  FROM training_sessions
  WHERE start_time >= date_trunc('month', CURRENT_DATE);
  
  -- Taux de completion précédent
  SELECT ROUND(
    COUNT(CASE WHEN completed = true THEN 1 END)::numeric / 
    NULLIF(COUNT(*), 0) * 100, 
    1
  ) INTO previous_completion
  FROM training_sessions
  WHERE start_time >= date_trunc('month', CURRENT_DATE - interval '1 month')
    AND start_time < date_trunc('month', CURRENT_DATE);

  RETURN QUERY
  SELECT
    COALESCE(current_sessions, 0) as total_sessions,
    COALESCE(current_users, 0) as active_users,
    COALESCE(current_completion, 0) as completion_rate,
    COALESCE((
      SELECT AVG(EXTRACT(EPOCH FROM (end_time - start_time))/60)
      FROM training_sessions
      WHERE completed = true
        AND start_time >= date_trunc('month', CURRENT_DATE)
    ), 0) as average_time,
    CASE 
      WHEN previous_sessions = 0 THEN '+100%'
      WHEN current_sessions > previous_sessions THEN 
        '+' || ROUND(((current_sessions - previous_sessions)::numeric / previous_sessions * 100), 1) || '%'
      ELSE 
        ROUND(((current_sessions - previous_sessions)::numeric / previous_sessions * 100), 1) || '%'
    END as sessions_trend,
    CASE 
      WHEN previous_users = 0 THEN '+100%'
      WHEN current_users > previous_users THEN 
        '+' || ROUND(((current_users - previous_users)::numeric / previous_users * 100), 1) || '%'
      ELSE 
        ROUND(((current_users - previous_users)::numeric / previous_users * 100), 1) || '%'
    END as users_trend,
    CASE 
      WHEN previous_completion = 0 THEN '+100%'
      WHEN current_completion > previous_completion THEN 
        '+' || ROUND((current_completion - previous_completion), 1) || '%'
      ELSE 
        ROUND((current_completion - previous_completion), 1) || '%'
    END as completion_trend;
END;
$$;