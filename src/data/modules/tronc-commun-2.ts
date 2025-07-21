import { Module } from '../../types';

export const troncCommun2: Module = {
  id: 'tronc-commun-2',
  title: 'Tronc Commun N°2 - Consignation et premiers secours',
  description: 'Formation sur les procédures de consignation électrique et les gestes de premiers secours en cas d\'accident électrique.',
  category: 'tronc-commun',
  duration: 150,
  level: 'Débutant',
  certification: 'Habilitation Électrique NF C18-510',
  objectives: [
    'Maîtriser la procédure de consignation',
    'Effectuer une VAT',
    'Connaître les gestes de premiers secours',
    'Savoir alerter les secours'
  ],
  prerequisites: [
    'Avoir suivi le Tronc Commun N°1',
    'Connaître les dangers électriques'
  ],
  slides: [
    {
      id: 'tc2-slide-1',
      title: 'La consignation électrique',
      content: `La consignation est l'ensemble des opérations destinées à mettre et maintenir en sécurité une installation électrique.

OBJECTIF :
Permettre le travail en sécurité sur une installation électrique

PRINCIPE :
Séparer complètement l'installation de toute source d'énergie

QUI PEUT CONSIGNER ?
• Chargé de consignation (BC)
• Chargé d'exploitation électrique (BE)

La consignation est OBLIGATOIRE pour tous travaux hors tension.`,
      type: 'text',
      notes: 'Insister sur le caractère obligatoire de la consignation. Expliquer les rôles et responsabilités.',
      duration: 300
    },
    {
      id: 'tc2-slide-2',
      title: 'Les 4 étapes de la consignation',
      content: `ÉTAPE 1 : SÉPARATION
• Ouvrir tous les organes de séparation
• Disjoncteurs, sectionneurs, fusibles

ÉTAPE 2 : CONDAMNATION
• Verrouillage mécanique des organes de séparation
• Pose de cadenas, pancartes d'interdiction

ÉTAPE 3 : IDENTIFICATION
• Vérification de l'installation concernée
• Lecture des schémas et étiquetages

ÉTAPE 4 : VÉRIFICATION (VAT)
• Vérification d'Absence de Tension
• Sur chaque conducteur actif`,
      type: 'text',
      notes: 'Détailler chaque étape. Insister sur l\'ordre obligatoire et l\'importance de chaque étape.',
      duration: 420
    },
    {
      id: 'tc2-slide-3',
      title: 'La Vérification d\'Absence de Tension (VAT)',
      content: `PROCÉDURE VAT :

1. VÉRIFIER LE FONCTIONNEMENT DU VAT
• Test sur installation sous tension connue
• Vérification des piles/batteries

2. EFFECTUER LA MESURE
• Sur chaque conducteur actif
• Entre phases et entre phase et terre
• Respecter les distances de sécurité

3. VÉRIFIER À NOUVEAU LE VAT
• Test après utilisation
• S'assurer du bon fonctionnement

⚠️ Si le VAT ne fonctionne pas : ARRÊT IMMÉDIAT`,
      type: 'text',
      notes: 'Démontrer l\'utilisation d\'un VAT. Insister sur la vérification avant et après usage.',
      duration: 360
    },
    {
      id: 'tc2-slide-4',
      title: 'Matériel de consignation',
      content: `ORGANES DE SÉPARATION :
• Disjoncteurs
• Sectionneurs
• Interrupteurs-sectionneurs
• Fusibles

MATÉRIEL DE CONDAMNATION :
• Cadenas de consignation
• Pancartes d'interdiction
• Dispositifs de verrouillage

MATÉRIEL DE VÉRIFICATION :
• VAT (Vérificateur d'Absence de Tension)
• Multimètre (en complément)
• Perche isolante

Chaque matériel doit être vérifié avant usage !`,
      type: 'text',
      notes: 'Présenter le matériel réel. Expliquer les critères de choix et de vérification.',
      duration: 300
    },
    {
      id: 'tc2-slide-5',
      title: 'Déconsignation',
      content: `PROCÉDURE DE DÉCONSIGNATION :

1. S'ASSURER QUE LES TRAVAUX SONT TERMINÉS
• Vérification visuelle de l'installation
• Retrait de tous les outils et matériels

2. RETIRER LES DISPOSITIFS DE PROTECTION
• Mise à la terre et en court-circuit
• Protections mécaniques

3. RETIRER LES CONDAMNATIONS
• Cadenas et pancartes
• Dispositifs de verrouillage

4. REFERMER LES ORGANES DE SÉPARATION
• Dans l'ordre inverse de l'ouverture

La déconsignation ne peut être faite que par le consignateur !`,
      type: 'text',
      notes: 'Insister sur le fait que seul celui qui a consigné peut déconsigner. Expliquer l\'ordre des opérations.',
      duration: 360
    },
    {
      id: 'tc2-slide-6',
      title: 'Conduite à tenir en cas d\'accident',
      content: `EN CAS D'ACCIDENT ÉLECTRIQUE :

1. PROTÉGER (1 minute maximum)
• Couper l'alimentation électrique
• Si impossible : dégager avec un objet isolant
• Ne jamais toucher la victime directement

2. ALERTER
• Appeler les secours : 15 (SAMU) ou 18 (Pompiers)
• Donner des informations précises

3. SECOURIR
• Vérifier la conscience et la respiration
• Mettre en position latérale de sécurité
• Pratiquer la réanimation si nécessaire

JAMAIS de geste héroïque ! Votre sécurité d'abord !`,
      type: 'text',
      notes: 'Insister sur la priorité : se protéger d\'abord. Détailler les numéros d\'urgence et les informations à donner.',
      duration: 420
    },
    {
      id: 'tc2-slide-7',
      title: 'Premiers secours spécifiques',
      content: `SPÉCIFICITÉS DE L'ACCIDENT ÉLECTRIQUE :

ÉLECTRISATION :
• Vérifier les points d'entrée et de sortie du courant
• Surveiller les brûlures internes
• Examen médical obligatoire

ÉLECTROCUTION :
• Arrêt cardiaque et/ou respiratoire
• Réanimation cardio-pulmonaire immédiate
• Défibrillation si disponible

BRÛLURES :
• Refroidir à l'eau froide (15-20 minutes)
• Ne pas percer les cloques
• Protéger avec un linge propre

Toute victime d'accident électrique doit être examinée par un médecin !`,
      type: 'text',
      notes: 'Expliquer les spécificités par rapport aux autres accidents. Insister sur l\'examen médical systématique.',
      duration: 360
    },
    {
      id: 'tc2-slide-8',
      title: 'Numéros d\'urgence et informations',
      content: `NUMÉROS D'URGENCE :

• 15 : SAMU (urgences médicales)
• 18 : Sapeurs-pompiers
• 112 : Numéro d'urgence européen
• 114 : Urgences pour sourds et malentendants

INFORMATIONS À DONNER :
• Nature de l'accident (électrique)
• Lieu précis de l'accident
• Nombre de victimes
• État apparent des victimes
• Circonstances de l'accident
• Tension en cause si connue

Rester en ligne jusqu'à ce que les secours raccrochent !`,
      type: 'text',
      notes: 'Faire répéter les numéros. Simuler un appel d\'urgence pour s\'entraîner.',
      duration: 300
    },
    {
      id: 'tc2-slide-9',
      title: 'Synthèse et évaluation',
      content: `POINTS CLÉS À RETENIR :

CONSIGNATION :
• 4 étapes obligatoires dans l'ordre
• VAT indispensable
• Seul le consignateur peut déconsigner

PREMIERS SECOURS :
• Protéger - Alerter - Secourir
• Couper l'alimentation en priorité
• Examen médical systématique

PRÉVENTION :
• Respecter les procédures
• Utiliser les EPI
• Ne jamais improviser

Vous êtes maintenant prêts pour les formations spécialisées !`,
      type: 'text',
      notes: 'Récapituler les points essentiels. Évaluer la compréhension avant de passer aux modules spécialisés.',
      duration: 240
    }
  ]
};