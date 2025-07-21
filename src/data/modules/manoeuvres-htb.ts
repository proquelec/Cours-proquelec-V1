import { Module } from '../../types';

export const manoeuvresHTB: Module = {
  id: 'manoeuvres-htb',
  title: 'Manœuvres en HTB (HE manœuvre HTB)',
  description: 'Module complet sur les manœuvres en haute tension B, les EPI, les limites d’habilitation, les instructions de sécurité et la réalisation des manœuvres.',
  category: 'specialise',
  duration: 120,
  level: 'Intermédiaire',
  certification: 'Habilitation HE Manœuvres',
  objectives: [
    'Citer les moyens de protection individuelle et leurs limites',
    'Citer les limites de l’habilitation HE Manœuvres',
    'Énoncer les instructions de sécurité spécifiques aux manœuvres',
    'Nommer les informations et documents à échanger',
    'Identifier, vérifier et utiliser les EPI appropriés',
    'Réaliser des manœuvres dans le domaine de tension HTB',
    'Identifier le chargé d’exploitation électrique ou de consignation',
    'Respecter les instructions données',
    'Rendre compte de son activité',
    'Respecter et faire respecter les règles et instructions de sécurité',
    'Analyser les risques pour une situation donnée'
  ],
  prerequisites: [
    'Avoir suivi le module Tronc Commun spécifique HTB',
    'Connaître les bases de la sécurité électrique'
  ],
  slides: [
    {
      id: 'htb-slide-1',
      title: 'Introduction',
      content: `Ce module couvre les rôles et responsabilités des opérateurs réalisant des manœuvres en haute tension (HTB).`,
      type: 'text',
      duration: 120
    },
    {
      id: 'htb-slide-2',
      title: 'Moyens de protection individuelle',
      content: `Les EPI incluent : gants isolants, écrans faciaux, vêtements de protection, chaussures de sécurité. Chaque EPI a ses limites d’utilisation.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'htb-slide-3',
      title: 'Limites de l’habilitation HE Manœuvres',
      content: `L’habilitation HE Manœuvres autorise les manœuvres sur matériels HTB, mais interdit d’autres interventions électriques. La zone de travail est définie par le chargé d’exploitation ou de consignation.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'htb-slide-4',
      title: 'Instructions de sécurité spécifiques',
      content: `Respecter les procédures de sécurité, utiliser les EPI appropriés, baliser et signaler la zone de travail.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'htb-slide-5',
      title: 'Informations et documents à échanger',
      content: `Échanger les autorisations de travail, instructions de sécurité, plans et schémas des installations électriques.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'htb-slide-6',
      title: 'Préparation et exécution des manœuvres',
      content: `Préparer les manœuvres en identifiant les matériels concernés, en vérifiant l’état des matériels et des EPI, et en s’assurant que les prescriptions de sécurité sont respectées.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'htb-slide-7',
      title: 'Identification du chargé d’exploitation ou de consignation',
      content: `Identifier le chargé d’exploitation électrique ou de consignation et échanger les informations nécessaires pour la sécurité des manœuvres.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'htb-slide-8',
      title: 'Respect des instructions et des règles',
      content: `Respecter les instructions données, rendre compte de son activité, et faire respecter les règles de sécurité.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'htb-slide-9',
      title: 'Analyse des risques',
      content: `Analyser les risques pour chaque situation et mettre en place les mesures de prévention adaptées.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'htb-slide-10',
      title: 'Étude de cas',
      content: `Cas pratique : Manœuvres en haute tension sur une installation industrielle. Objectifs : préparer, exécuter, rendre compte, analyser les risques.`,
      type: 'text',
      duration: 180
    },
    {
      id: 'htb-slide-11',
      title: 'Quiz et exercices',
      content: `Quiz et exercices pratiques pour valider les acquis : identification des EPI, préparation et exécution des manœuvres, analyse des risques.`,
      type: 'quiz',
      duration: 120
    }
  ]
};
