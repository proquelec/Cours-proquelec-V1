import { Module } from '../../types';

export const consignationBT: Module = {
  id: 'consignation-bt',
  title: 'Consignation en basse tension (BC)',
  description: 'Procédures, sécurité et documents pour la consignation en basse tension.',
  category: 'specialise',
  duration: 1,
  level: 'Intermédiaire',
  certification: 'BC',
  objectives: [
    'Connaître les documents applicables et les consignes',
    'Réaliser une consignation en sécurité',
    'Utiliser les EPI et outillages adaptés',
    'Analyser les risques et appliquer les mesures de prévention',
    'Rendre compte de son activité'
  ],
  prerequisites: [
    'Module Tronc Commun N°1'
  ],
  slides: [
    {
      id: 'consignation-bt-1',
      type: 'text',
      title: 'Documents applicables',
      content: 'Fiche de manœuvre, attestation de consignation, instructions de sécurité.'
    },
    {
      id: 'consignation-bt-2',
      type: 'text',
      title: 'Réalisation de la consignation',
      content: 'Préparation, exécution, vérification et traçabilité de la consignation.'
    },
    {
      id: 'consignation-bt-3',
      type: 'text',
      title: 'Utilisation des EPI et outillages',
      content: 'Choix, vérification et utilisation des équipements adaptés.'
    },
    {
      id: 'consignation-bt-4',
      type: 'text',
      title: 'Gestion des risques',
      content: 'Identification des dangers, analyse des risques, mesures de prévention.'
    },
    {
      id: 'consignation-bt-5',
      type: 'text',
      title: 'Compte rendu d’activité',
      content: 'Rédaction et transmission des informations après consignation.'
    }
  ]
};
