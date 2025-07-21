import { useState, useEffect } from 'react';
import { Module } from '../types';
import { allModules, getModuleById, getModulesByCategory, searchModules } from '../data/modules';

export const useLocalModules = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simuler un petit délai de chargement pour l'UX
    const timer = setTimeout(() => {
      setModules(allModules);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const fetchModules = async () => {
    setLoading(true);
    try {
      // Simuler une requête async
      await new Promise(resolve => setTimeout(resolve, 100));
      setModules(allModules);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des modules');
    } finally {
      setLoading(false);
    }
  };

  const getModule = (id: string): Module | undefined => {
    return getModuleById(id);
  };

  const filterModules = (category: string): Module[] => {
    return getModulesByCategory(category);
  };

  const searchInModules = (searchTerm: string): Module[] => {
    return searchModules(searchTerm);
  };

  return {
    modules,
    loading,
    error,
    fetchModules,
    getModule,
    filterModules,
    searchInModules
  };
};