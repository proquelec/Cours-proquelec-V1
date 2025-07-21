import { Module } from '../../types';

export const mesuragesBT: Module = {
  id: 'mesurages-bt',
  title: 'Mesurages et vérifications en basse tension (BE Mesurage, BE Vérification)',
  description: 'Réalisation de mesurages et vérifications en BT, sécurité, documents et prévention.',
  category: 'specialise',
  duration: 1,
  level: 'Intermédiaire',
  certification: 'BE Mesurage, BE Vérification',
  objectives: [
    'Connaître les documents applicables et les consignes',
    'Réaliser des mesurages et vérifications en sécurité',
    'Utiliser les EPI et outillages adaptés',
    'Analyser les risques et appliquer les mesures de prévention',
    'Rendre compte de son activité'
  ],
  prerequisites: [
    'Module Tronc Commun N°1'
  ],
  slides: [
    {
      id: 'mesurages-bt-1',
      type: 'text',
      title: 'Documents applicables',
      content: 'Autorisation d’accès, instructions de sécurité, fiches de mesurage.'
    },
    {
      id: 'mesurages-bt-2',
      type: 'text',
      title: 'Réalisation des mesurages',
      content: 'Préparation, exécution, vérification et traçabilité des mesurages.'
    },
    {
      id: 'mesurages-bt-3',
      type: 'text',
      title: 'Utilisation des EPI et outillages',
      content: 'Choix, vérification et utilisation des équipements adaptés.'
    },
    {
      id: 'mesurages-bt-4',
      type: 'text',
      title: 'Gestion des risques',
      content: 'Identification des dangers, analyse des risques, mesures de prévention.'
    },
    {
      id: 'mesurages-bt-5',
      type: 'text',
      title: 'Compte rendu d’activité',
      content: 'Rédaction et transmission des informations après mesurage.'
    }
  ]
};
