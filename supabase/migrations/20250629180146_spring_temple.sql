/*
  # Vue pour les statistiques des modules

  Cette vue agrège les statistiques de chaque module pour les formateurs.
*/

CREATE OR REPLACE VIEW module_statistics AS
SELECT
  m.id,
  m.title,
  m.category,
  m.duration,
  COUNT(DISTINCT ts.user_id) as total_users,
  COUNT(DISTINCT CASE WHEN ts.completed = true THEN ts.user_id END) as completed_users,
  ROUND(
    COUNT(DISTINCT CASE WHEN ts.completed = true THEN ts.user_id END)::numeric / 
    NULLIF(COUNT(DISTINCT ts.user_id), 0) * 100, 
    2
  ) as completion_rate,
  AVG(ts.score) as average_score,
  AVG(EXTRACT(EPOCH FROM (ts.end_time - ts.start_time))/60) as average_duration_minutes,
  COUNT(ts.id) as total_sessions,
  MAX(ts.start_time) as last_session_date
FROM modules m
LEFT JOIN training_sessions ts ON m.id = ts.module_id
WHERE m.is_active = true
GROUP BY m.id, m.title, m.category, m.duration
ORDER BY total_users DESC;