import React, { useState, useEffect } from 'react';
import { BarChart3, Clock, Users, TrendingUp, Eye, Target, RefreshCw } from 'lucide-react';

const PresentationAnalytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');

  const fetchAnalytics = () => {
    setLoading(true);
    // Simuler des données analytiques pour la démo
    setTimeout(() => {
      setAnalytics({
        moduleStats: [
          { id: '1', title: 'Tronc Commun N°1', total_sessions: 45, total_users: 32, completion_rate: 85, average_score: 78 },
          { id: '2', title: 'Tronc Commun N°2', total_sessions: 38, total_users: 28, completion_rate: 92, average_score: 82 },
          { id: '3', title: 'B0-H0-H0V', total_sessions: 25, total_users: 20, completion_rate: 88, average_score: 75 },
          { id: '4', title: 'BS Interventions', total_sessions: 18, total_users: 15, completion_rate: 90, average_score: 80 },
          { id: '5', title: 'NF C 18-510', total_sessions: 52, total_users: 40, completion_rate: 87, average_score: 79 }
        ],
        recentSessions: [
          { id: '1', modules: { title: 'Tronc Commun N°1' }, users: { name: 'Jean Dupont' }, start_time: new Date().toISOString(), completed: true },
          { id: '2', modules: { title: 'NF C 18-510' }, users: { name: 'Marie Martin' }, start_time: new Date().toISOString(), completed: false },
          { id: '3', modules: { title: 'BS Interventions' }, users: { name: 'Pierre Durand' }, start_time: new Date().toISOString(), completed: true },
          { id: '4', modules: { title: 'B0-H0-H0V' }, users: { name: 'Sophie Leroy' }, start_time: new Date().toISOString(), completed: true },
          { id: '5', modules: { title: 'Tronc Commun N°2' }, users: { name: 'Paul Bernard' }, start_time: new Date().toISOString(), completed: false }
        ],
        globalStats: {
          totalSessions: 178,
          activeUsers: 95,
          completionRate: 88,
          averageTime: 45,
          sessionsTrend: '+12%',
          usersTrend: '+8%',
          completionTrend: '+5%'
        }
      });
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-600"></div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="text-center py-12">
        <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500 dark:text-gray-400">
          Aucune donnée analytique disponible
        </p>
        <button
          onClick={fetchAnalytics}
          className="mt-4 flex items-center space-x-2 bg-electric-600 hover:bg-electric-700 text-white px-4 py-2 rounded-lg transition-colors mx-auto"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Actualiser</span>
        </button>
      </div>
    );
  }

  const { moduleStats, recentSessions, globalStats } = analytics;

  const StatCard: React.FC<{
    title: string;
    value: string | number;
    icon: React.ReactNode;
    trend?: string;
    color: string;
  }> = ({ title, value, icon, trend, color }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          {trend && (
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              {trend}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Analytiques de Formation
        </h2>
        
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
            <option value="year">Cette année</option>
          </select>
          
          <button
            onClick={fetchAnalytics}
            className="flex items-center space-x-2 bg-electric-600 hover:bg-electric-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Actualiser</span>
          </button>
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Sessions totales"
          value={globalStats.totalSessions || 0}
          icon={<Eye className="h-6 w-6 text-blue-600" />}
          trend={globalStats.sessionsTrend}
          color="bg-blue-100 dark:bg-blue-900"
        />
        
        <StatCard
          title="Utilisateurs actifs"
          value={globalStats.activeUsers || 0}
          icon={<Users className="h-6 w-6 text-green-600" />}
          trend={globalStats.usersTrend}
          color="bg-green-100 dark:bg-green-900"
        />
        
        <StatCard
          title="Taux de completion"
          value={`${globalStats.completionRate || 0}%`}
          icon={<Target className="h-6 w-6 text-purple-600" />}
          trend={globalStats.completionTrend}
          color="bg-purple-100 dark:bg-purple-900"
        />
        
        <StatCard
          title="Temps moyen"
          value={`${globalStats.averageTime || 0}min`}
          icon={<Clock className="h-6 w-6 text-orange-600" />}
          color="bg-orange-100 dark:bg-orange-900"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Modules populaires */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Modules les plus utilisés
          </h3>
          
          <div className="space-y-4">
            {moduleStats.slice(0, 5).map((module: any, index: number) => {
              const maxSessions = moduleStats[0]?.total_sessions || 1;
              const percentage = (module.total_sessions / maxSessions) * 100;
              
              return (
                <div key={module.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {module.title}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {module.total_sessions} sessions
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-electric-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sessions récentes */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Sessions récentes
          </h3>
          
          <div className="space-y-3">
            {recentSessions.slice(0, 8).map((session: any) => (
              <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {session.modules?.title || 'Module inconnu'}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {session.users?.name || 'Utilisateur inconnu'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(session.start_time).toLocaleDateString('fr-FR')}
                  </p>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                    session.completed 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {session.completed ? 'Terminé' : 'En cours'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Graphique de performance par module */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Performance par module
        </h3>
        
        <div className="space-y-4">
          {moduleStats.map((module: any) => (
            <div key={module.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {module.title}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{module.total_users} utilisateurs</span>
                  <span>{module.completion_rate}% complété</span>
                  <span>{module.average_score}% score moyen</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-electric-500 to-electric-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${module.completion_rate}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresentationAnalytics;