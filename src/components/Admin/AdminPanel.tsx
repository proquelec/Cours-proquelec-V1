import React, { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  Upload, 
  Download,
  Eye,
  Settings,
  Users,
  BarChart3,
  FileText,
  Share2,
  Zap,
  Accessibility
} from 'lucide-react';
import { Module, Slide } from '../../types';
import { useLocalModules } from '../../hooks/useLocalModules';
import PresentationExporter from '../Export/PresentationExporter';
import PresentationAnalytics from '../Analytics/PresentationAnalytics';
import LaravelSync from '../Sync/LaravelSync';
import PerformanceOptimizer from '../Performance/PerformanceOptimizer';
import AccessibilityPanel from '../Accessibility/AccessibilityPanel';

const AdminPanel: React.FC = () => {
  const { modules, loading } = useLocalModules();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [editingSlide, setEditingSlide] = useState<Slide | null>(null);
  const [activeTab, setActiveTab] = useState<'modules' | 'slides' | 'export' | 'analytics' | 'sync' | 'performance' | 'accessibility' | 'settings'>('modules');

  const handleCreateModule = async () => {
    try {
      // Pour la version locale, on simule la création d'un module
      console.log('Création de module - fonctionnalité à implémenter pour le stockage local');
      alert('Fonctionnalité de création de module à implémenter pour le stockage local');
    } catch (error) {
      console.error('Erreur lors de la création du module:', error);
    }
  };

  const handleCreateSlide = () => {
    if (!selectedModule) return;

    const newSlide: Slide = {
      id: `slide-${Date.now()}`,
      title: 'Nouvelle Diapositive',
      content: 'Contenu de la nouvelle diapositive',
      type: 'text',
      duration: 300
    };

    const updatedModule = {
      ...selectedModule,
      slides: [...selectedModule.slides, newSlide]
    };

    setSelectedModule(updatedModule);
    setEditingSlide(newSlide);
  };

  const handleSaveSlide = (slide: Slide) => {
    if (!selectedModule) return;

    const updatedSlides = selectedModule.slides.map(s => 
      s.id === slide.id ? slide : s
    );

    const updatedModule = {
      ...selectedModule,
      slides: updatedSlides
    };

    setSelectedModule(updatedModule);
    setEditingSlide(null);
  };

  const handleDeleteSlide = (slideId: string) => {
    if (!selectedModule) return;

    const updatedModule = {
      ...selectedModule,
      slides: selectedModule.slides.filter(s => s.id !== slideId)
    };

    setSelectedModule(updatedModule);
  };

  const handleExportModule = (module: Module) => {
    const dataStr = JSON.stringify(module, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${module.title.replace(/\s+/g, '_')}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleSaveModule = async () => {
    if (!selectedModule) return;

    try {
      // Pour la version locale, on simule la sauvegarde
      console.log('Sauvegarde de module - fonctionnalité à implémenter pour le stockage local');
      alert('Module sauvegardé (simulation pour stockage local)');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du module:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-600"></div>
      </div>
    );
  }

  const renderModulesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Gestion des Modules
        </h2>
        <button
          onClick={handleCreateModule}
          className="flex items-center space-x-2 bg-electric-600 hover:bg-electric-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Nouveau Module</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Liste des modules */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Modules ({modules.length})
            </h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {modules.map(module => (
              <div
                key={module.id}
                className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  selectedModule?.id === module.id ? 'bg-electric-50 dark:bg-electric-900/20' : ''
                }`}
                onClick={() => setSelectedModule(module)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {module.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {module.slides.length} diapositives • {Math.floor(module.duration / 60)}h{module.duration % 60}min
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExportModule(module);
                      }}
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      title="Exporter"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      title="Modifier"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Détails du module sélectionné */}
        {selectedModule && (
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {selectedModule.title}
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Titre
                </label>
                <input
                  type="text"
                  value={selectedModule.title}
                  onChange={(e) => {
                    const updated = { ...selectedModule, title: e.target.value };
                    setSelectedModule(updated);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={selectedModule.description}
                  onChange={(e) => {
                    const updated = { ...selectedModule, description: e.target.value };
                    setSelectedModule(updated);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Durée (minutes)
                  </label>
                  <input
                    type="number"
                    value={selectedModule.duration}
                    onChange={(e) => {
                      const updated = { ...selectedModule, duration: parseInt(e.target.value) };
                      setSelectedModule(updated);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Niveau
                  </label>
                  <select
                    value={selectedModule.level}
                    onChange={(e) => {
                      const updated = { ...selectedModule, level: e.target.value };
                      setSelectedModule(updated);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="Débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Confirmé">Confirmé</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleSaveModule}
                  className="flex-1 flex items-center justify-center space-x-2 bg-electric-600 hover:bg-electric-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Save className="h-4 w-4" />
                  <span>Sauvegarder</span>
                </button>
                <button
                  onClick={handleCreateSlide}
                  className="flex-1 flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Ajouter une diapositive</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderSlidesTab = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Gestion des Diapositives
      </h2>

      {!selectedModule ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Sélectionnez un module pour gérer ses diapositives
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Liste des diapositives */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-medium text-gray-900 dark:text-white">
                Diapositives - {selectedModule.title}
              </h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {selectedModule.slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    editingSlide?.id === slide.id ? 'bg-electric-50 dark:bg-electric-900/20' : ''
                  }`}
                  onClick={() => setEditingSlide(slide)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          {index + 1}
                        </span>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {slide.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {slide.type} • {slide.duration ? `${Math.floor(slide.duration / 60)}:${(slide.duration % 60).toString().padStart(2, '0')}` : '5:00'}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingSlide(slide);
                        }}
                        className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        title="Modifier"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSlide(slide.id);
                        }}
                        className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                        title="Supprimer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Éditeur de diapositive */}
          {editingSlide && (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Édition de la diapositive
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Titre
                  </label>
                  <input
                    type="text"
                    value={editingSlide.title}
                    onChange={(e) => setEditingSlide({ ...editingSlide, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Type
                  </label>
                  <select
                    value={editingSlide.type}
                    onChange={(e) => setEditingSlide({ ...editingSlide, type: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="text">Texte</option>
                    <option value="image">Image</option>
                    <option value="video">Vidéo</option>
                    <option value="quiz">Quiz</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Contenu
                  </label>
                  <textarea
                    value={editingSlide.content}
                    onChange={(e) => setEditingSlide({ ...editingSlide, content: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    rows={6}
                  />
                </div>

                {(editingSlide.type === 'image' || editingSlide.type === 'video') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      URL du média
                    </label>
                    <input
                      type="url"
                      value={editingSlide.media || ''}
                      onChange={(e) => setEditingSlide({ ...editingSlide, media: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="https://..."
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Notes du formateur
                  </label>
                  <textarea
                    value={editingSlide.notes || ''}
                    onChange={(e) => setEditingSlide({ ...editingSlide, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    rows={3}
                    placeholder="Notes privées pour le formateur..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Durée (secondes)
                  </label>
                  <input
                    type="number"
                    value={editingSlide.duration || 300}
                    onChange={(e) => setEditingSlide({ ...editingSlide, duration: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleSaveSlide(editingSlide)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-electric-600 hover:bg-electric-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Save className="h-4 w-4" />
                    <span>Sauvegarder</span>
                  </button>
                  <button
                    onClick={() => setEditingSlide(null)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Administration Avancée
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gestion complète des modules, performances et accessibilité
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'modules', label: 'Modules', icon: Settings },
                { id: 'slides', label: 'Diapositives', icon: Edit },
                { id: 'export', label: 'Export', icon: FileText },
                { id: 'analytics', label: 'Analytiques', icon: BarChart3 },
                { id: 'sync', label: 'Synchronisation', icon: Share2 },
                { id: 'performance', label: 'Performance', icon: Zap },
                { id: 'accessibility', label: 'Accessibilité', icon: Accessibility },
                { id: 'settings', label: 'Paramètres', icon: Users }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-electric-500 text-electric-600 dark:text-electric-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'modules' && renderModulesTab()}
          {activeTab === 'slides' && renderSlidesTab()}
          {activeTab === 'export' && selectedModule && (
            <PresentationExporter 
              module={selectedModule}
              onExportComplete={(success, format) => {
                console.log(`Export ${format} ${success ? 'réussi' : 'échoué'}`);
              }}
            />
          )}
          {activeTab === 'analytics' && <PresentationAnalytics />}
          {activeTab === 'sync' && (
            <LaravelSync 
              onSyncComplete={(success) => {
                console.log(`Synchronisation ${success ? 'réussie' : 'échouée'}`);
              }}
            />
          )}
          {activeTab === 'performance' && <PerformanceOptimizer />}
          {activeTab === 'accessibility' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Configuration de l'Accessibilité
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Les options d'accessibilité sont disponibles via le bouton flottant en bas à droite de l'écran.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                  Fonctionnalités d'accessibilité incluses :
                </h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Contraste élevé pour une meilleure lisibilité</li>
                  <li>• Ajustement de la taille du texte</li>
                  <li>• Support des modes daltoniens</li>
                  <li>• Réduction des animations</li>
                  <li>• Navigation clavier complète</li>
                  <li>• Descriptions audio pour les médias</li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Paramètres système avancés - À venir
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Panneau d'accessibilité flottant */}
      <AccessibilityPanel />
    </div>
  );
};

export default AdminPanel;