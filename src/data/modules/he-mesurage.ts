import { Module } from '../../types';

export const heMesurage: Module = {
  id: 'he-mesurage',
  title: 'Mesurages et vérifications en haute tension (HE Mesurage, HE Vérification)',
  description: 'Module sur les rôles, risques, documents, mesures de prévention et procédures pour les mesurages et vérifications en HT.',
  category: 'specialise',
  duration: 120,
  level: 'Intermédiaire',
  certification: 'Habilitation HE Mesurage/HE Vérification',
  objectives: [
    'Préciser le rôle du chargé d’exploitation électrique',
    'Énoncer les risques liés aux matériels et outillages',
    'Nommer les documents applicables',
    'Lister les mesures de prévention à observer',
    'Identifier le chargé d’exploitation électrique et échanger les informations nécessaires',
    'Respecter les consignes données',
    'Rendre compte de son activité',
    'Identifier, vérifier et utiliser le matériel et l’outillage appropriés',
    'Rédiger les documents applicables',
    'Organiser, délimiter et signaler la zone d’opération',
    'Respecter et faire respecter les procédures',
    'Identifier les ouvrages ou installations et zones d’environnement',
    'Analyser les risques pour une situation donnée'
  ],
  prerequisites: [
    'Avoir suivi le Tronc Commun N°2',
    'Connaître les bases de la sécurité électrique'
  ],
  slides: [
    {
      id: 'he-mes-slide-1',
      title: 'Introduction',
      content: `Ce module couvre les rôles et responsabilités des opérateurs réalisant des mesurages et vérifications en haute tension (HT).`,
      type: 'text',
      duration: 120
    },
    {
      id: 'he-mes-slide-2',
      title: 'Rôle du chargé d’exploitation électrique',
      content: `Le chargé d’exploitation électrique est responsable de l’exploitation et de la maintenance des ouvrages et installations électriques.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'he-mes-slide-3',
      title: 'Risques liés aux matériels et outillages',
      content: `Risques : contacts avec des pièces nues sous tension, amorçages et arcs électriques, courts-circuits.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'he-mes-slide-4',
      title: 'Mesures de prévention',
      content: `Utiliser des EPI appropriés, baliser et signaler la zone de travail, vérifier l’absence de tension (VAT).`,
      type: 'text',
      duration: 120
    },
    {
      id: 'he-mes-slide-5',
      title: 'Documents applicables',
      content: `Documents : autorisations d’accès, instructions de sécurité, plans et schémas des installations électriques.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'he-mes-slide-6',
      title: 'Préparation et exécution des mesurages',
      content: `Préparer les opérations en identifiant les matériels concernés, en vérifiant l’état des matériels et des EPI, et en s’assurant que les prescriptions de sécurité sont respectées.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'he-mes-slide-7',
      title: 'Organisation de la zone d’opération',
      content: `Organiser, délimiter et signaler la zone d’opération spécifique avec panneaux, rubans, cônes, etc.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'he-mes-slide-8',
      title: 'Identification des ouvrages et zones d’environnement',
      content: `Identifier les ouvrages ou installations objet des mesurages et/ou vérifications (domaines de tension, zones d’environnement, locaux réservés, etc.).`,
      type: 'text',
      duration: 120
    },
    {
      id: 'he-mes-slide-9',
      title: 'Analyse des risques',
      content: `Analyser les risques pour une situation donnée et mettre en place les mesures de prévention adaptées.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'he-mes-slide-10',
      title: 'Étude de cas',
      content: `Cas pratique : Mesurages et vérifications en haute tension sur une installation industrielle.`,
      type: 'text',
      duration: 180
    },
    {
      id: 'he-mes-slide-11',
      title: 'Quiz et exercices',
      content: `Quiz et exercices pratiques pour valider les acquis : identification des risques, préparation des opérations, rédaction des documents applicables.`,
      type: 'quiz',
      duration: 120
    }
  ]
};
