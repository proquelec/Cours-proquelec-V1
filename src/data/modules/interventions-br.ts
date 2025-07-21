import { Module } from '../../types';

export const interventionsBR: Module = {
  id: 'interventions-br',
  title: 'Interventions BT générales (BR)',
  description: 'Procédures, sécurité et limites pour les interventions générales en basse tension.',
  category: 'specialise',
  duration: 1,
  level: 'Intermédiaire',
  certification: 'BR',
  objectives: [
    'Connaître les limites de l’habilitation BR',
    'Appliquer les instructions de sécurité spécifiques',
    'Réaliser des interventions en toute sécurité',
    'Identifier les risques et utiliser les EPI adaptés',
    'Rendre compte de son activité'
  ],
  prerequisites: [
    'Module Tronc Commun N°1'
  ],
  slides: [
    {
      id: 'interventions-br-1',
      type: 'text',
      title: 'Limites de l’habilitation',
      content: 'Ce que permet et interdit l’habilitation BR.'
    },
    {
      id: 'interventions-br-2',
      type: 'text',
      title: 'Instructions de sécurité',
      content: 'Procédures à respecter, EPI obligatoires, balisage et signalisation.'
    },
    {
      id: 'interventions-br-3',
      type: 'text',
      title: 'Réalisation des interventions',
      content: 'Préparation, exécution, vérification et traçabilité des interventions.'
    },
    {
      id: 'interventions-br-4',
      type: 'text',
      title: 'Gestion des risques',
      content: 'Identification des dangers, analyse des risques, mesures de prévention.'
    },
    {
      id: 'interventions-br-5',
      type: 'text',
      title: 'Compte rendu d’activité',
      content: 'Rédaction et transmission des informations après intervention.'
    }
  ]
};
