import { Module } from '../../types';

export const consignationHT: Module = {
  id: 'consignation-ht',
  title: 'Consignation Haute Tension (HC)',
  description: 'Module complet sur la consignation en haute tension, les documents, les rôles, les procédures et la sécurité.',
  category: 'charge-chantier',
  duration: 180,
  level: 'Intermédiaire',
  certification: 'Habilitation HC',
  objectives: [
    'Nommer les informations et documents à échanger ou transmettre',
    'Décrire les opérations de consignation et les documents associés',
    'Décrire un régime de réquisition',
    'Rédiger les documents de consignation',
    'Identifier les acteurs concernés',
    'Réaliser la consignation en une ou deux étapes',
    'Analyser les risques pour une situation donnée'
  ],
  prerequisites: [
    'Avoir suivi le Tronc Commun N°2',
    'Connaître les bases de la sécurité électrique'
  ],
  slides: [
    {
      id: 'hc-slide-1',
      title: 'Introduction',
      content: `Ce module fournit une compréhension complète des rôles et responsabilités des chargés de consignation en haute tension (HT). Il s'adresse aux techniciens ou ingénieurs ayant suivi les modules préalables.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'hc-slide-2',
      title: 'Informations et documents à échanger',
      content: `Les documents à échanger incluent : fiches de manœuvre, attestations de consignation, avis de réquisition, autorisations de travail, instructions de sécurité.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'hc-slide-3',
      title: 'Opérations de consignation',
      content: `Les opérations de consignation comprennent : séparation, condamnation, identification, vérification d'absence de tension (VAT), mise à la terre et en court-circuit (MALT/CC).`,
      type: 'text',
      duration: 120
    },
    {
      id: 'hc-slide-4',
      title: 'Régime de réquisition',
      content: `Un régime de réquisition peut être nécessaire. Il implique des procédures de sécurité, l'utilisation d'EPI, le balisage et la signalisation de la zone de travail.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'hc-slide-5',
      title: 'Rédaction des documents',
      content: `Les documents à rédiger incluent : fiches de manœuvre, attestations de consignation (une ou deux étapes). Ils doivent détailler les tâches réalisées et les mesures de prévention.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'hc-slide-6',
      title: 'Identification des acteurs',
      content: `Le chargé d'exploitation électrique et le chargé de travaux doivent être clairement identifiés et échanger les informations nécessaires à la sécurité.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'hc-slide-7',
      title: 'Consignation en une ou deux étapes',
      content: `La consignation peut se faire en une ou deux étapes selon le domaine de tension (HTA ou HTB). Respecter les procédures de sécurité et utiliser les EPI appropriés.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'hc-slide-8',
      title: 'Analyse des risques',
      content: `Pour chaque situation, analyser les risques liés à l'utilisation et à la manipulation des matériels et outillages. Mettre en place les mesures de prévention adaptées.`,
      type: 'text',
      duration: 120
    },
    {
      id: 'hc-slide-9',
      title: 'Étude de cas',
      content: `Cas pratique : Consignation en haute tension sur une installation industrielle. Objectifs : échanger les documents, réaliser les opérations de consignation, analyser les risques.`,
      type: 'text',
      duration: 180
    },
    {
      id: 'hc-slide-10',
      title: 'Quiz et exercices',
      content: `Quiz et exercices pratiques pour valider les acquis : rédaction de documents, identification des risques, réalisation des opérations de consignation.`,
      type: 'quiz',
      duration: 120
    }
  ]
};
