import { Module } from '../../types';

export const b0H0H0V: Module = {
  id: 'b0-h0-h0v',
  title: 'B0-H0-H0V - Exécutants non électriciens',
  description: 'Formation pour les exécutants non électriciens travaillant dans un environnement électrique.',
  category: 'executant',
  duration: 90,
  level: 'Débutant',
  certification: 'Habilitation B0-H0-H0V',
  objectives: [
    'Évoluer en sécurité dans un environnement électrique',
    'Reconnaître les risques électriques',
    'Appliquer les consignes de sécurité',
    'Utiliser les EPI appropriés'
  ],
  prerequisites: [
    'Avoir suivi les Troncs Communs N°1 et N°2',
    'Savoir lire et comprendre les consignes'
  ],
  slides: [
    {
      id: 'b0-slide-1',
      title: 'Présentation de l\'habilitation B0',
      content: `HABILITATION B0-H0-H0V :

B0 : Exécutant non électricien en Basse Tension
H0 : Exécutant non électricien en Haute Tension
H0V : Exécutant non électricien au voisinage HT

DOMAINE D'APPLICATION :
• Travaux non électriques
• Dans un environnement électrique
• Sous surveillance d'un électricien

EXEMPLES D'ACTIVITÉS :
• Peinture, nettoyage
• Maçonnerie, plomberie
• Montage mécanique
• Travaux de terrassement`,
      type: 'text',
      notes: 'Bien expliquer que B0 ne permet aucune intervention électrique. Donner des exemples concrets d\'activités.',
      duration: 300
    },
    {
      id: 'b0-slide-2',
      title: 'Limites de l\'habilitation B0',
      content: `CE QUE VOUS POUVEZ FAIRE :
• Accéder aux locaux électriques accompagné
• Effectuer des travaux non électriques
• Utiliser des outils non électriques
• Respecter les consignes données

CE QUE VOUS NE POUVEZ PAS FAIRE :
• Aucune intervention électrique
• Aucun raccordement
• Aucune manipulation d'appareillage
• Accès seul aux locaux électriques
• Donner des consignes électriques

En cas de doute : DEMANDER !`,
      type: 'text',
      notes: 'Insister fortement sur les interdictions. Répéter que B0 = aucune intervention électrique.',
      duration: 360
    },
    {
      id: 'b0-slide-3',
      title: 'Reconnaissance des risques',
      content: `IDENTIFIER LES DANGERS :

PARTIES ACTIVES NUES :
• Conducteurs sans isolant
• Bornes de connexion
• Barres omnibus

MATÉRIELS ÉLECTRIQUES :
• Armoires électriques ouvertes
• Prises et fiches défectueuses
• Câbles dénudés

ENVIRONNEMENT :
• Zones humides
• Présence de métal
• Espaces confinés

SIGNALISATION :
• Panneaux d'interdiction
• Balisage de sécurité
• Étiquetage des installations`,
      type: 'text',
      notes: 'Montrer des photos d\'installations. Apprendre à reconnaître visuellement les dangers.',
      duration: 420
    },
    {
      id: 'b0-slide-4',
      title: 'Distances de sécurité',
      content: `DISTANCES MINIMALES À RESPECTER :

BASSE TENSION (BT) :
• Distance limite : 30 cm
• Distance de voisinage : 30 cm

HAUTE TENSION (HT) :
• 1 kV à 50 kV : 3 mètres
• 63 kV à 90 kV : 4 mètres
• 150 kV à 225 kV : 5 mètres
• 400 kV : 7 mètres

⚠️ CES DISTANCES SONT VITALES !

En cas de doute sur la tension : considérer comme HT et respecter 3 mètres minimum.`,
      type: 'text',
      notes: 'Faire mémoriser les distances. Utiliser des exemples visuels pour aider à estimer les distances.',
      duration: 300
    },
    {
      id: 'b0-slide-5',
      title: 'Équipements de protection',
      content: `EPI OBLIGATOIRES POUR B0 :

CASQUE ISOLANT :
• Protection contre les chocs
• Classe E (20 kV)

CHAUSSURES DE SÉCURITÉ :
• Semelles isolantes
• Protection des orteils

VÊTEMENTS DE TRAVAIL :
• Manches longues
• Pas de parties métalliques apparentes

SELON LES TRAVAUX :
• Gants de protection mécanique
• Lunettes de protection
• Harnais de sécurité

Vérifier l'état des EPI avant chaque utilisation !`,
      type: 'text',
      notes: 'Montrer les EPI et expliquer leur rôle. Insister sur la vérification avant usage.',
      duration: 360
    },
    {
      id: 'b0-slide-6',
      title: 'Consignes de sécurité',
      content: `RÈGLES FONDAMENTALES :

AVANT LE TRAVAIL :
• Prendre connaissance des consignes
• Vérifier les EPI
• Identifier les risques électriques

PENDANT LE TRAVAIL :
• Respecter les distances de sécurité
• Ne pas toucher aux installations électriques
• Signaler toute anomalie
• Arrêter en cas de doute

APRÈS LE TRAVAIL :
• Ranger les outils
• Nettoyer la zone de travail
• Signaler les incidents

En cas de problème : ARRÊTER et PRÉVENIR !`,
      type: 'text',
      notes: 'Insister sur l\'importance de signaler les anomalies. Expliquer la procédure d\'arrêt des travaux.',
      duration: 300
    },
    {
      id: 'b0-slide-7',
      title: 'Surveillance et encadrement',
      content: `RÔLE DU SURVEILLANT :

QUI PEUT SURVEILLER :
• Chargé de travaux (B2, H2)
• Chargé d'intervention (BR)
• Personne désignée par l'employeur

MISSIONS DU SURVEILLANT :
• Donner les consignes de sécurité
• Vérifier le respect des distances
• Arrêter les travaux si nécessaire
• Assurer la liaison avec l'exploitation

VOTRE RÔLE :
• Respecter les consignes données
• Signaler les difficultés
• Ne pas agir seul en cas de problème

La surveillance est obligatoire pour les B0 !`,
      type: 'text',
      notes: 'Expliquer l\'importance de la surveillance. Clarifier les rôles et responsabilités de chacun.',
      duration: 360
    },
    {
      id: 'b0-slide-8',
      title: 'Situations d\'urgence',
      content: `CONDUITE À TENIR :

ACCIDENT DE PERSONNE :
• Donner l'alerte immédiatement
• Ne pas toucher la victime
• Attendre les secours qualifiés

INCIDENT ÉLECTRIQUE :
• Arrêter les travaux
• Éloigner le personnel
• Prévenir le responsable électrique

INCENDIE :
• Donner l'alerte
• Évacuer si nécessaire
• Ne pas utiliser d'eau sur installation électrique

NUMÉROS D'URGENCE :
• Secours internes : ___
• SAMU : 15
• Pompiers : 18`,
      type: 'text',
      notes: 'Adapter les numéros internes à l\'entreprise. Insister sur les réflexes de sécurité.',
      duration: 300
    },
    {
      id: 'b0-slide-9',
      title: 'Évaluation et validation',
      content: `RÉCAPITULATIF B0-H0-H0V :

VOUS POUVEZ :
• Travailler sous surveillance électrique
• Respecter les distances de sécurité
• Utiliser les EPI appropriés
• Signaler les anomalies

VOUS NE POUVEZ PAS :
• Effectuer d'interventions électriques
• Accéder seul aux locaux électriques
• Manipuler l'appareillage électrique

POINTS CLÉS :
• Sécurité avant tout
• En cas de doute : ARRÊTER
• Respecter les consignes
• Signaler les problèmes

Votre habilitation est maintenant validée !`,
      type: 'text',
      notes: 'Récapituler les points essentiels. S\'assurer de la bonne compréhension avant validation.',
      duration: 240
    }
  ]
};