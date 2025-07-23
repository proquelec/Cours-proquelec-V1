import { Module } from '../../types';

export const troncCommun2: Module = {
  id: 'tronc-commun-2',
  title: 'Tronc Commun N°2 - Consignation et premiers secours',
  description: 'Formation approfondie sur les procédures de consignation électrique, l\'utilisation des équipements de sécurité et les gestes de premiers secours spécifiques aux accidents électriques.',
  category: 'tronc-commun',
  duration: 210,
  level: 'Débutant',
  certification: 'Habilitation Électrique NF C18-510',
  objectives: [
    'Maîtriser parfaitement la procédure de consignation en 4 étapes',
    'Effectuer une VAT en toute sécurité',
    'Utiliser correctement tous les équipements de consignation',
    'Connaître et appliquer les gestes de premiers secours électriques',
    'Savoir alerter efficacement les secours',
    'Gérer les situations d\'urgence électrique'
  ],
  prerequisites: [
    'Avoir suivi et validé le Tronc Commun N°1',
    'Connaître les dangers électriques de base',
    'Comprendre les domaines de tension'
  ],
  slides: [
    {
      id: 'tc2-slide-1',
      title: 'La consignation électrique - Principe fondamental',
      content: `QU'EST-CE QUE LA CONSIGNATION ?

La consignation est l'ensemble des opérations destinées à mettre et maintenir en sécurité une installation électrique pour permettre le travail en toute sécurité.

🎯 OBJECTIF PRINCIPAL :
Séparer complètement l'installation de toute source d'énergie électrique

🔒 PRINCIPE DE BASE :
"Zéro énergie = Zéro danger"

👨‍🔧 QUI PEUT CONSIGNER ?
• Chargé de consignation (BC pour BT, HC pour HT)
• Chargé d'exploitation électrique (BE, HE)
• Personnes habilitées et formées spécifiquement

⚖️ OBLIGATION LÉGALE :
La consignation est OBLIGATOIRE pour tous travaux hors tension selon le Code du travail et la norme NF C18-510.

🚫 INTERDICTION ABSOLUE :
Aucun travail électrique ne peut être effectué sans consignation préalable, sauf cas très particuliers (travaux sous tension avec autorisation spéciale).`,
      type: 'text',
      notes: 'Insister sur le caractère obligatoire et vital de la consignation. Expliquer clairement les rôles et responsabilités légales.',
      duration: 300
    },
    {
      id: 'tc2-slide-2',
      title: 'Les 4 étapes obligatoires de la consignation',
      content: `PROCÉDURE EN 4 ÉTAPES INCONTOURNABLES

1️⃣ SÉPARATION
• Ouvrir TOUS les organes de séparation
• Disjoncteurs, sectionneurs, fusibles
• Vérifier l'ouverture effective
• Identifier clairement les organes manœuvrés

2️⃣ CONDAMNATION  
• Verrouillage mécanique des organes de séparation
• Pose de cadenas personnels et inviolables
• Pancartes d'interdiction bien visibles
• Impossibilité de refermer accidentellement

3️⃣ IDENTIFICATION
• Vérification de l'installation concernée
• Lecture attentive des schémas et étiquetages
• Confirmation de la zone de travail
• Élimination de tout doute sur l'installation

4️⃣ VÉRIFICATION (VAT)
• Vérification d'Absence de Tension
• Sur CHAQUE conducteur actif
• Avec un appareil adapté et vérifié
• Mesure entre phases et entre phase/terre

⚠️ ORDRE IMPÉRATIF : Ces 4 étapes doivent être réalisées dans cet ordre précis et sans exception !`,
      type: 'text',
      notes: 'Détailler minutieusement chaque étape. Insister sur l\'ordre obligatoire et l\'importance cruciale de chaque étape. Donner des exemples concrets.',
      duration: 420
    },
    {
      id: 'tc2-slide-3',
      title: 'La Vérification d\'Absence de Tension (VAT) - Procédure détaillée',
      content: `PROCÉDURE VAT COMPLÈTE ET SÉCURISÉE

🔍 AVANT UTILISATION DU VAT :
• Vérifier l'état physique de l'appareil (boîtier, cordons, pointes)
• Contrôler la date de vérification périodique
• Tester sur installation sous tension CONNUE
• Vérifier l'autonomie (piles/batteries)
• S'assurer du bon fonctionnement (signal sonore/visuel)

⚡ UTILISATION CORRECTE :
• Respecter la classe de tension du VAT
• Mesurer entre TOUS les conducteurs actifs
• Mesurer entre chaque phase et la terre
• Mesurer entre chaque phase et le neutre
• Respecter les distances de sécurité
• Porter les EPI appropriés pendant la mesure

🔍 APRÈS UTILISATION :
• Tester à nouveau le fonctionnement du VAT
• Sur la même installation sous tension qu'au début
• S'assurer que l'appareil fonctionne toujours
• Ranger dans son étui de protection

🚨 RÈGLE ABSOLUE :
Si le VAT ne fonctionne pas = ARRÊT IMMÉDIAT de toute intervention !

📝 TRAÇABILITÉ :
Noter l'heure, le lieu et le résultat de chaque VAT effectuée.`,
      type: 'text',
      notes: 'Démontrer concrètement l\'utilisation d\'un VAT si possible. Insister absolument sur les tests avant et après usage. Expliquer les conséquences d\'un VAT défaillant.',
      duration: 360
    },
    {
      id: 'tc2-slide-4',
      title: 'Matériel de consignation - Choix et utilisation',
      content: `ÉQUIPEMENTS INDISPENSABLES À LA CONSIGNATION

🔌 ORGANES DE SÉPARATION :
• Disjoncteurs (coupure automatique + séparation)
• Sectionneurs (séparation visible des contacts)
• Interrupteurs-sectionneurs (manœuvre + séparation)
• Fusibles (protection + séparation si retirés)

🔒 MATÉRIEL DE CONDAMNATION :
• Cadenas de consignation (personnels, numérotés)
• Pancartes d'interdiction normalisées
• Dispositifs de verrouillage spécialisés
• Chaînes et sangles de condamnation
• Étiquettes d'identification

🔍 MATÉRIEL DE VÉRIFICATION :
• VAT (Vérificateur d'Absence de Tension) adapté
• Multimètre en complément (si nécessaire)
• Perche isolante pour HT
• Détecteur de tension sans contact (pré-vérification)

⚖️ EXIGENCES RÉGLEMENTAIRES :
• Matériel conforme aux normes en vigueur
• Vérifications périodiques obligatoires
• Maintenance préventive programmée
• Traçabilité des contrôles

🔧 RÈGLE : Chaque matériel doit être vérifié avant usage !`,
      type: 'text',
      notes: 'Présenter le matériel réel si disponible. Expliquer les critères de choix et les obligations de vérification. Montrer des exemples de pancartes et cadenas.',
      duration: 300
    },
    {
      id: 'tc2-slide-5',
      title: 'Mise à la terre et en court-circuit (MALT/CC)',
      content: `PROTECTION COMPLÉMENTAIRE OBLIGATOIRE

🌍 MISE À LA TERRE ET EN COURT-CIRCUIT :

OBJECTIFS :
• Protéger contre les tensions induites
• Éviter la remise sous tension accidentelle
• Écouler les charges résiduelles
• Protéger contre les surtensions atmosphériques

🔧 MATÉRIEL NÉCESSAIRE :
• Perches isolantes adaptées à la tension
• Câbles de mise à la terre sectionnés appropriés
• Pinces de raccordement isolées
• Dispositifs de mise à la terre temporaire

📋 PROCÉDURE :
1. Raccorder d'abord à la terre
2. Puis raccorder aux conducteurs actifs
3. Vérifier la continuité des connexions
4. Signaler la présence des MALT/CC

⚠️ ATTENTION PARTICULIÈRE :
• Obligatoire en HT
• Recommandée en BT selon les cas
• Retrait dans l'ordre inverse
• Vérification avant retrait

🚨 SÉCURITÉ :
Porter les EPI appropriés lors de la pose et du retrait des MALT/CC.`,
      type: 'text',
      notes: 'Expliquer l\'importance de cette protection souvent méconnue. Détailler la procédure de pose et de retrait. Préciser les cas d\'obligation.',
      duration: 360
    },
    {
      id: 'tc2-slide-6',
      title: 'Procédure de déconsignation sécurisée',
      content: `REMISE EN SERVICE MÉTHODIQUE ET SÉCURISÉE

📋 ÉTAPES DE DÉCONSIGNATION :

1️⃣ VÉRIFICATION PRÉALABLE OBLIGATOIRE :
• S'assurer que TOUS les travaux sont terminés
• Vérification visuelle complète de l'installation
• Retrait de TOUS les outils et matériels
• Nettoyage de la zone de travail
• Comptage du personnel (personne dans la zone)

2️⃣ RETRAIT DES PROTECTIONS :
• Enlever les mises à la terre et court-circuits
• Retirer les protections mécaniques temporaires
• Démonter les écrans et obstacles provisoires
• Vérifier l'intégrité de l'installation

3️⃣ RETRAIT DES CONDAMNATIONS :
• Enlever les cadenas personnels uniquement
• Retirer les pancartes d'interdiction
• Démonter les dispositifs de verrouillage
• Vérifier la liberté de manœuvre

4️⃣ REMISE SOUS TENSION :
• Refermer les organes de séparation
• Dans l'ordre INVERSE de l'ouverture
• Vérifier le bon fonctionnement
• Tester les protections

🔑 RÈGLE ABSOLUE :
Seule la personne qui a consigné peut déconsigner !`,
      type: 'text',
      notes: 'Insister fortement sur le fait que seul celui qui a consigné peut déconsigner. Expliquer l\'ordre précis des opérations et l\'importance de chaque vérification.',
      duration: 360
    },
    {
      id: 'tc2-slide-7',
      title: 'Conduite à tenir en cas d\'accident électrique',
      content: `GESTES D'URGENCE VITAUX

🚨 SÉQUENCE D'URGENCE : PROTÉGER - ALERTER - SECOURIR

1️⃣ PROTÉGER (maximum 1 minute) :
• Couper immédiatement l'alimentation électrique
• Disjoncteur, sectionneur, ou prise si accessible
• Si impossible : dégager avec objet isolant (bois sec, plastique)
• JAMAIS avec les mains nues ou objet métallique
• Écarter les témoins et sécuriser la zone

2️⃣ ALERTER LES SECOURS SPÉCIALISÉS :
• 15 : SAMU (urgences médicales)
• 18 : Sapeurs-pompiers  
• 112 : Numéro d'urgence européen
• 114 : Urgences pour sourds et malentendants

3️⃣ SECOURIR LA VICTIME :
• Vérifier la conscience (parler fort, secouer doucement)
• Vérifier la respiration (regarder, écouter, sentir 10 sec)
• Position latérale de sécurité si consciente
• Réanimation cardio-pulmonaire si inconsciente
• Surveiller en permanence jusqu'aux secours

⚠️ RÈGLES DE SÉCURITÉ ABSOLUES :
• JAMAIS de geste héroïque !
• Votre sécurité prime sur tout !
• Ne pas déplacer la victime sauf danger imminent`,
      type: 'text',
      notes: 'Insister sur la priorité absolue : se protéger d\'abord. Détailler précisément les numéros d\'urgence et les informations à donner. Pratiquer si possible les gestes.',
      duration: 420
    },
    {
      id: 'tc2-slide-8',
      title: 'Spécificités des accidents électriques',
      content: `PARTICULARITÉS DE L'ACCIDENT ÉLECTRIQUE

⚡ ÉLECTRISATION (passage de courant non mortel) :
• Vérifier les points d'entrée et de sortie du courant
• Rechercher les brûlures (souvent aux extrémités)
• Surveiller l'apparition de troubles (plusieurs heures après)
• Examen médical OBLIGATOIRE même si victime consciente

💀 ÉLECTROCUTION (passage de courant mortel) :
• Arrêt cardiaque et/ou respiratoire
• Réanimation cardio-pulmonaire IMMÉDIATE
• Défibrillation si disponible et formation
• Poursuite jusqu'à l'arrivée des secours

🔥 BRÛLURES SPÉCIFIQUES :
• Refroidir à l'eau froide (15-20 minutes)
• NE PAS percer les cloques
• Protéger avec un linge propre et sec
• Surveiller l'évolution (aggravation possible)

🧠 TROUBLES NEUROLOGIQUES :
• Convulsions possibles
• Troubles de la mémoire
• Paralysies temporaires ou définitives
• Troubles du rythme cardiaque

⚕️ SURVEILLANCE MÉDICALE :
Toute victime d'accident électrique doit être examinée par un médecin, même si elle semble aller bien !`,
      type: 'text',
      notes: 'Expliquer les spécificités par rapport aux autres types d\'accidents. Insister absolument sur l\'examen médical systématique, même pour les cas apparemment bénins.',
      duration: 360
    },
    {
      id: 'tc2-slide-9',
      title: 'Informations à donner aux secours',
      content: `COMMUNICATION D'URGENCE EFFICACE

📞 NUMÉROS D'URGENCE À CONNAÎTRE :
• 15 : SAMU (urgences médicales) - Priorité pour électrisation
• 18 : Sapeurs-pompiers - Si risque d'incendie
• 112 : Numéro d'urgence européen (fonctionne partout)
• 114 : Urgences pour sourds et malentendants (SMS/Fax)

📋 INFORMATIONS ESSENTIELLES À DONNER :
• Nature de l'accident : "ACCIDENT ÉLECTRIQUE"
• Lieu PRÉCIS de l'accident (adresse complète)
• Nombre de victimes impliquées
• État apparent des victimes (consciente/inconsciente)
• Circonstances de l'accident (tension, durée contact)
• Tension en cause si connue (BT, HT)
• Votre nom et numéro de téléphone

🗣️ CONSEILS DE COMMUNICATION :
• Parler clairement et calmement
• Répondre aux questions posées
• Ne pas raccrocher en premier
• Rester disponible pour informations complémentaires
• Désigner une personne pour guider les secours

⏰ TEMPS CRITIQUE :
Chaque minute compte ! Plus l'alerte est rapide et précise, meilleures sont les chances de survie.

🚨 RAPPEL : Rester en ligne jusqu'à ce que les secours raccrochent !`,
      type: 'text',
      notes: 'Faire répéter les numéros d\'urgence. Simuler un appel d\'urgence pour s\'entraîner. Insister sur la précision des informations à donner.',
      duration: 300
    },
    {
      id: 'tc2-slide-10',
      title: 'Gestes de premiers secours spécialisés',
      content: `TECHNIQUES DE SECOURS ADAPTÉES

💓 RÉANIMATION CARDIO-PULMONAIRE (RCP) :

VÉRIFICATION PRÉALABLE :
• Victime sur surface dure et plane
• Dégager les voies aériennes
• Basculer légèrement la tête en arrière

TECHNIQUE DE MASSAGE CARDIAQUE :
• Placer les mains au centre de la poitrine
• Bras tendus, épaules à la verticale
• Compressions de 5-6 cm de profondeur
• Rythme : 100 à 120 compressions/minute
• Laisser la poitrine remonter complètement

VENTILATION ARTIFICIELLE :
• 2 insufflations après 30 compressions
• Bouche-à-bouche ou bouche-à-nez
• Voir la poitrine se soulever
• Durée : 1 seconde par insufflation

🔄 ALTERNANCE :
30 compressions + 2 insufflations en continu jusqu'aux secours

🩹 POSITION LATÉRALE DE SÉCURITÉ :
• Si victime consciente et respire normalement
• Évite l'étouffement par vomissements
• Surveiller en permanence

⚠️ IMPORTANT : Ces gestes sauvent des vies ! Formation recommandée.`,
      type: 'text',
      notes: 'Démontrer les gestes si possible avec un mannequin. Insister sur l\'importance de la formation aux premiers secours. Expliquer les spécificités de l\'accident électrique.',
      duration: 420
    },
    {
      id: 'tc2-slide-11',
      title: 'Organisation des secours en entreprise',
      content: `PRÉPARATION ET ORGANISATION PRÉVENTIVE

🏢 ORGANISATION INTERNE :
• Désignation de secouristes formés (1 pour 15 salariés)
• Trousse de premiers secours accessible et complète
• Affichage des numéros d'urgence bien visible
• Plan d'évacuation et points de rassemblement
• Exercices périodiques d'évacuation

📞 NUMÉROS INTERNES À AFFICHER :
• Secours internes de l'entreprise : ___________
• Responsable sécurité : ___________
• Direction : ___________
• Médecin du travail : ___________

🚑 MATÉRIEL DE PREMIERS SECOURS :
• Défibrillateur automatique (DAE) si disponible
• Trousse de secours conforme (compresses, pansements...)
• Couverture de survie
• Matériel d'immobilisation
• Téléphone d'urgence dédié

📋 PROCÉDURES ÉCRITES :
• Consignes d'urgence affichées
• Fiches réflexes par type d'accident
• Coordonnées des secours locaux
• Plan d'accès pour les secours extérieurs

🎯 FORMATION CONTINUE :
• Recyclage des secouristes
• Sensibilisation de tout le personnel
• Exercices pratiques réguliers
• Retour d'expérience sur les accidents`,
      type: 'text',
      notes: 'Adapter les numéros internes à l\'entreprise ou laisser des espaces à compléter. Insister sur l\'importance de la préparation et de l\'organisation.',
      duration: 300
    },
    {
      id: 'tc2-slide-12',
      title: 'Cas pratiques de consignation',
      content: `EXERCICES D'APPLICATION PRATIQUE

🔧 CAS PRATIQUE N°1 : REMPLACEMENT D'UN DISJONCTEUR
Situation : Disjoncteur défaillant dans armoire électrique BT
Procédure à appliquer :
1. Séparation : Ouvrir sectionneur amont
2. Condamnation : Cadenas + pancarte
3. Identification : Vérifier le bon disjoncteur
4. VAT : Mesurer absence de tension sur toutes les phases

🏭 CAS PRATIQUE N°2 : MAINTENANCE TRANSFORMATEUR HT
Situation : Maintenance préventive sur transformateur 20kV
Procédure renforcée :
1. Séparation : Ouverture sectionneurs HT et BT
2. Condamnation : Verrouillage mécanique + pancartes
3. Identification : Vérification schémas et étiquetage
4. VAT : Vérification HT avec perche isolante
5. MALT/CC : Mise à la terre obligatoire

🔌 CAS PRATIQUE N°3 : INTERVENTION SUR ÉCLAIRAGE
Situation : Remplacement de luminaires en hauteur
Points d'attention :
• Identifier le bon circuit d'éclairage
• Vérifier l'absence d'autres alimentations
• Attention aux circuits de secours
• VAT sur chaque point lumineux

💡 EXERCICE : Analysez chaque cas et proposez la procédure complète !`,
      type: 'text',
      notes: 'Faire analyser chaque cas par les stagiaires. Corriger collectivement. Insister sur les particularités de chaque situation.',
      duration: 360
    },
    {
      id: 'tc2-slide-13',
      title: 'Erreurs fréquentes et pièges à éviter',
      content: `ERREURS COURANTES ET LEURS CONSÉQUENCES

❌ ERREUR N°1 : CONSIGNATION INCOMPLÈTE
• Oublier une alimentation de secours
• Ne pas vérifier tous les circuits
• Conséquence : Électrisation grave

✅ Solution : Analyse complète des schémas

❌ ERREUR N°2 : VAT DÉFAILLANTE
• Utiliser un VAT non vérifié
• Ne pas tester avant/après usage
• Conséquence : Travail sous tension

✅ Solution : Procédure de vérification stricte

❌ ERREUR N°3 : CONDAMNATION INSUFFISANTE
• Cadenas non personnel
• Pancarte illisible ou absente
• Conséquence : Remise sous tension accidentelle

✅ Solution : Matériel normalisé et personnel

❌ ERREUR N°4 : DÉCONSIGNATION PRÉMATURÉE
• Travaux non terminés
• Outils oubliés dans l'installation
• Conséquence : Court-circuit, incendie

✅ Solution : Vérification systématique

❌ ERREUR N°5 : MAUVAISE COMMUNICATION
• Informations incomplètes aux secours
• Panique et précipitation
• Conséquence : Retard dans les soins

✅ Solution : Formation et procédures claires`,
      type: 'text',
      notes: 'Insister sur chaque erreur avec des exemples concrets. Expliquer les conséquences graves possibles. Proposer des solutions pratiques.',
      duration: 360
    },
    {
      id: 'tc2-slide-14',
      title: 'Synthèse et validation des acquis',
      content: `RÉCAPITULATIF COMPLET DU MODULE

✅ CONSIGNATION MAÎTRISÉE :
• 4 étapes obligatoires dans l'ordre strict
• Séparation → Condamnation → Identification → VAT
• Matériel adapté et vérifié
• Seul le consignateur peut déconsigner

✅ VAT SÉCURISÉE :
• Vérification avant et après usage
• Test sur installation sous tension connue
• Mesure sur tous les conducteurs actifs
• Arrêt immédiat si VAT défaillant

✅ PREMIERS SECOURS ÉLECTRIQUES :
• Protéger - Alerter - Secourir
• Couper l'alimentation en priorité absolue
• Examen médical systématique obligatoire
• Spécificités de l'accident électrique

✅ PRÉVENTION ACTIVE :
• Respecter scrupuleusement les procédures
• Utiliser systématiquement les EPI
• Ne jamais improviser ou prendre de raccourcis
• Signaler toute anomalie ou situation dangereuse

🎯 VOUS ÊTES MAINTENANT PRÊTS :
• Pour les formations spécialisées (B0, BS, BR...)
• Pour appliquer ces connaissances sur le terrain
• Pour contribuer à la sécurité électrique collective

🏆 FÉLICITATIONS : Vous maîtrisez les fondamentaux de la sécurité électrique !`,
      type: 'text',
      notes: 'Récapituler tous les points essentiels du module. Évaluer la compréhension par des questions. Valoriser les acquis et préparer la suite du parcours.',
      duration: 240
    }
  ]
};