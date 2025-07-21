import { Module } from '../../types';

export const essaisHT: Module = {
  id: 'essais-ht',
  title: 'Essais en haute tension (H2V Essai)',
  description: 'Module sur les instructions de sécurité, la préparation, l’exécution et l’analyse des risques lors des essais en HT.',
  category: 'specialise',
  duration: 90,
  level: 'Avancé',
  certification: 'Habilitation H2V Essai',
  objectives: [
    'Énoncer les instructions de sécurité spécifiques aux essais',
    'Préparer et exécuter les essais en sécurité',
    'Utiliser les EPI appropriés',
    'Analyser les risques pour une situation donnée',
    'Rédiger les documents applicables',
    'Rendre compte de son activité'
  ],
  prerequisites: [
    'Avoir suivi le module Travaux HT',
    'Connaître les prescriptions de sécurité HT'
  ],
  slides: [
    {
      id: 'essais-ht-slide-1',
      title: 'Introduction',
      content: `Ce module traite des essais en haute tension, des instructions de sécurité, de la préparation, de l’exécution et de l’analyse des risques.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'essais-ht-slide-2',
      title: 'Instructions de sécurité spécifiques',
      content: `Respecter les procédures de sécurité, utiliser les EPI appropriés, baliser et signaler la zone de travail.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'essais-ht-slide-3',
      title: 'Préparation des essais',
      content: `Préparer les essais en identifiant les matériels concernés, vérifier l’état des matériels et des EPI, respecter les prescriptions de sécurité.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'essais-ht-slide-4',
      title: 'Exécution des essais',
      content: `Réaliser les essais en respectant les procédures de sécurité et en utilisant les EPI appropriés.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'essais-ht-slide-5',
      title: 'Analyse des risques',
      content: `Analyser les risques pour chaque situation et mettre en place les mesures de prévention adaptées.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'essais-ht-slide-6',
      title: 'Rédaction des documents',
      content: `Rédiger les documents applicables (rapports d’essai, consignes, etc.) pour assurer la traçabilité et la sécurité.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'essais-ht-slide-7',
      title: 'Compte-rendu d’activité',
      content: `Rendre compte de son activité au chargé de travaux et consigner les résultats des essais.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'essais-ht-slide-8',
      title: 'Quiz et exercices',
      content: `Quiz et exercices pratiques pour valider les acquis : préparation, exécution, analyse des risques, rédaction des documents.`,
      type: 'quiz',
      duration: 90
    }
  ]
};
