import { Module } from '../../types';

export const chargeChantier: Module = {
  id: 'charge-chantier',
  title: 'Chargé de chantier (B0, H0, H0V)',
  description: 'Responsabilités, procédures et sécurité pour les chargés de chantier en environnement électrique.',
  category: 'charge-chantier',
  duration: 2,
  level: 'Intermédiaire',
  certification: 'B0, H0, H0V',
  objectives: [
    'Comprendre le rôle et les responsabilités du chargé de chantier',
    'Connaître les procédures de sécurité et les documents applicables',
    'Savoir organiser, planifier et superviser les travaux d’ordre non électrique',
    'Identifier les risques, appliquer et faire appliquer les mesures de prévention',
    'Assurer la communication, la traçabilité et le retour d’expérience',
    'Analyser les risques pour une situation donnée',
    'Rendre compte de son activité et rédiger les documents nécessaires'
  ],
  prerequisites: [
    'Module Tronc Commun N°1',
    'Exécutants de travaux d’ordre non électrique (B0, H0, H0V)'
  ],
  slides: [
    {
      id: 'charge-chantier-1',
      type: 'text',
      title: 'Rôle et responsabilités du chargé de chantier',
      content: 'Le chargé de chantier organise, supervise et contrôle les travaux d’ordre non électrique. Il veille à la sécurité, à la conformité des opérations et à la bonne application des procédures.'
    },
    {
      id: 'charge-chantier-2',
      type: 'text',
      title: 'Organisation et planification des travaux',
      content: 'Planification des tâches, répartition des rôles, contrôle des documents, suivi des interventions et gestion des accès.'
    },
    {
      id: 'charge-chantier-3',
      type: 'text',
      title: 'Procédures de sécurité et documents applicables',
      content: 'Respect des consignes, port des EPI, balisage, signalisation, vérification d’absence de tension, gestion des accès, rédaction et contrôle des documents (autorisations, fiches de suivi, rapports, etc.).'
    },
    {
      id: 'charge-chantier-4',
      type: 'text',
      title: 'Gestion des risques et mesures de prévention',
      content: 'Identification des dangers, analyse des risques, mise en place et contrôle des mesures de prévention, sensibilisation de l’équipe.'
    },
    {
      id: 'charge-chantier-5',
      type: 'text',
      title: 'Communication, traçabilité et retour d’expérience',
      content: 'Transmission des consignes, rédaction de rapports, gestion des retours d’expérience, communication avec l’équipe et la hiérarchie.'
    },
    {
      id: 'charge-chantier-6',
      type: 'text',
      title: 'Analyse des risques pour une situation donnée',
      content: 'Méthodologie d’analyse des risques, exemples pratiques, adaptation des mesures de prévention.'
    },
    {
      id: 'charge-chantier-7',
      type: 'text',
      title: 'Compte-rendu d’activité et documents à rédiger',
      content: 'Rédaction des comptes-rendus, fiches de suivi, rapports d’incident, importance de la traçabilité.'
    },
    {
      id: 'charge-chantier-8',
      type: 'quiz',
      title: 'Quiz et exercices pratiques',
      content: 'Quiz et exercices pour valider les acquis sur l’organisation, la sécurité, la gestion des risques et la communication.'
    }
  ]
};
