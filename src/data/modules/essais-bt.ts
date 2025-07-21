import { Module } from '../../types';

export const essaisBT: Module = {
  id: 'essais-bt',
  title: 'Essai en basse tension (Plate-forme d\'essais et laboratoire) (BE Essai)',
  description: 'Procédures, sécurité et documents pour la réalisation d\'essais en basse tension.',
  category: 'specialise',
  duration: 1,
  level: 'Intermédiaire',
  certification: 'BE Essai',
  objectives: [
    'Connaître les documents applicables et les consignes',
    'Réaliser un essai en sécurité',
    'Utiliser les EPI et outillages adaptés',
    'Analyser les risques et appliquer les mesures de prévention',
    'Rendre compte de son activité'
  ],
  prerequisites: [
    'Module Tronc Commun N°1'
  ],
  slides: [
    {
      id: 'essais-bt-1',
      type: 'text',
      title: 'Documents applicables',
      content: 'Fiche d\'essai, attestation, instructions de sécurité.'
    },
    {
      id: 'essais-bt-2',
      type: 'text',
      title: 'Réalisation de l\'essai',
      content: 'Préparation, exécution, vérification et traçabilité de l\'essai.'
    },
    {
      id: 'essais-bt-3',
      type: 'text',
      title: 'Utilisation des EPI et outillages',
      content: 'Choix, vérification et utilisation des équipements adaptés.'
    },
    {
      id: 'essais-bt-4',
      type: 'text',
      title: 'Gestion des risques',
      content: 'Identification des dangers, analyse des risques, mesures de prévention.'
    },
    {
      id: 'essais-bt-5',
      type: 'text',
      title: 'Compte rendu d’activité',
      content: 'Rédaction et transmission des informations après essai.'
    }
  ]
};
