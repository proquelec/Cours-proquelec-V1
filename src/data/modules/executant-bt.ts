import { Module } from '../../types';

export const executantBT: Module = {
  id: 'executant-bt',
  title: 'Exécutant et chargé de travaux hors tension en basse tension (B1, B2, B1V, B2V, B2V Essai)',
  description: 'Module sur les rôles, prescriptions, habilitations, sécurité et procédures pour les travaux hors tension en basse tension.',
  category: 'charge-chantier',
  duration: 150,
  level: 'Intermédiaire',
  certification: 'Habilitation B1/B2/B1V/B2V/B2V Essai',
  objectives: [
    'Préciser le rôle de l’exécutant et du chargé de travaux en BT',
    'Identifier les niveaux d’habilitation B1, B2, B1V, B2V, B2V Essai',
    'Énoncer les prescriptions d’exécution des travaux hors tension',
    'Appliquer les procédures de sécurité',
    'Utiliser les EPI appropriés',
    'Identifier et utiliser le matériel et l’outillage adaptés',
    'Analyser les risques pour une situation donnée',
    'Rendre compte de son activité',
    'Respecter et faire respecter les règles de sécurité'
  ],
  prerequisites: [
    'Avoir suivi le Tronc Commun N°1',
    'Connaître les bases de la sécurité électrique'
  ],
  slides: [
    {
      id: 'executant-bt-slide-1',
      title: 'Introduction',
      content: `Ce module couvre les rôles, prescriptions, habilitations, sécurité et procédures pour les travaux hors tension en basse tension (BT).`,
      type: 'text',
      duration: 90
    },
    {
      id: 'executant-bt-slide-2',
      title: 'Rôle de l’exécutant et du chargé de travaux',
      content: `L’exécutant réalise les travaux, le chargé de travaux planifie, supervise et assure la sécurité.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'executant-bt-slide-3',
      title: 'Niveaux d’habilitation',
      content: `B1, B2, B1V, B2V, B2V Essai : chaque niveau a ses caractéristiques et ses limites.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'executant-bt-slide-4',
      title: 'Prescriptions d’exécution',
      content: `Procédures de sécurité, utilisation d’EPI appropriés, balisage et signalisation de la zone de travail.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'executant-bt-slide-5',
      title: 'Matériel et outillage adaptés',
      content: `Identifier, vérifier et utiliser les instruments de mesure, EPI et outillages adaptés à la BT.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'executant-bt-slide-6',
      title: 'Analyse des risques',
      content: `Analyser les risques pour chaque situation et mettre en place les mesures de prévention adaptées.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'executant-bt-slide-7',
      title: 'Compte-rendu d’activité',
      content: `Rendre compte de son activité au chargé de travaux et consigner les opérations réalisées.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'executant-bt-slide-8',
      title: 'Respect des règles de sécurité',
      content: `Respecter et faire respecter les règles de sécurité, appliquer les procédures et utiliser les EPI.`,
      type: 'text',
      duration: 90
    },
    {
      id: 'executant-bt-slide-9',
      title: 'Quiz et exercices',
      content: `Quiz et exercices pratiques pour valider les acquis : identification des niveaux d’habilitation, préparation et exécution des travaux, analyse des risques.`,
      type: 'quiz',
      duration: 90
    }
  ]
};
