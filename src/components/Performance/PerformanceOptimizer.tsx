import React, { useEffect, useState } from 'react';
import { Zap, Monitor, Cpu, HardDrive, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  networkLatency: number;
  renderTime: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    networkLatency: 0,
    renderTime: 0
  });

  const [optimizations, setOptimizations] = useState({
    imageCompression: true,
    lazyLoading: true,
    caching: true,
    preloading: false
  });

  useEffect(() => {
    // Mesure des performances
    const measurePerformance = () => {
      // FPS
      let lastTime = performance.now();
      let frameCount = 0;
      
      const countFPS = () => {
        frameCount++;
        const currentTime = performance.now();
        if (currentTime - lastTime >= 1000) {
          setMetrics(prev => ({ ...prev, fps: frameCount }));
          frameCount = 0;
          lastTime = currentTime;
        }
        requestAnimationFrame(countFPS);
      };
      requestAnimationFrame(countFPS);

      // Mémoire
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }));
      }

      // Temps de chargement
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart)
        }));
      }
    };

    measurePerformance();
    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, []);

  const applyOptimizations = () => {
    // Compression d'images
    if (optimizations.imageCompression) {
      document.querySelectorAll('img').forEach(img => {
        if (!img.dataset.optimized) {
          img.loading = 'lazy';
          img.dataset.optimized = 'true';
        }
      });
    }

    // Préchargement des ressources critiques
    if (optimizations.preloading) {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/logo.svg'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.woff') ? 'font' : 'image';
        if (link.as === 'font') link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }
  };

  useEffect(() => {
    applyOptimizations();
  }, [optimizations]);

  const getPerformanceStatus = (value: number, thresholds: [number, number]) => {
    if (value >= thresholds[1]) return 'excellent';
    if (value >= thresholds[0]) return 'good';
    return 'poor';
  };

  const StatusIndicator: React.FC<{ status: string }> = ({ status }) => {
    const colors = {
      excellent: 'bg-green-500',
      good: 'bg-yellow-500',
      poor: 'bg-red-500'
    };
    
    return (
      <div className={`w-3 h-3 rounded-full ${colors[status as keyof typeof colors]}`} />
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Zap className="h-5 w-5 text-electric-600" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Optimisation des Performances
        </h3>
      </div>

      {/* Métriques de performance */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <Monitor className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <StatusIndicator status={getPerformanceStatus(metrics.fps, [30, 50])} />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            {metrics.fps}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">FPS</div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <Cpu className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <StatusIndicator status={getPerformanceStatus(100 - metrics.memoryUsage, [50, 80])} />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            {metrics.memoryUsage}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">MB RAM</div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <HardDrive className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <StatusIndicator status={getPerformanceStatus(5000 - metrics.loadTime, [2000, 3000])} />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            {Math.round(metrics.loadTime / 1000 * 10) / 10}s
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Chargement</div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <Wifi className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <StatusIndicator status="good" />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            {metrics.networkLatency}ms
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Latence</div>
        </div>
      </div>

      {/* Options d'optimisation */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-900 dark:text-white">
          Optimisations actives
        </h4>

        {Object.entries(optimizations).map(([key, enabled]) => {
          const labels = {
            imageCompression: 'Compression d\'images',
            lazyLoading: 'Chargement différé',
            caching: 'Mise en cache',
            preloading: 'Préchargement'
          };

          return (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {labels[key as keyof typeof labels]}
              </span>
              <button
                onClick={() => setOptimizations(prev => ({ ...prev, [key]: !enabled }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  enabled ? 'bg-electric-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Recommandations */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
          Recommandations
        </h4>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          {metrics.fps < 30 && (
            <li>• Réduisez les animations pour améliorer la fluidité</li>
          )}
          {metrics.memoryUsage > 100 && (
            <li>• Optimisez les images pour réduire l'usage mémoire</li>
          )}
          {metrics.loadTime > 3000 && (
            <li>• Activez le préchargement pour accélérer le chargement</li>
          )}
          <li>• Utilisez un projecteur avec résolution native 1920x1080</li>
          <li>• Fermez les applications inutiles pendant la présentation</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;