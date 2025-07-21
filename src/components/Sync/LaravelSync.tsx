import React, { useState, useEffect } from 'react';
import { Cloud, CloudOff, FolderSync as Sync, CheckCircle, AlertCircle, Settings } from 'lucide-react';

interface SyncStatus {
  connected: boolean;
  lastSync: Date | null;
  pendingChanges: number;
  syncInProgress: boolean;
}

interface LaravelSyncProps {
  apiUrl?: string;
  apiKey?: string;
  onSyncComplete?: (success: boolean) => void;
}

const LaravelSync: React.FC<LaravelSyncProps> = ({ 
  apiUrl = '', 
  apiKey = '', 
  onSyncComplete 
}) => {
  const [syncStatus, setSyncStatus] = useState<SyncStatus>({
    connected: false,
    lastSync: null,
    pendingChanges: 0,
    syncInProgress: false
  });
  
  const [config, setConfig] = useState({
    apiUrl: apiUrl,
    apiKey: apiKey,
    autoSync: false,
    syncInterval: 300 // 5 minutes
  });
  
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    // Vérifier la connexion au démarrage
    checkConnection();
    
    // Auto-sync si activé
    if (config.autoSync && config.syncInterval > 0) {
      const interval = setInterval(() => {
        if (syncStatus.connected && !syncStatus.syncInProgress) {
          performSync();
        }
      }, config.syncInterval * 1000);
      
      return () => clearInterval(interval);
    }
  }, [config.autoSync, config.syncInterval, syncStatus.connected, syncStatus.syncInProgress]);

  const checkConnection = async () => {
    if (!config.apiUrl || !config.apiKey) {
      setSyncStatus(prev => ({ ...prev, connected: false }));
      return;
    }

    try {
      // Simulation d'un test de connexion
      const response = await fetch(`${config.apiUrl}/api/health`, {
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      setSyncStatus(prev => ({ 
        ...prev, 
        connected: response.ok 
      }));
    } catch (error) {
      console.error('Erreur de connexion:', error);
      setSyncStatus(prev => ({ ...prev, connected: false }));
    }
  };

  const performSync = async () => {
    if (!config.apiUrl || !config.apiKey) {
      return;
    }

    setSyncStatus(prev => ({ ...prev, syncInProgress: true }));

    try {
      // Synchronisation des modules
      const modulesData = localStorage.getItem('training-modules');
      if (modulesData) {
        await fetch(`${config.apiUrl}/api/modules/sync`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${config.apiKey}`,
            'Content-Type': 'application/json'
          },
          body: modulesData
        });
      }

      // Synchronisation des sessions
      const sessionsData = localStorage.getItem('training-sessions');
      if (sessionsData) {
        await fetch(`${config.apiUrl}/api/sessions/sync`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${config.apiKey}`,
            'Content-Type': 'application/json'
          },
          body: sessionsData
        });
      }

      setSyncStatus(prev => ({
        ...prev,
        lastSync: new Date(),
        pendingChanges: 0,
        syncInProgress: false
      }));

      onSyncComplete?.(true);
    } catch (error) {
      console.error('Erreur de synchronisation:', error);
      setSyncStatus(prev => ({ ...prev, syncInProgress: false }));
      onSyncComplete?.(false);
    }
  };

  const handleConfigSave = () => {
    setShowConfig(false);
    checkConnection();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Synchronisation Laravel
        </h3>
        
        <button
          onClick={() => setShowConfig(!showConfig)}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>

      {/* Statut de connexion */}
      <div className="flex items-center space-x-3 mb-4">
        {syncStatus.connected ? (
          <>
            <Cloud className="h-5 w-5 text-green-600" />
            <span className="text-sm text-green-600 dark:text-green-400">
              Connecté au serveur Laravel
            </span>
          </>
        ) : (
          <>
            <CloudOff className="h-5 w-5 text-red-600" />
            <span className="text-sm text-red-600 dark:text-red-400">
              Non connecté
            </span>
          </>
        )}
      </div>

      {/* Informations de synchronisation */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Dernière sync:</span>
          <span className="text-gray-900 dark:text-white">
            {syncStatus.lastSync 
              ? syncStatus.lastSync.toLocaleString('fr-FR')
              : 'Jamais'
            }
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Modifications en attente:</span>
          <span className="text-gray-900 dark:text-white">
            {syncStatus.pendingChanges}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <button
          onClick={performSync}
          disabled={!syncStatus.connected || syncStatus.syncInProgress}
          className="flex-1 flex items-center justify-center space-x-2 bg-electric-600 hover:bg-electric-700 disabled:bg-electric-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          {syncStatus.syncInProgress ? (
            <>
              <Sync className="h-4 w-4 animate-spin" />
              <span>Synchronisation...</span>
            </>
          ) : (
            <>
              <Sync className="h-4 w-4" />
              <span>Synchroniser</span>
            </>
          )}
        </button>
        
        <button
          onClick={checkConnection}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Tester
        </button>
      </div>

      {/* Configuration */}
      {showConfig && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              URL de l'API Laravel
            </label>
            <input
              type="url"
              value={config.apiUrl}
              onChange={(e) => setConfig(prev => ({ ...prev, apiUrl: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="https://votre-site.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Clé API
            </label>
            <input
              type="password"
              value={config.apiKey}
              onChange={(e) => setConfig(prev => ({ ...prev, apiKey: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Votre clé API"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Synchronisation automatique
            </span>
            <button
              onClick={() => setConfig(prev => ({ ...prev, autoSync: !prev.autoSync }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                config.autoSync ? 'bg-electric-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  config.autoSync ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          {config.autoSync && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Intervalle (secondes)
              </label>
              <input
                type="number"
                min="60"
                max="3600"
                value={config.syncInterval}
                onChange={(e) => setConfig(prev => ({ ...prev, syncInterval: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          )}
          
          <button
            onClick={handleConfigSave}
            className="w-full bg-electric-600 hover:bg-electric-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Sauvegarder la configuration
          </button>
        </div>
      )}
    </div>
  );
};

export default LaravelSync;