import { Module } from '../../types';

export const troncCommun1: Module = {
  id: 'tronc-commun-1',
  title: 'Tronc Commun N°1 - Dangers de l\'électricité',
  description: 'Formation complète sur les dangers de l\'électricité, les effets du courant électrique sur le corps humain et les mesures de prévention essentielles.',
  category: 'tronc-commun',
  duration: 180,
  level: 'Débutant',
  certification: 'Habilitation Électrique NF C18-510',
  objectives: [
    'Identifier tous les dangers de l\'électricité',
    'Comprendre les effets du courant sur le corps humain',
    'Connaître les seuils de dangerosité et facteurs aggravants',
    'Maîtriser les mesures de prévention et l\'utilisation des EPI',
    'Reconnaître les différents domaines de tension',
    'Appliquer les principes de sécurité électrique'
  ],
  prerequisites: [
    'Aucun prérequis technique',
    'Savoir lire et écrire en français',
    'Motivation pour la sécurité'
  ],
  slides: [
    {
      id: 'tc1-slide-1',
      title: 'Introduction aux dangers électriques',
      content: `L'ÉLECTRICITÉ : UN DANGER INVISIBLE

L'électricité est une énergie invisible et silencieuse qui présente des risques majeurs pour la sécurité.

📊 STATISTIQUES ALARMANTES :
• 200 morts par an en France dus à l'électricité
• 4000 électrisations graves annuelles
• Première cause d'accidents mortels au travail dans le BTP
• 15% des incendies d'origine électrique

⚠️ CARACTÉRISTIQUES DU DANGER :
• Les dangers ne se voient pas
• Ne s'entendent pas
• Ne se sentent pas
• Effets instantanés et irréversibles

🎯 OBJECTIF DE CE MODULE :
Vous donner les connaissances essentielles pour travailler en sécurité avec ou près de l'électricité.`,
      type: 'text',
      notes: 'Insister sur le caractère invisible du danger électrique. Utiliser des statistiques récentes pour marquer les esprits. Créer une prise de conscience immédiate.',
      duration: 300
    },
    {
      id: 'tc1-slide-2',
      title: 'Les effets du courant électrique sur le corps',
      content: `COMMENT LE COURANT TRAVERSE LE CORPS

Le courant électrique traverse le corps humain et provoque différents effets selon son intensité :

⚡ SEUILS DE DANGEROSITÉ (courant alternatif 50Hz) :

• 0,5 mA : Seuil de perception (picotement)
• 5 mA : Secousse électrique douloureuse
• 10 mA : Seuil de non-lâcher (tétanisation musculaire)
• 30 mA : Seuil de paralysie respiratoire
• 40-50 mA : Fibrillation ventriculaire (MORTEL)
• 80 mA : Seuil de fibrillation irréversible
• 3000 mA : Arrêt cardiaque, brûlures graves

🚨 POINT CRITIQUE : 
À partir de 10 mA, impossible de lâcher le conducteur !
À partir de 50 mA, risque de mort par fibrillation cardiaque !`,
      type: 'text',
      notes: 'Expliquer chaque seuil avec des exemples concrets. Insister particulièrement sur le seuil de non-lâcher à 10 mA qui est souvent méconnu.',
      duration: 420
    },
    {
      id: 'tc1-slide-3',
      title: 'Facteurs aggravants et résistance du corps',
      content: `RÉSISTANCE VARIABLE DU CORPS HUMAIN

La résistance du corps humain varie énormément selon les conditions :

🔬 VALEURS DE RÉSISTANCE :
• Peau sèche et épaisse : 5000 à 100000 Ω
• Peau humide (transpiration) : 1000 Ω
• Peau mouillée : 500 Ω
• Peau blessée ou coupée : 200 Ω

⚠️ FACTEURS AGGRAVANTS :
• Humidité (transpiration, pluie, condensation)
• Blessures, coupures, égratignures
• Bijoux métalliques (bagues, montres, chaînes)
• Chaussures conductrices (semelles mouillées)
• Sol mouillé ou métallique
• Fatigue, stress, consommation d'alcool
• Âge (enfants et personnes âgées plus vulnérables)

💡 RÈGLE D'OR :
Plus la résistance diminue, plus le danger augmente !`,
      type: 'text',
      notes: 'Faire le lien avec les situations de travail réelles. Expliquer concrètement pourquoi il faut retirer les bijoux et porter des chaussures de sécurité.',
      duration: 360
    },
    {
      id: 'tc1-slide-4',
      title: 'Classification des tensions et domaines électriques',
      content: `DOMAINES DE TENSION SELON LA NORME

Classification officielle des installations selon la tension :

🔋 TRÈS BASSE TENSION (TBT) :
• Courant alternatif : ≤ 50V
• Courant continu : ≤ 120V
• Exemples : jouets, éclairage de sécurité, sonnettes

⚡ BASSE TENSION (BT) :
• 50V < U ≤ 1000V en alternatif
• 120V < U ≤ 1500V en continu
• Exemples : installations domestiques (230V), industrielles (400V)

🏭 HAUTE TENSION A (HTA) :
• 1kV < U ≤ 50kV
• Exemples : postes de transformation, distribution

🏗️ HAUTE TENSION B (HTB) :
• U > 50kV
• Exemples : lignes de transport, centrales électriques

⚠️ ATTENTION IMPORTANTE :
Même en TBT, des risques existent dans certaines conditions !`,
      type: 'text',
      notes: 'Préciser que la TBT n\'est pas sans danger dans certaines conditions (milieux humides, blessures). Donner des exemples concrets pour chaque domaine.',
      duration: 300
    },
    {
      id: 'tc1-slide-5',
      title: 'Types de contacts électriques dangereux',
      content: `LES DEUX TYPES DE CONTACTS ÉLECTRIQUES

🔴 CONTACT DIRECT :
Contact avec une partie active normalement sous tension

Exemples typiques :
• Toucher un conducteur nu sous tension
• Insertion d'objet métallique dans une prise
• Contact avec bornes d'un disjoncteur ouvert
• Manipulation d'un câble dénudé

🟠 CONTACT INDIRECT :
Contact avec une masse mise accidentellement sous tension

Exemples typiques :
• Défaut d'isolement dans un appareil
• Carcasse métallique d'un équipement défaillant
• Canalisation métallique sous tension par défaut
• Châssis de machine mal raccordé à la terre

⚠️ DANGER ÉGAL :
Les deux types de contacts sont également dangereux !
Le contact indirect est souvent plus sournois car imprévisible.`,
      type: 'text',
      notes: 'Donner des exemples concrets et visuels de chaque type de contact. Insister sur le fait que les contacts indirects sont souvent imprévisibles et donc plus dangereux.',
      duration: 360
    },
    {
      id: 'tc1-slide-6',
      title: 'Brûlures électriques - Types et gravité',
      content: `L'ÉLECTRICITÉ PROVOQUE DEUX TYPES DE BRÛLURES

🔥 BRÛLURES PAR ARC ÉLECTRIQUE :
• Température extrême : 3000 à 20000°C
• Brûlures externes très graves (2e et 3e degré)
• Projection de métal en fusion
• Lésions oculaires irréversibles
• Inhalation de vapeurs toxiques

🌡️ BRÛLURES INTERNES (effet Joule) :
• Échauffement des tissus par passage du courant
• Destruction progressive des organes internes
• Souvent invisibles de l'extérieur
• Peuvent apparaître plusieurs heures après l'accident
• Nécroses tissulaires profondes

🚨 GRAVITÉ PARTICULIÈRE :
• Les brûlures électriques sont toujours graves
• Évolution souvent imprévisible
• Complications fréquentes (infections, nécroses)
• Séquelles permanentes possibles

⚕️ CONDUITE À TENIR :
Examen médical OBLIGATOIRE même si les lésions semblent bénignes !`,
      type: 'text',
      notes: 'Expliquer que les brûlures internes sont souvent sous-estimées car invisibles. Insister absolument sur la nécessité d\'un examen médical systématique.',
      duration: 300
    },
    {
      id: 'tc1-slide-7',
      title: 'Hiérarchie des mesures de prévention',
      content: `PRINCIPES FONDAMENTAUX DE PRÉVENTION

La prévention suit une hiérarchie stricte (du plus efficace au moins efficace) :

1️⃣ SUPPRESSION DU RISQUE (priorité absolue)
• Consignation complète des installations
• Utilisation de la TBT de sécurité (TBTS)
• Remplacement par des solutions non électriques

2️⃣ PROTECTION COLLECTIVE
• Éloignement physique des parties actives
• Interposition d'obstacles (cloisons, grillages)
• Isolation renforcée des parties actives
• Signalisation et balisage des zones dangereuses

3️⃣ PROTECTION INDIVIDUELLE
• EPI adaptés (gants, casques, écrans faciaux)
• Vêtements de protection spécialisés
• Outillage isolé et vérifié
• Chaussures de sécurité isolantes

4️⃣ FORMATION ET INFORMATION
• Habilitation obligatoire du personnel
• Formation continue et recyclage
• Consignes de sécurité claires et actualisées
• Sensibilisation permanente aux risques

⚠️ IMPORTANT : La protection individuelle vient en DERNIER recours !`,
      type: 'text',
      notes: 'Insister fortement sur la hiérarchie des mesures de prévention. Expliquer que la protection individuelle ne doit jamais être la seule mesure.',
      duration: 420
    },
    {
      id: 'tc1-slide-8',
      title: 'Équipements de Protection Individuelle (EPI)',
      content: `EPI SPÉCIFIQUES À L'ÉLECTRICITÉ

🧤 GANTS ISOLANTS (obligatoires) :
• Classe 00 : 500V (travaux TBT renforcée)
• Classe 0 : 1000V (travaux BT)
• Classe 1 : 7500V (travaux HTA)
• Classe 2 : 17000V (travaux HTA renforcés)
• Classe 3 : 26500V (travaux HTB)
• Classe 4 : 36000V (travaux HTB renforcés)

⛑️ CASQUES ISOLANTS :
• Protection contre chocs et arcs électriques
• Classe E : résistance jusqu'à 20000V
• Vérification régulière obligatoire

👓 ÉCRANS FACIAUX :
• Protection contre arcs électriques
• Obligatoires pour certaines opérations
• Résistance aux projections de métal en fusion

👟 CHAUSSURES DE SÉCURITÉ :
• Semelles isolantes obligatoires
• Protection des orteils (embout de sécurité)
• Résistance à la perforation

🔍 VÉRIFICATIONS OBLIGATOIRES :
• Contrôle visuel avant chaque utilisation
• Tests périodiques en laboratoire
• Remplacement selon échéances réglementaires`,
      type: 'text',
      notes: 'Montrer les différents EPI réels si possible. Expliquer concrètement leur utilisation et insister sur les vérifications obligatoires avant usage.',
      duration: 360
    },
    {
      id: 'tc1-slide-9',
      title: 'Environnement de travail et facteurs de risque',
      content: `INFLUENCE DE L'ENVIRONNEMENT SUR LES RISQUES

🌧️ CONDITIONS MÉTÉOROLOGIQUES :
• Humidité : augmente la conductivité
• Pluie : risque d'infiltration dans les équipements
• Brouillard : réduction de la visibilité et humidité
• Vent : risque de contact avec lignes aériennes
• Orage : interdiction absolue de travaux extérieurs

🏭 ENVIRONNEMENT DE TRAVAIL :
• Locaux humides ou mouillés (salles de bains, cuisines)
• Présence de vapeurs conductrices
• Espaces confinés (risque d'accumulation de gaz)
• Proximité de masses métalliques importantes
• Sols conducteurs (métalliques, humides)

👥 FACTEURS HUMAINS :
• État de fatigue du personnel
• Stress et pression temporelle
• Formation insuffisante
• Non-respect des procédures
• Prise de risques inconsidérée

🔧 ÉTAT DES ÉQUIPEMENTS :
• Vétusté des installations
• Maintenance insuffisante
• Modifications non conformes
• Surcharges répétées

💡 PRINCIPE : Adapter les mesures de sécurité à l'environnement !`,
      type: 'text',
      notes: 'Faire le lien avec les situations concrètes de travail. Donner des exemples d\'adaptation des mesures selon l\'environnement.',
      duration: 360
    },
    {
      id: 'tc1-slide-10',
      title: 'Signalisation et balisage de sécurité',
      content: `SIGNALISATION ÉLECTRIQUE OBLIGATOIRE

⚠️ PANNEAUX D'INTERDICTION :
• "Défense d'entrer - Danger de mort"
• "Accès interdit aux personnes non autorisées"
• "Ne pas manœuvrer - Travaux en cours"
• Pictogrammes normalisés (éclair dans triangle)

🔴 PANNEAUX D'AVERTISSEMENT :
• "Danger électrique" (éclair jaune sur fond noir)
• "Haute tension - Danger de mort"
• "Installation sous tension"
• Indication du niveau de tension

🟢 PANNEAUX D'OBLIGATION :
• "Port d'EPI obligatoire"
• "Consignation obligatoire"
• "Vérification d'absence de tension obligatoire"

🔵 PANNEAUX D'INFORMATION :
• Schémas de l'installation
• Procédures d'urgence
• Numéros de téléphone d'urgence
• Instructions de premiers secours

🚧 BALISAGE PHYSIQUE :
• Rubans de signalisation
• Cônes et barrières
• Grillages de protection
• Éclairage de sécurité

📍 RÈGLE : La signalisation doit être visible, compréhensible et respectée !`,
      type: 'text',
      notes: 'Montrer des exemples réels de panneaux et de balisage. Insister sur l\'importance du respect de la signalisation.',
      duration: 300
    },
    {
      id: 'tc1-slide-11',
      title: 'Premiers gestes en cas d\'accident électrique',
      content: `CONDUITE À TENIR EN URGENCE

🚨 RÈGLE DES 3 P : PROTÉGER - ALERTER - SECOURIR

1️⃣ PROTÉGER (maximum 1 minute) :
• Couper immédiatement l'alimentation électrique
• Si impossible : dégager la victime avec un objet isolant
• JAMAIS toucher directement la victime
• Écarter les curieux et sécuriser la zone

2️⃣ ALERTER LES SECOURS :
• 15 : SAMU (urgences médicales)
• 18 : Sapeurs-pompiers
• 112 : Numéro d'urgence européen
• Donner des informations précises sur l'accident

3️⃣ SECOURIR :
• Vérifier la conscience (parler, secouer doucement)
• Vérifier la respiration (regarder, écouter, sentir)
• Position latérale de sécurité si conscient
• Réanimation cardio-pulmonaire si nécessaire

⚠️ RÈGLES ABSOLUES :
• JAMAIS de geste héroïque !
• Votre sécurité d'abord !
• Toute victime d'électrisation doit voir un médecin
• Même si elle semble aller bien !`,
      type: 'text',
      notes: 'Insister sur la priorité absolue : se protéger d\'abord. Détailler les numéros d\'urgence et les informations précises à donner.',
      duration: 420
    },
    {
      id: 'tc1-slide-12',
      title: 'Réglementation et responsabilités',
      content: `CADRE LÉGAL ET RESPONSABILITÉS

📜 TEXTES RÉGLEMENTAIRES :
• Code du travail (articles R4544-1 à R4544-11)
• Norme NF C 18-510 (référence technique)
• Décret du 14 novembre 1988
• Arrêtés d'application spécifiques

👨‍💼 RESPONSABILITÉS DE L'EMPLOYEUR :
• Formation obligatoire du personnel
• Délivrance des habilitations
• Fourniture des EPI et vérifications
• Organisation du travail en sécurité
• Surveillance des opérations

👷 RESPONSABILITÉS DU SALARIÉ :
• Respecter les consignes de sécurité
• Utiliser correctement les EPI
• Signaler les anomalies et dangers
• Refuser un travail dangereux
• Participer aux formations

⚖️ SANCTIONS POSSIBLES :
• Pénales : amendes, emprisonnement
• Civiles : dommages et intérêts
• Disciplinaires : avertissement, licenciement
• Professionnelles : retrait d'habilitation

🎯 OBJECTIF : Responsabilité partagée pour la sécurité de tous !`,
      type: 'text',
      notes: 'Expliquer clairement les responsabilités de chacun. Insister sur le fait que la sécurité est l\'affaire de tous.',
      duration: 360
    },
    {
      id: 'tc1-slide-13',
      title: 'Cas pratiques et situations dangereuses',
      content: `ANALYSE DE SITUATIONS RÉELLES

🔍 CAS N°1 : INTERVENTION SUR PRISE DÉFECTUEUSE
Situation : Remplacement d'une prise qui "fait des étincelles"
Dangers identifiés :
• Contact direct possible
• Arc électrique au démontage
• Absence de coupure d'alimentation

Solutions :
• Couper au disjoncteur
• VAT obligatoire
• Gants isolants classe 0

🔍 CAS N°2 : NETTOYAGE PRÈS D'ARMOIRE ÉLECTRIQUE
Situation : Nettoyage avec produits humides près d'une armoire
Dangers identifiés :
• Projection d'eau sur parties actives
• Contact indirect par humidité
• Glissement sur sol mouillé

Solutions :
• Consignation de l'armoire
• Protection par bâches étanches
• Chaussures antidérapantes

🔍 CAS N°3 : TRAVAUX DE PEINTURE EN HAUTEUR
Situation : Peinture près de lignes électriques aériennes
Dangers identifiés :
• Contact avec échelle métallique
• Amorçage par rapprochement
• Chute avec contact

Solutions :
• Respect des distances de sécurité
• Échelle isolante ou consignation
• Harnais de sécurité`,
      type: 'text',
      notes: 'Analyser chaque cas en détail avec les stagiaires. Faire identifier les dangers et proposer des solutions.',
      duration: 420
    },
    {
      id: 'tc1-slide-14',
      title: 'Évaluation des connaissances et synthèse',
      content: `POINTS CLÉS À RETENIR ABSOLUMENT

✅ DANGERS DE L'ÉLECTRICITÉ :
• Invisible, silencieux, mortel
• Effets dépendent de l'intensité du courant
• Facteurs aggravants nombreux (humidité, fatigue...)

✅ DOMAINES DE TENSION :
• TBT ≤ 50V AC / 120V DC
• BT : 50V à 1000V AC / 120V à 1500V DC  
• HT : > 1000V AC / > 1500V DC

✅ PRÉVENTION HIÉRARCHISÉE :
1. Suppression du risque (consignation)
2. Protection collective (éloignement, obstacles)
3. Protection individuelle (EPI)
4. Formation et information

✅ CONDUITE D'URGENCE :
• Protéger - Alerter - Secourir
• Jamais toucher directement une victime
• Examen médical obligatoire

🎯 PROCHAINE ÉTAPE :
Formation Tronc Commun N°2
• Procédures de consignation détaillées
• Techniques de premiers secours approfondies
• Utilisation des équipements de sécurité

Vous avez maintenant les bases essentielles pour comprendre et prévenir les risques électriques !`,
      type: 'text',
      notes: 'Récapituler tous les points essentiels. Vérifier la compréhension par des questions. Préparer la transition vers le module suivant.',
      duration: 300
    }
  ]
};