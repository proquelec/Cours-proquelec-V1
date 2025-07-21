import { Module } from '../../types';

export const travauxHT: Module = {
  id: 'travaux-ht',
  title: 'Travaux hors tension en haute tension',
  description: 'Module sur la préparation, l’exécution, la consignation, la sécurité et l’analyse des risques lors de travaux hors tension en HT.',
  category: 'charge-chantier',
  duration: 180,
  level: 'Intermédiaire',
  certification: 'Habilitation H1/H2/H1V/H2V',
  objectives: [
    'Citer les différents travaux hors tension',
    'Préciser le rôle du chargé de consignation et du chargé d’exploitation',
    'Identifier les niveaux d’habilitation et leurs limites',
    'Énoncer les prescriptions d’exécution',
    'Énoncer les fonctions des matériels électriques HT',
    'Nommer les documents applicables',
    'Énoncer les risques liés aux matériels et outillages',
    'Énoncer les instructions de sécurité spécifiques aux essais',
    'Respecter les instructions données',
    'Rendre compte de son activité',
    'Identifier, vérifier et utiliser le matériel et l’outillage appropriés',
    'Identifier les ouvrages ou installations et zones d’environnement',
    'Effectuer des travaux hors tension',
    'Réaliser une deuxième étape de consignation',
    'Respecter et faire respecter les règles de sécurité',
    'Analyser les risques pour une situation donnée'
  ],
  prerequisites: [
    'Avoir suivi le Tronc Commun N°2',
    'Connaître les bases de la sécurité électrique'
  ],
  slides: [
    {
      id: 'travaux-ht-slide-1',
      title: 'Introduction',
      content: `Ce module couvre la préparation, l’exécution, la consignation, la sécurité et l’analyse des risques lors de travaux hors tension en HT.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-2',
      title: 'Types de travaux hors tension',
      content: `Maintenance, réparation, modification, installation, avec ou sans présence de pièces nues sous tension.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-3',
      title: 'Rôle du chargé de consignation et d’exploitation',
      content: `Le chargé de consignation et le chargé d’exploitation assurent la sécurité, la planification et la réalisation des travaux.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-4',
      title: 'Niveaux d’habilitation',
      content: `H1, H2, H1V, H2V, H2V Essai : chaque niveau a ses caractéristiques et ses limites.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-5',
      title: 'Prescriptions d’exécution',
      content: `Procédures de sécurité, utilisation d’EPI appropriés, balisage et signalisation de la zone de travail.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-6',
      title: 'Fonctions des matériels électriques HT',
      content: `Conducteurs, isolateurs, transformateurs, disjoncteurs, sectionneurs, équipements de protection.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-7',
      title: 'Documents applicables',
      content: `Attestations de consignation, avis de fin de travail, autorisations de travail, instructions de sécurité.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-8',
      title: 'Risques liés aux matériels et outillages',
      content: `Contacts avec des pièces nues sous tension, amorçages et arcs électriques, courts-circuits.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-9',
      title: 'Instructions de sécurité spécifiques aux essais',
      content: `Procédures de sécurité, utilisation d’EPI appropriés, balisage et signalisation de la zone de travail.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-10',
      title: 'Respect des instructions et compte-rendu',
      content: `Respecter les instructions données, rendre compte de son activité au chargé de travaux.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-11',
      title: 'Matériel et outillage appropriés',
      content: `Identifier, vérifier et utiliser les instruments de mesure et EPI adaptés.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-12',
      title: 'Identification des ouvrages et zones d’environnement',
      content: `Identifier les domaines de tension, zones d’environnement, locaux réservés.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-13',
      title: 'Préparation et exécution des travaux',
      content: `Préparer les travaux en identifiant les matériels concernés, vérifier l’état des matériels et des EPI, respecter les prescriptions de sécurité.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-14',
      title: 'Deuxième étape de consignation',
      content: `Préparer et réaliser la deuxième étape de consignation en respectant les procédures de sécurité.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-15',
      title: 'Respect des règles et analyse des risques',
      content: `Respecter et faire respecter les règles de sécurité, analyser les risques pour chaque situation.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'travaux-ht-slide-16',
      title: 'Étude de cas',
      content: `Cas pratique : Travaux hors tension en HT sur une installation industrielle.`,
      type: 'text',
      duration: 180
    },
    {
      id: 'travaux-ht-slide-17',
      title: 'Quiz et exercices',
      content: `Quiz et exercices pratiques pour valider les acquis : identification des niveaux d’habilitation, préparation et exécution des travaux, analyse des risques.`,
      type: 'quiz',
      duration: 120
    }
  ]
};
