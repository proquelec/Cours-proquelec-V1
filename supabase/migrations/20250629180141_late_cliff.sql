/*
  # Fonction pour obtenir les statistiques du tableau de bord utilisateur

  Cette fonction retourne les statistiques de progression d'un utilisateur.
*/

CREATE OR REPLACE FUNCTION get_user_dashboard_stats(p_user_id uuid)
RETURNS TABLE (
  total_modules bigint,
  completed_modules bigint,
  in_progress_modules bigint,
  total_time_spent bigint,
  average_score numeric,
  certifications_earned bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT
    -- Total des modules disponibles
    (SELECT COUNT(*) FROM modules WHERE is_active = true) as total_modules,
    
    -- Modules complétés (100%)
    (SELECT COUNT(*) FROM user_progress 
     WHERE user_id = p_user_id AND completion_percentage = 100) as completed_modules,
    
    -- Modules en cours (> 0% et < 100%)
    (SELECT COUNT(*) FROM user_progress 
     WHERE user_id = p_user_id AND completion_percentage > 0 AND completion_percentage < 100) as in_progress_modules,
    
    -- Temps total passé (en secondes)
    COALESCE((SELECT SUM(total_time_spent) FROM user_progress WHERE user_id = p_user_id), 0) as total_time_spent,
    
    -- Score moyen
    (SELECT AVG(best_score) FROM user_progress 
     WHERE user_id = p_user_id AND best_score IS NOT NULL) as average_score,
    
    -- Certifications obtenues
    (SELECT COUNT(*) FROM certifications 
     WHERE user_id = p_user_id AND is_valid = true) as certifications_earned;
END;
$$;