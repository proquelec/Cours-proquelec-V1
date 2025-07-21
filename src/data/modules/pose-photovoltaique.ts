import { Module } from '../../types';

export const posePhotovoltaique: Module = {
  id: 'pose-photovoltaique',
  title: 'Pose photovoltaïque (BP)',
  description: 'Installation, sécurité et réglementation pour la pose de panneaux photovoltaïques.',
  category: 'specialise',
  duration: 2,
  level: 'Intermédiaire',
  certification: 'BP',
  objectives: [
    'Comprendre les principes de l’énergie photovoltaïque',
    'Connaître les étapes d’installation des panneaux',
    'Appliquer les règles de sécurité lors de la pose',
    'Respecter la réglementation en vigueur',
    'Assurer la maintenance de base des installations photovoltaïques'
  ],
  prerequisites: [
    'Module Tronc Commun N°1'
  ],
  slides: [
    {
      id: 'pose-photovoltaique-1',
      type: 'text',
      title: 'Introduction à l’énergie photovoltaïque',
      content: 'Principe de fonctionnement, composants d’une installation, avantages et limites.'
    },
    {
      id: 'pose-photovoltaique-2',
      type: 'text',
      title: 'Étapes d’installation',
      content: 'Préparation du chantier, pose des panneaux, raccordement électrique, vérifications.'
    },
    {
      id: 'pose-photovoltaique-3',
      type: 'text',
      title: 'Sécurité lors de la pose',
      content: 'EPI, prévention des chutes, gestion des risques électriques, balisage.'
    },
    {
      id: 'pose-photovoltaique-4',
      type: 'text',
      title: 'Réglementation',
      content: 'Normes applicables, démarches administratives, conformité.'
    },
    {
      id: 'pose-photovoltaique-5',
      type: 'text',
      title: 'Maintenance de base',
      content: 'Contrôles périodiques, nettoyage, détection des anomalies.'
    }
  ]
};
