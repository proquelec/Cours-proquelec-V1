import { Module } from '../../types';

export const manoeuvresHTA: Module = {
  id: 'manoeuvres-hta',
  title: 'Manœuvres en HTA (HE manœuvre HTA)',
  description: 'Procédures, sécurité et limites pour la réalisation de manœuvres en haute tension A.',
  category: 'specialise',
  duration: 1,
  level: 'Intermédiaire',
  certification: 'HE manœuvre HTA',
  objectives: [
    'Connaître les limites de l’habilitation HE manœuvre HTA',
    'Appliquer les instructions de sécurité spécifiques',
    'Réaliser des manœuvres en toute sécurité',
    'Identifier les risques et utiliser les EPI adaptés',
    'Rendre compte de son activité'
  ],
  prerequisites: [
    'Module Tronc Commun N°2'
  ],
  slides: [
    {
      id: 'manoeuvres-hta-1',
      type: 'text',
      title: 'Limites de l’habilitation',
      content: 'Ce que permet et interdit l’habilitation HE manœuvre HTA.'
    },
    {
      id: 'manoeuvres-hta-2',
      type: 'text',
      title: 'Instructions de sécurité',
      content: 'Procédures à respecter, EPI obligatoires, balisage et signalisation.'
    },
    {
      id: 'manoeuvres-hta-3',
      type: 'text',
      title: 'Réalisation des manœuvres',
      content: 'Préparation, exécution, vérification et traçabilité des manœuvres.'
    },
    {
      id: 'manoeuvres-hta-4',
      type: 'text',
      title: 'Gestion des risques',
      content: 'Identification des dangers, analyse des risques, mesures de prévention.'
    },
    {
      id: 'manoeuvres-hta-5',
      type: 'text',
      title: 'Compte rendu d’activité',
      content: 'Rédaction et transmission des informations après manœuvre.'
    }
  ]
};
