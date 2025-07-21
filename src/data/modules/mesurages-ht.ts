import { Module } from '../../types';

export const mesuragesHT: Module = {
  id: 'mesurages-ht',
  title: 'Mesurages et vérifications en haute tension',
  description: 'Module complet sur les opérations de mesurage et de vérification en haute tension, les risques, les documents, la sécurité et les procédures.',
  category: 'specialise',
  duration: 150,
  level: 'Intermédiaire',
  certification: 'Habilitation HE Mesurage/HE Vérification',
  objectives: [
    'Préciser le rôle du chargé d\'exploitation électrique',
    'Énoncer les risques liés aux matériels et outillages',
    'Nommer les documents applicables',
    'Lister les mesures de prévention à observer',
    'Identifier le chargé d\'exploitation électrique et échanger les informations nécessaires',
    'Respecter les consignes données',
    'Rendre compte de son activité',
    'Identifier, vérifier et utiliser le matériel et l\'outillage appropriés',
    'Rédiger les documents applicables',
    'Organiser, délimiter et signaler la zone d\'opération',
    'Respecter et faire respecter les procédures',
    'Identifier les ouvrages ou installations et zones d\'environnement',
    'Analyser les risques pour une situation donnée'
  ],
  prerequisites: [
    'Avoir suivi le Tronc Commun N°2',
    'Connaître les bases de la sécurité électrique'
  ],
  slides: [
    {
      id: 'mes-ht-slide-1',
      title: 'Introduction',
      content: `Ce module couvre les rôles et responsabilités des opérateurs réalisant des mesurages et vérifications en haute tension (HT).`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-2',
      title: 'Rôle du chargé d\'exploitation électrique',
      content: `Le chargé d'exploitation électrique est responsable de l'exploitation et de la maintenance des ouvrages et installations électriques. Il coordonne les opérations, établit les procédures de travail sûres et surveille la sécurité.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-3',
      title: 'Risques liés aux matériels et outillages',
      content: `Les risques incluent : contacts avec des pièces nues sous tension, amorçages et arcs électriques, courts-circuits.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-4',
      title: 'Mesures de prévention',
      content: `Utiliser des EPI appropriés (gants isolants, écrans faciaux, vêtements de protection, chaussures de sécurité), baliser et signaler la zone de travail, vérifier l'absence de tension (VAT).`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-5',
      title: 'Documents applicables',
      content: `Les documents à connaître : autorisations d'accès, instructions de sécurité, plans et schémas des installations électriques.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-6',
      title: 'Préparation des mesurages et vérifications',
      content: `Préparer les opérations en identifiant les matériels concernés, en vérifiant l'état des matériels et des EPI, et en s'assurant que les prescriptions de sécurité sont respectées.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-7',
      title: 'Exécution des mesurages et vérifications',
      content: `Réaliser les opérations en respectant les procédures de sécurité, en utilisant les EPI appropriés, et en assurant la sécurité des travailleurs et des installations.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-8',
      title: 'Organisation de la zone d\'opération',
      content: `Organiser, délimiter et signaler la zone d'opération spécifique avec panneaux, rubans, cônes, etc.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-9',
      title: 'Identification des ouvrages et zones d\'environnement',
      content: `Identifier les ouvrages ou installations objet des mesurages et/ou vérifications (domaines de tension, zones d'environnement, locaux réservés, etc.).`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-10',
      title: 'Analyse des risques',
      content: `Analyser les risques pour une situation donnée et mettre en place les mesures de prévention adaptées.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'mes-ht-slide-11',
      title: 'Étude de cas',
      content: `Cas pratique : Mesurages et vérifications en haute tension sur une installation industrielle. Objectifs : identifier les risques, préparer et réaliser les opérations en sécurité.`,
      type: 'text',
      duration: 180
    },
    {
      id: 'mes-ht-slide-12',
      title: 'Quiz et exercices',
      content: `Quiz et exercices pratiques pour valider les acquis : identification des risques, préparation des opérations, rédaction des documents applicables.`,
      type: 'quiz',
      duration: 120
    }
  ]
};
