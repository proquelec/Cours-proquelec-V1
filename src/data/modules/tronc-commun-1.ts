import { Module } from '../../types';

export const troncCommun1: Module = {
  id: 'tronc-commun-1',
  title: 'Tronc Commun N°1 - Dangers de l\'électricité',
  description: 'Formation sur les dangers de l\'électricité, les effets du courant électrique sur le corps humain et les mesures de prévention.',
  category: 'tronc-commun',
  duration: 120,
  level: 'Débutant',
  certification: 'Habilitation Électrique NF C18-510',
  objectives: [
    'Identifier les dangers de l\'électricité',
    'Comprendre les effets du courant sur le corps humain',
    'Connaître les seuils de dangerosité',
    'Appliquer les mesures de prévention'
  ],
  prerequisites: [
    'Aucun prérequis technique',
    'Savoir lire et écrire en français'
  ],
  slides: [
    {
      id: 'tc1-slide-1',
      title: 'Introduction aux dangers électriques',
      content: `L'électricité est une énergie invisible et silencieuse qui présente des risques majeurs pour la sécurité.

• Accidents électriques : 200 morts par an en France
• 4000 électrisations graves annuelles
• Première cause d'accidents mortels au travail dans le BTP

Les dangers ne se voient pas, ne s'entendent pas et ne se sentent pas.`,
      type: 'text',
      notes: 'Insister sur le caractère invisible du danger électrique. Utiliser des statistiques récentes pour marquer les esprits.',
      duration: 300
    },
    {
      id: 'tc1-slide-2',
      title: 'Les effets du courant électrique',
      content: `Le courant électrique traverse le corps humain et provoque différents effets selon son intensité :

SEUILS DE DANGEROSITÉ (courant alternatif 50Hz) :

• 0,5 mA : Seuil de perception
• 5 mA : Secousse électrique
• 10 mA : Seuil de non-lâcher (tétanisation)
• 30 mA : Seuil de paralysie respiratoire
• 40-50 mA : Fibrillation ventriculaire (MORTEL)
• 80 mA : Seuil de fibrillation irréversible`,
      type: 'text',
      notes: 'Expliquer chaque seuil avec des exemples concrets. Insister sur le seuil de non-lâcher à 10 mA.',
      duration: 420
    },
    {
      id: 'tc1-slide-3',
      title: 'Facteurs aggravants',
      content: `Plusieurs facteurs augmentent la gravité d'un accident électrique :

RÉSISTANCE DU CORPS HUMAIN :
• Peau sèche : 5000 à 100000 Ω
• Peau humide : 1000 Ω
• Peau mouillée : 500 Ω

FACTEURS AGGRAVANTS :
• Humidité (transpiration, pluie)
• Blessures, coupures
• Bijoux métalliques
• Chaussures conductrices
• Sol mouillé ou métallique
• Fatigue, stress, alcool`,
      type: 'text',
      notes: 'Faire le lien avec les situations de travail réelles. Expliquer pourquoi il faut retirer les bijoux.',
      duration: 360
    },
    {
      id: 'tc1-slide-4',
      title: 'Tensions et domaines électriques',
      content: `Classification des installations selon la tension :

TRÈS BASSE TENSION (TBT) :
• Courant alternatif : ≤ 50V
• Courant continu : ≤ 120V

BASSE TENSION (BT) :
• 50V < U ≤ 1000V en alternatif
• 120V < U ≤ 1500V en continu

HAUTE TENSION (HT) :
• HTA : 1kV < U ≤ 50kV
• HTB : U > 50kV

⚠️ ATTENTION : Même en TBT, des risques existent !`,
      type: 'text',
      notes: 'Préciser que la TBT n\'est pas sans danger dans certaines conditions (milieux humides, blessures).',
      duration: 300
    },
    {
      id: 'tc1-slide-5',
      title: 'Types de contacts électriques',
      content: `CONTACT DIRECT :
Contact avec une partie active normalement sous tension
• Toucher un conducteur nu
• Insertion d'objet dans une prise
• Contact avec bornes d'un disjoncteur

CONTACT INDIRECT :
Contact avec une masse mise accidentellement sous tension
• Défaut d'isolement
• Carcasse métallique d'un appareil défaillant
• Canalisation métallique

Les deux types de contacts sont dangereux !`,
      type: 'text',
      notes: 'Donner des exemples concrets de chaque type de contact. Insister sur le fait que les contacts indirects sont souvent imprévisibles.',
      duration: 360
    },
    {
      id: 'tc1-slide-6',
      title: 'Brûlures électriques',
      content: `L'électricité provoque deux types de brûlures :

BRÛLURES PAR ARC ÉLECTRIQUE :
• Température : 3000 à 20000°C
• Brûlures externes graves
• Projection de métal en fusion
• Lésions oculaires

BRÛLURES INTERNES (effet Joule) :
• Échauffement des tissus par le courant
• Destruction des organes internes
• Souvent invisibles de l'extérieur
• Peuvent apparaître plusieurs heures après

Les brûlures électriques sont toujours graves !`,
      type: 'text',
      notes: 'Expliquer que les brûlures internes sont souvent sous-estimées car invisibles. Insister sur la nécessité d\'un examen médical.',
      duration: 300
    },
    {
      id: 'tc1-slide-7',
      title: 'Mesures de prévention',
      content: `PRINCIPES DE PRÉVENTION :

1. SUPPRESSION DU RISQUE
• Consignation des installations
• Utilisation de la TBT de sécurité

2. PROTECTION COLLECTIVE
• Éloignement des parties actives
• Interposition d'obstacles
• Isolation des parties actives

3. PROTECTION INDIVIDUELLE
• EPI adaptés (gants, casques, écrans)
• Vêtements de protection
• Outillage isolé

4. FORMATION ET INFORMATION
• Habilitation du personnel
• Consignes de sécurité`,
      type: 'text',
      notes: 'Insister sur la hiérarchie des mesures de prévention. La protection individuelle vient en dernier recours.',
      duration: 420
    },
    {
      id: 'tc1-slide-8',
      title: 'Équipements de protection',
      content: `ÉQUIPEMENTS DE PROTECTION INDIVIDUELLE :

GANTS ISOLANTS :
• Classe 00 : 500V - Classe 0 : 1000V
• Classe 1 : 7500V - Classe 2 : 17000V
• Vérification avant chaque utilisation

CASQUES ISOLANTS :
• Protection contre les chocs et arcs
• Classe E : 20000V

ÉCRANS FACIAUX :
• Protection contre les arcs électriques
• Obligatoires pour certaines opérations

CHAUSSURES DE SÉCURITÉ :
• Semelles isolantes
• Protection des orteils`,
      type: 'text',
      notes: 'Montrer les différents EPI et expliquer leur utilisation. Insister sur la vérification avant usage.',
      duration: 360
    },
    {
      id: 'tc1-slide-9',
      title: 'Conclusion et évaluation',
      content: `POINTS CLÉS À RETENIR :

• L'électricité est un danger invisible
• Les effets dépendent de l'intensité du courant
• Tous les domaines de tension présentent des risques
• La prévention est la seule protection efficace
• Les EPI sont indispensables
• La formation est obligatoire

PROCHAINE ÉTAPE :
Formation Tronc Commun N°2
• Consignation électrique
• Premiers secours`,
      type: 'text',
      notes: 'Récapituler les points essentiels. Préparer la transition vers le module suivant.',
      duration: 240
    }
  ]
};