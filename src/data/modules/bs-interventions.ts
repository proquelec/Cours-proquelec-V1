import { Module } from '../../types';

export const bsInterventions: Module = {
  id: 'bs-interventions',
  title: 'BS - Interventions élémentaires',
  description: 'Formation pour effectuer des interventions élémentaires en basse tension.',
  category: 'executant',
  duration: 180,
  level: 'Intermédiaire',
  certification: 'Habilitation BS',
  objectives: [
    'Effectuer des interventions élémentaires',
    'Réaliser des raccordements simples',
    'Utiliser un VAT',
    'Appliquer les mesures de sécurité'
  ],
  prerequisites: [
    'Avoir suivi les Troncs Communs',
    'Notions de base en électricité',
    'Expérience pratique souhaitée'
  ],
  slides: [
    {
      id: 'bs-slide-1',
      title: 'Présentation de l\'habilitation BS',
      content: `HABILITATION BS :
Intervention élémentaire en Basse Tension

DOMAINE D'APPLICATION :
• Interventions simples et courantes
• Remplacement à l'identique
• Raccordements sur circuits protégés

EXEMPLES D'INTERVENTIONS :
• Remplacement de fusibles BT
• Remplacement de lampes, tubes
• Remplacement de prises, interrupteurs
• Raccordement sur bornier
• Réarmement de protections

LIMITES :
• Puissance ≤ 32A en monophasé
• Puissance ≤ 25A en triphasé`,
      type: 'text',
      notes: 'Bien définir le périmètre d\'intervention BS. Donner des exemples concrets d\'interventions autorisées.',
      duration: 360
    },
    {
      id: 'bs-slide-2',
      title: 'Procédure d\'intervention BS',
      content: `ÉTAPES OBLIGATOIRES :

1. PRÉPARATION
• Analyser le travail à effectuer
• Identifier les risques
• Préparer l'outillage et les EPI

2. CONSIGNATION POUR SÉPARATION
• Identifier le circuit concerné
• Ouvrir le dispositif de protection
• Condamner si nécessaire

3. VÉRIFICATION D'ABSENCE DE TENSION
• VAT sur tous les conducteurs actifs
• Vérifier le VAT avant et après

4. INTERVENTION
• Effectuer le travail prévu
• Respecter les règles de l'art

5. REMISE EN SERVICE
• Vérifier le travail effectué
• Refermer les protections`,
      type: 'text',
      notes: 'Détailler chaque étape. Insister sur l\'ordre obligatoire et l\'importance de la VAT.',
      duration: 420
    },
    {
      id: 'bs-slide-3',
      title: 'Utilisation du VAT',
      content: `VÉRIFICATEUR D'ABSENCE DE TENSION :

AVANT UTILISATION :
• Vérifier l'état du VAT
• Tester sur installation sous tension
• Vérifier l'autonomie (piles)

UTILISATION :
• Respecter la classe du VAT
• Mesurer entre tous les conducteurs
• Mesurer entre conducteurs et terre
• Respecter les distances de sécurité

APRÈS UTILISATION :
• Tester à nouveau le fonctionnement
• Ranger dans son étui

⚠️ VAT défaillant = ARRÊT IMMÉDIAT !`,
      type: 'text',
      notes: 'Démonstration pratique du VAT. Insister sur les tests avant et après utilisation.',
      duration: 360
    },
    {
      id: 'bs-slide-4',
      title: 'Remplacement de fusibles',
      content: `PROCÉDURE DE REMPLACEMENT :

1. IDENTIFIER LE FUSIBLE DÉFAILLANT
• Contrôle visuel
• Test de continuité si nécessaire

2. CONSIGNER LE CIRCUIT
• Ouvrir le sectionneur amont
• Condamner si accessible à d'autres

3. VAT SUR LES CONTACTS DU FUSIBLE
• Vérifier l'absence de tension

4. REMPLACER LE FUSIBLE
• Utiliser un fusible identique
• Vérifier les caractéristiques

5. REMETTRE EN SERVICE
• Refermer le sectionneur
• Vérifier le bon fonctionnement

ATTENTION : Fusible = même calibre et même type !`,
      type: 'text',
      notes: 'Montrer différents types de fusibles. Expliquer l\'importance du calibre et du type.',
      duration: 360
    },
    {
      id: 'bs-slide-5',
      title: 'Remplacement d\'appareillage',
      content: `REMPLACEMENT À L'IDENTIQUE :

MATÉRIELS CONCERNÉS :
• Prises de courant
• Interrupteurs, va-et-vient
• Luminaires, réglettes
• Détecteurs, sonnettes

PROCÉDURE :
1. Couper l'alimentation au disjoncteur
2. VAT sur les conducteurs
3. Déconnecter l'ancien matériel
4. Connecter le nouveau matériel
5. Vérifier les connexions
6. Remettre sous tension
7. Tester le fonctionnement

RÈGLE : Remplacement strictement à l'identique !`,
      type: 'text',
      notes: 'Insister sur la notion "à l\'identique". Montrer des exemples de matériels et leurs caractéristiques.',
      duration: 420
    },
    {
      id: 'bs-slide-6',
      title: 'Raccordements sur borniers',
      content: `RACCORDEMENTS AUTORISÉS :

TYPES DE BORNIERS :
• Borniers à vis
• Borniers à ressort
• Borniers à cage

RÈGLES DE RACCORDEMENT :
• Respecter les sections de conducteurs
• Serrer au couple recommandé
• Utiliser des embouts si nécessaire
• Respecter les couleurs conventionnelles

VÉRIFICATIONS :
• Continuité des connexions
• Isolement entre conducteurs
• Serrage des connexions

LIMITES BS :
• Circuits protégés uniquement
• Pas de modification de schéma`,
      type: 'text',
      notes: 'Démonstration pratique de raccordement. Insister sur la qualité des connexions.',
      duration: 360
    },
    {
      id: 'bs-slide-7',
      title: 'Outillage et EPI spécifiques',
      content: `OUTILLAGE ISOLÉ :
• Tournevis isolés 1000V
• Pinces isolées 1000V
• Clés isolées si nécessaire

EPI OBLIGATOIRES :
• Gants isolants classe 0 (1000V)
• Casque isolant
• Écran facial pour certaines opérations
• Chaussures de sécurité isolantes

MATÉRIEL DE MESURE :
• VAT adapté à la tension
• Multimètre si nécessaire

VÉRIFICATIONS :
• État des isolants
• Marquage de conformité
• Dates de vérification

Matériel défaillant = Interdiction d'utilisation !`,
      type: 'text',
      notes: 'Présenter l\'outillage réel. Expliquer les vérifications périodiques obligatoires.',
      duration: 300
    },
    {
      id: 'bs-slide-8',
      title: 'Incidents et anomalies',
      content: `CONDUITE À TENIR :

INCIDENT ÉLECTRIQUE :
• Arrêter immédiatement l'intervention
• Sécuriser la zone
• Prévenir la hiérarchie
• Ne pas remettre en service

ANOMALIES CONSTATÉES :
• Échauffements anormaux
• Odeurs suspectes
• Bruits anormaux
• Détériorations visibles

LIMITES DE COMPÉTENCE :
• Défauts complexes → BR ou B2
• Modifications → Étude préalable
• Doute sur la sécurité → Arrêt

TRAÇABILITÉ :
• Noter les interventions effectuées
• Signaler les anomalies
• Tenir un carnet d'intervention`,
      type: 'text',
      notes: 'Insister sur l\'importance de signaler les anomalies. Expliquer les limites de compétence BS.',
      duration: 360
    },
    {
      id: 'bs-slide-9',
      title: 'Validation des compétences',
      content: `RÉCAPITULATIF HABILITATION BS :

VOUS POUVEZ :
• Interventions élémentaires BT
• Remplacement à l'identique
• Raccordements simples
• Utilisation du VAT

VOUS DEVEZ :
• Respecter la procédure
• Utiliser les EPI
• Effectuer la VAT
• Signaler les anomalies

LIMITES :
• 32A mono / 25A tri maximum
• Pas de modification de schéma
• Pas de création de circuit

RESPONSABILITÉS :
• Sécurité des personnes
• Qualité des interventions
• Respect des procédures

Votre habilitation BS est validée !`,
      type: 'text',
      notes: 'Récapituler tous les points importants. Évaluer la compréhension pratique et théorique.',
      duration: 300
    }
  ]
};