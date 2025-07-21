import { Module } from '../../types';

export const manoeuvresBT: Module = {
  id: 'manoeuvres-bt',
  title: 'Manœuvres en basse tension (BE Manœuvre)',
  description: 'Procédures, sécurité et limites pour la réalisation de manœuvres en basse tension.',
  category: 'specialise',
  duration: 1,
  level: 'Intermédiaire',
  certification: 'BE Manœuvre',
  objectives: [
    'Connaître les limites de l’habilitation BE Manœuvre',
    'Appliquer les instructions de sécurité spécifiques',
    'Réaliser des manœuvres en toute sécurité',
    'Identifier les risques et utiliser les EPI adaptés',
    'Rendre compte de son activité'
  ],
  prerequisites: [
    'Module Tronc Commun N°1'
  ],
  slides: [
    {
      id: 'manoeuvres-bt-1',
      type: 'text',
      title: 'Limites de l’habilitation',
      content: 'Ce que permet et interdit l’habilitation BE Manœuvre en BT.'
    },
    {
      id: 'manoeuvres-bt-2',
      type: 'text',
      title: 'Instructions de sécurité',
      content: 'Procédures à respecter, EPI obligatoires, balisage et signalisation.'
    },
    {
      id: 'manoeuvres-bt-3',
      type: 'text',
      title: 'Réalisation des manœuvres',
      content: 'Préparation, exécution, vérification et traçabilité des manœuvres.'
    },
    {
      id: 'manoeuvres-bt-4',
      type: 'text',
      title: 'Gestion des risques',
      content: 'Identification des dangers, analyse des risques, mesures de prévention.'
    },
    {
      id: 'manoeuvres-bt-5',
      type: 'text',
      title: 'Compte rendu d’activité',
      content: 'Rédaction et transmission des informations après manœuvre.'
    }
  ]
};
