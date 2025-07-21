/*
  # Création des modules de formation électrique complets

  1. Modules créés
    - Tronc Commun N°1 : Dangers de l'électricité
    - Tronc Commun N°2 : Consignation et premiers secours
    - B0-H0-H0V : Formation exécutants non électriciens
    - BS : Interventions élémentaires
    - BP : Photovoltaïque
    - BR : Interventions générales

  2. Contenu
    - Diapositives détaillées pour chaque module
    - Objectifs pédagogiques
    - Prérequis
    - Durées réalistes
    - Notes formateur
*/

-- Supprimer les modules existants pour éviter les doublons
DELETE FROM slides WHERE module_id IN (SELECT id FROM modules);
DELETE FROM modules;

-- Module 1: Tronc Commun N°1 - Dangers de l'électricité
DO $$
DECLARE
    module_tc1_id uuid := gen_random_uuid();
    formateur_id uuid;
BEGIN
    -- Récupérer l'ID d'un formateur
    SELECT id INTO formateur_id FROM users WHERE role = 'formateur' LIMIT 1;
    
    -- Créer le module Tronc Commun N°1
    INSERT INTO modules (id, title, description, category, duration, level, certification, objectives, prerequisites, created_by) VALUES (
        module_tc1_id,
        'Tronc Commun N°1 - Dangers de l''électricité',
        'Formation sur les dangers de l''électricité, les effets du courant électrique sur le corps humain et les mesures de prévention.',
        'tronc-commun',
        120,
        'Débutant',
        'Habilitation Électrique NF C18-510',
        '["Identifier les dangers de l''électricité", "Comprendre les effets du courant sur le corps humain", "Connaître les seuils de dangerosité", "Appliquer les mesures de prévention"]',
        '["Aucun prérequis technique", "Savoir lire et écrire en français"]',
        formateur_id
    );

    -- Diapositives pour Tronc Commun N°1
    INSERT INTO slides (module_id, title, content, type, notes, duration, order_index) VALUES
    (module_tc1_id, 'Introduction aux dangers électriques', 
     'L''électricité est une énergie invisible et silencieuse qui présente des risques majeurs pour la sécurité.

• Accidents électriques : 200 morts par an en France
• 4000 électrisations graves annuelles
• Première cause d''accidents mortels au travail dans le BTP

Les dangers ne se voient pas, ne s''entendent pas et ne se sentent pas.', 
     'text', 
     'Insister sur le caractère invisible du danger électrique. Utiliser des statistiques récentes pour marquer les esprits.', 
     300, 1),

    (module_tc1_id, 'Les effets du courant électrique', 
     'Le courant électrique traverse le corps humain et provoque différents effets selon son intensité :

SEUILS DE DANGEROSITÉ (courant alternatif 50Hz) :

• 0,5 mA : Seuil de perception
• 5 mA : Secousse électrique
• 10 mA : Seuil de non-lâcher (tétanisation)
• 30 mA : Seuil de paralysie respiratoire
• 40-50 mA : Fibrillation ventriculaire (MORTEL)
• 80 mA : Seuil de fibrillation irréversible', 
     'text', 
     'Expliquer chaque seuil avec des exemples concrets. Insister sur le seuil de non-lâcher à 10 mA.', 
     420, 2),

    (module_tc1_id, 'Facteurs aggravants', 
     'Plusieurs facteurs augmentent la gravité d''un accident électrique :

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
• Fatigue, stress, alcool', 
     'text', 
     'Faire le lien avec les situations de travail réelles. Expliquer pourquoi il faut retirer les bijoux.', 
     360, 3),

    (module_tc1_id, 'Tensions et domaines électriques', 
     'Classification des installations selon la tension :

TRÈS BASSE TENSION (TBT) :
• Courant alternatif : ≤ 50V
• Courant continu : ≤ 120V

BASSE TENSION (BT) :
• 50V < U ≤ 1000V en alternatif
• 120V < U ≤ 1500V en continu

HAUTE TENSION (HT) :
• HTA : 1kV < U ≤ 50kV
• HTB : U > 50kV

⚠️ ATTENTION : Même en TBT, des risques existent !', 
     'text', 
     'Préciser que la TBT n''est pas sans danger dans certaines conditions (milieux humides, blessures).', 
     300, 4),

    (module_tc1_id, 'Types de contacts électriques', 
     'CONTACT DIRECT :
Contact avec une partie active normalement sous tension
• Toucher un conducteur nu
• Insertion d''objet dans une prise
• Contact avec bornes d''un disjoncteur

CONTACT INDIRECT :
Contact avec une masse mise accidentellement sous tension
• Défaut d''isolement
• Carcasse métallique d''un appareil défaillant
• Canalisation métallique

Les deux types de contacts sont dangereux !', 
     'text', 
     'Donner des exemples concrets de chaque type de contact. Insister sur le fait que les contacts indirects sont souvent imprévisibles.', 
     360, 5),

    (module_tc1_id, 'Brûlures électriques', 
     'L''électricité provoque deux types de brûlures :

BRÛLURES PAR ARC ÉLECTRIQUE :
• Température : 3000 à 20000°C
• Brûlures externes graves
• Projection de métal en fusion
• Lésions oculaires

BRÛLURES INTERNES (effet Joule) :
• Échauffement des tissus par le courant
• Destruction des organes internes
• Souvent invisibles de l''extérieur
• Peuvent apparaître plusieurs heures après

Les brûlures électriques sont toujours graves !', 
     'text', 
     'Expliquer que les brûlures internes sont souvent sous-estimées car invisibles. Insister sur la nécessité d''un examen médical.', 
     300, 6),

    (module_tc1_id, 'Mesures de prévention', 
     'PRINCIPES DE PRÉVENTION :

1. SUPPRESSION DU RISQUE
• Consignation des installations
• Utilisation de la TBT de sécurité

2. PROTECTION COLLECTIVE
• Éloignement des parties actives
• Interposition d''obstacles
• Isolation des parties actives

3. PROTECTION INDIVIDUELLE
• EPI adaptés (gants, casques, écrans)
• Vêtements de protection
• Outillage isolé

4. FORMATION ET INFORMATION
• Habilitation du personnel
• Consignes de sécurité', 
     'text', 
     'Insister sur la hiérarchie des mesures de prévention. La protection individuelle vient en dernier recours.', 
     420, 7),

    (module_tc1_id, 'Équipements de protection', 
     'ÉQUIPEMENTS DE PROTECTION INDIVIDUELLE :

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
• Protection des orteils', 
     'text', 
     'Montrer les différents EPI et expliquer leur utilisation. Insister sur la vérification avant usage.', 
     360, 8),

    (module_tc1_id, 'Conclusion et évaluation', 
     'POINTS CLÉS À RETENIR :

• L''électricité est un danger invisible
• Les effets dépendent de l''intensité du courant
• Tous les domaines de tension présentent des risques
• La prévention est la seule protection efficace
• Les EPI sont indispensables
• La formation est obligatoire

PROCHAINE ÉTAPE :
Formation Tronc Commun N°2
• Consignation électrique
• Premiers secours', 
     'text', 
     'Récapituler les points essentiels. Préparer la transition vers le module suivant.', 
     240, 9);
END $$;

-- Module 2: Tronc Commun N°2 - Consignation et premiers secours
DO $$
DECLARE
    module_tc2_id uuid := gen_random_uuid();
    formateur_id uuid;
BEGIN
    SELECT id INTO formateur_id FROM users WHERE role = 'formateur' LIMIT 1;
    
    INSERT INTO modules (id, title, description, category, duration, level, certification, objectives, prerequisites, created_by) VALUES (
        module_tc2_id,
        'Tronc Commun N°2 - Consignation et premiers secours',
        'Formation sur les procédures de consignation électrique et les gestes de premiers secours en cas d''accident électrique.',
        'tronc-commun',
        150,
        'Débutant',
        'Habilitation Électrique NF C18-510',
        '["Maîtriser la procédure de consignation", "Effectuer une VAT", "Connaître les gestes de premiers secours", "Savoir alerter les secours"]',
        '["Avoir suivi le Tronc Commun N°1", "Connaître les dangers électriques"]',
        formateur_id
    );

    INSERT INTO slides (module_id, title, content, type, notes, duration, order_index) VALUES
    (module_tc2_id, 'La consignation électrique', 
     'La consignation est l''ensemble des opérations destinées à mettre et maintenir en sécurité une installation électrique.

OBJECTIF :
Permettre le travail en sécurité sur une installation électrique

PRINCIPE :
Séparer complètement l''installation de toute source d''énergie

QUI PEUT CONSIGNER ?
• Chargé de consignation (BC)
• Chargé d''exploitation électrique (BE)

La consignation est OBLIGATOIRE pour tous travaux hors tension.', 
     'text', 
     'Insister sur le caractère obligatoire de la consignation. Expliquer les rôles et responsabilités.', 
     300, 1),

    (module_tc2_id, 'Les 4 étapes de la consignation', 
     'ÉTAPE 1 : SÉPARATION
• Ouvrir tous les organes de séparation
• Disjoncteurs, sectionneurs, fusibles

ÉTAPE 2 : CONDAMNATION
• Verrouillage mécanique des organes de séparation
• Pose de cadenas, pancartes d''interdiction

ÉTAPE 3 : IDENTIFICATION
• Vérification de l''installation concernée
• Lecture des schémas et étiquetages

ÉTAPE 4 : VÉRIFICATION (VAT)
• Vérification d''Absence de Tension
• Sur chaque conducteur actif', 
     'text', 
     'Détailler chaque étape. Insister sur l''ordre obligatoire et l''importance de chaque étape.', 
     420, 2),

    (module_tc2_id, 'La Vérification d''Absence de Tension (VAT)', 
     'PROCÉDURE VAT :

1. VÉRIFIER LE FONCTIONNEMENT DU VAT
• Test sur installation sous tension connue
• Vérification des piles/batteries

2. EFFECTUER LA MESURE
• Sur chaque conducteur actif
• Entre phases et entre phase et terre
• Respecter les distances de sécurité

3. VÉRIFIER À NOUVEAU LE VAT
• Test après utilisation
• S''assurer du bon fonctionnement

⚠️ Si le VAT ne fonctionne pas : ARRÊT IMMÉDIAT', 
     'text', 
     'Démontrer l''utilisation d''un VAT. Insister sur la vérification avant et après usage.', 
     360, 3),

    (module_tc2_id, 'Matériel de consignation', 
     'ORGANES DE SÉPARATION :
• Disjoncteurs
• Sectionneurs
• Interrupteurs-sectionneurs
• Fusibles

MATÉRIEL DE CONDAMNATION :
• Cadenas de consignation
• Pancartes d''interdiction
• Dispositifs de verrouillage

MATÉRIEL DE VÉRIFICATION :
• VAT (Vérificateur d''Absence de Tension)
• Multimètre (en complément)
• Perche isolante

Chaque matériel doit être vérifié avant usage !', 
     'text', 
     'Présenter le matériel réel. Expliquer les critères de choix et de vérification.', 
     300, 4),

    (module_tc2_id, 'Déconsignation', 
     'PROCÉDURE DE DÉCONSIGNATION :

1. S''ASSURER QUE LES TRAVAUX SONT TERMINÉS
• Vérification visuelle de l''installation
• Retrait de tous les outils et matériels

2. RETIRER LES DISPOSITIFS DE PROTECTION
• Mise à la terre et en court-circuit
• Protections mécaniques

3. RETIRER LES CONDAMNATIONS
• Cadenas et pancartes
• Dispositifs de verrouillage

4. REFERMER LES ORGANES DE SÉPARATION
• Dans l''ordre inverse de l''ouverture

La déconsignation ne peut être faite que par le consignateur !', 
     'text', 
     'Insister sur le fait que seul celui qui a consigné peut déconsigner. Expliquer l''ordre des opérations.', 
     360, 5),

    (module_tc2_id, 'Conduite à tenir en cas d''accident', 
     'EN CAS D''ACCIDENT ÉLECTRIQUE :

1. PROTÉGER (1 minute maximum)
• Couper l''alimentation électrique
• Si impossible : dégager avec un objet isolant
• Ne jamais toucher la victime directement

2. ALERTER
• Appeler les secours : 15 (SAMU) ou 18 (Pompiers)
• Donner des informations précises

3. SECOURIR
• Vérifier la conscience et la respiration
• Mettre en position latérale de sécurité
• Pratiquer la réanimation si nécessaire

JAMAIS de geste héroïque ! Votre sécurité d''abord !', 
     'text', 
     'Insister sur la priorité : se protéger d''abord. Détailler les numéros d''urgence et les informations à donner.', 
     420, 6),

    (module_tc2_id, 'Premiers secours spécifiques', 
     'SPÉCIFICITÉS DE L''ACCIDENT ÉLECTRIQUE :

ÉLECTRISATION :
• Vérifier les points d''entrée et de sortie du courant
• Surveiller les brûlures internes
• Examen médical obligatoire

ÉLECTROCUTION :
• Arrêt cardiaque et/ou respiratoire
• Réanimation cardio-pulmonaire immédiate
• Défibrillation si disponible

BRÛLURES :
• Refroidir à l''eau froide (15-20 minutes)
• Ne pas percer les cloques
• Protéger avec un linge propre

Toute victime d''accident électrique doit être examinée par un médecin !', 
     'text', 
     'Expliquer les spécificités par rapport aux autres accidents. Insister sur l''examen médical systématique.', 
     360, 7),

    (module_tc2_id, 'Numéros d''urgence et informations', 
     'NUMÉROS D''URGENCE :

• 15 : SAMU (urgences médicales)
• 18 : Sapeurs-pompiers
• 112 : Numéro d''urgence européen
• 114 : Urgences pour sourds et malentendants

INFORMATIONS À DONNER :
• Nature de l''accident (électrique)
• Lieu précis de l''accident
• Nombre de victimes
• État apparent des victimes
• Circonstances de l''accident
• Tension en cause si connue

Rester en ligne jusqu''à ce que les secours raccrochent !', 
     'text', 
     'Faire répéter les numéros. Simuler un appel d''urgence pour s''entraîner.', 
     300, 8),

    (module_tc2_id, 'Synthèse et évaluation', 
     'POINTS CLÉS À RETENIR :

CONSIGNATION :
• 4 étapes obligatoires dans l''ordre
• VAT indispensable
• Seul le consignateur peut déconsigner

PREMIERS SECOURS :
• Protéger - Alerter - Secourir
• Couper l''alimentation en priorité
• Examen médical systématique

PRÉVENTION :
• Respecter les procédures
• Utiliser les EPI
• Ne jamais improviser

Vous êtes maintenant prêts pour les formations spécialisées !', 
     'text', 
     'Récapituler les points essentiels. Évaluer la compréhension avant de passer aux modules spécialisés.', 
     240, 9);
END $$;

-- Module 3: B0-H0-H0V - Exécutants non électriciens
DO $$
DECLARE
    module_b0_id uuid := gen_random_uuid();
    formateur_id uuid;
BEGIN
    SELECT id INTO formateur_id FROM users WHERE role = 'formateur' LIMIT 1;
    
    INSERT INTO modules (id, title, description, category, duration, level, certification, objectives, prerequisites, created_by) VALUES (
        module_b0_id,
        'B0-H0-H0V - Exécutants non électriciens',
        'Formation pour les exécutants non électriciens travaillant dans un environnement électrique.',
        'executant',
        90,
        'Débutant',
        'Habilitation B0-H0-H0V',
        '["Évoluer en sécurité dans un environnement électrique", "Reconnaître les risques électriques", "Appliquer les consignes de sécurité", "Utiliser les EPI appropriés"]',
        '["Avoir suivi les Troncs Communs N°1 et N°2", "Savoir lire et comprendre les consignes"]',
        formateur_id
    );

    INSERT INTO slides (module_id, title, content, type, notes, duration, order_index) VALUES
    (module_b0_id, 'Présentation de l''habilitation B0', 
     'HABILITATION B0-H0-H0V :

B0 : Exécutant non électricien en Basse Tension
H0 : Exécutant non électricien en Haute Tension
H0V : Exécutant non électricien au voisinage HT

DOMAINE D''APPLICATION :
• Travaux non électriques
• Dans un environnement électrique
• Sous surveillance d''un électricien

EXEMPLES D''ACTIVITÉS :
• Peinture, nettoyage
• Maçonnerie, plomberie
• Montage mécanique
• Travaux de terrassement', 
     'text', 
     'Bien expliquer que B0 ne permet aucune intervention électrique. Donner des exemples concrets d''activités.', 
     300, 1),

    (module_b0_id, 'Limites de l''habilitation B0', 
     'CE QUE VOUS POUVEZ FAIRE :
• Accéder aux locaux électriques accompagné
• Effectuer des travaux non électriques
• Utiliser des outils non électriques
• Respecter les consignes données

CE QUE VOUS NE POUVEZ PAS FAIRE :
• Aucune intervention électrique
• Aucun raccordement
• Aucune manipulation d''appareillage
• Accès seul aux locaux électriques
• Donner des consignes électriques

En cas de doute : DEMANDER !', 
     'text', 
     'Insister fortement sur les interdictions. Répéter que B0 = aucune intervention électrique.', 
     360, 2),

    (module_b0_id, 'Reconnaissance des risques', 
     'IDENTIFIER LES DANGERS :

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
• Panneaux d''interdiction
• Balisage de sécurité
• Étiquetage des installations', 
     'text', 
     'Montrer des photos d''installations. Apprendre à reconnaître visuellement les dangers.', 
     420, 3),

    (module_b0_id, 'Distances de sécurité', 
     'DISTANCES MINIMALES À RESPECTER :

BASSE TENSION (BT) :
• Distance limite : 30 cm
• Distance de voisinage : 30 cm

HAUTE TENSION (HT) :
• 1 kV à 50 kV : 3 mètres
• 63 kV à 90 kV : 4 mètres
• 150 kV à 225 kV : 5 mètres
• 400 kV : 7 mètres

⚠️ CES DISTANCES SONT VITALES !

En cas de doute sur la tension : considérer comme HT et respecter 3 mètres minimum.', 
     'text', 
     'Faire mémoriser les distances. Utiliser des exemples visuels pour aider à estimer les distances.', 
     300, 4),

    (module_b0_id, 'Équipements de protection', 
     'EPI OBLIGATOIRES POUR B0 :

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

Vérifier l''état des EPI avant chaque utilisation !', 
     'text', 
     'Montrer les EPI et expliquer leur rôle. Insister sur la vérification avant usage.', 
     360, 5),

    (module_b0_id, 'Consignes de sécurité', 
     'RÈGLES FONDAMENTALES :

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

En cas de problème : ARRÊTER et PRÉVENIR !', 
     'text', 
     'Insister sur l''importance de signaler les anomalies. Expliquer la procédure d''arrêt des travaux.', 
     300, 6),

    (module_b0_id, 'Surveillance et encadrement', 
     'RÔLE DU SURVEILLANT :

QUI PEUT SURVEILLER :
• Chargé de travaux (B2, H2)
• Chargé d''intervention (BR)
• Personne désignée par l''employeur

MISSIONS DU SURVEILLANT :
• Donner les consignes de sécurité
• Vérifier le respect des distances
• Arrêter les travaux si nécessaire
• Assurer la liaison avec l''exploitation

VOTRE RÔLE :
• Respecter les consignes données
• Signaler les difficultés
• Ne pas agir seul en cas de problème

La surveillance est obligatoire pour les B0 !', 
     'text', 
     'Expliquer l''importance de la surveillance. Clarifier les rôles et responsabilités de chacun.', 
     360, 7),

    (module_b0_id, 'Situations d''urgence', 
     'CONDUITE À TENIR :

ACCIDENT DE PERSONNE :
• Donner l''alerte immédiatement
• Ne pas toucher la victime
• Attendre les secours qualifiés

INCIDENT ÉLECTRIQUE :
• Arrêter les travaux
• Éloigner le personnel
• Prévenir le responsable électrique

INCENDIE :
• Donner l''alerte
• Évacuer si nécessaire
• Ne pas utiliser d''eau sur installation électrique

NUMÉROS D''URGENCE :
• Secours internes : ___
• SAMU : 15
• Pompiers : 18', 
     'text', 
     'Adapter les numéros internes à l''entreprise. Insister sur les réflexes de sécurité.', 
     300, 8),

    (module_b0_id, 'Évaluation et validation', 
     'RÉCAPITULATIF B0-H0-H0V :

VOUS POUVEZ :
• Travailler sous surveillance électrique
• Respecter les distances de sécurité
• Utiliser les EPI appropriés
• Signaler les anomalies

VOUS NE POUVEZ PAS :
• Effectuer d''interventions électriques
• Accéder seul aux locaux électriques
• Manipuler l''appareillage électrique

POINTS CLÉS :
• Sécurité avant tout
• En cas de doute : ARRÊTER
• Respecter les consignes
• Signaler les problèmes

Votre habilitation est maintenant validée !', 
     'text', 
     'Récapituler les points essentiels. S''assurer de la bonne compréhension avant validation.', 
     240, 9);
END $$;

-- Module 4: BS - Interventions élémentaires
DO $$
DECLARE
    module_bs_id uuid := gen_random_uuid();
    formateur_id uuid;
BEGIN
    SELECT id INTO formateur_id FROM users WHERE role = 'formateur' LIMIT 1;
    
    INSERT INTO modules (id, title, description, category, duration, level, certification, objectives, prerequisites, created_by) VALUES (
        module_bs_id,
        'BS - Interventions élémentaires',
        'Formation pour effectuer des interventions élémentaires en basse tension.',
        'executant',
        180,
        'Intermédiaire',
        'Habilitation BS',
        '["Effectuer des interventions élémentaires", "Réaliser des raccordements simples", "Utiliser un VAT", "Appliquer les mesures de sécurité"]',
        '["Avoir suivi les Troncs Communs", "Notions de base en électricité", "Expérience pratique souhaitée"]',
        formateur_id
    );

    INSERT INTO slides (module_id, title, content, type, notes, duration, order_index) VALUES
    (module_bs_id, 'Présentation de l''habilitation BS', 
     'HABILITATION BS :
Intervention élémentaire en Basse Tension

DOMAINE D''APPLICATION :
• Interventions simples et courantes
• Remplacement à l''identique
• Raccordements sur circuits protégés

EXEMPLES D''INTERVENTIONS :
• Remplacement de fusibles BT
• Remplacement de lampes, tubes
• Remplacement de prises, interrupteurs
• Raccordement sur bornier
• Réarmement de protections

LIMITES :
• Puissance ≤ 32A en monophasé
• Puissance ≤ 25A en triphasé', 
     'text', 
     'Bien définir le périmètre d''intervention BS. Donner des exemples concrets d''interventions autorisées.', 
     360, 1),

    (module_bs_id, 'Procédure d''intervention BS', 
     'ÉTAPES OBLIGATOIRES :

1. PRÉPARATION
• Analyser le travail à effectuer
• Identifier les risques
• Préparer l''outillage et les EPI

2. CONSIGNATION POUR SÉPARATION
• Identifier le circuit concerné
• Ouvrir le dispositif de protection
• Condamner si nécessaire

3. VÉRIFICATION D''ABSENCE DE TENSION
• VAT sur tous les conducteurs actifs
• Vérifier le VAT avant et après

4. INTERVENTION
• Effectuer le travail prévu
• Respecter les règles de l''art

5. REMISE EN SERVICE
• Vérifier le travail effectué
• Refermer les protections', 
     'text', 
     'Détailler chaque étape. Insister sur l''ordre obligatoire et l''importance de la VAT.', 
     420, 2),

    (module_bs_id, 'Utilisation du VAT', 
     'VÉRIFICATEUR D''ABSENCE DE TENSION :

AVANT UTILISATION :
• Vérifier l''état du VAT
• Tester sur installation sous tension
• Vérifier l''autonomie (piles)

UTILISATION :
• Respecter la classe du VAT
• Mesurer entre tous les conducteurs
• Mesurer entre conducteurs et terre
• Respecter les distances de sécurité

APRÈS UTILISATION :
• Tester à nouveau le fonctionnement
• Ranger dans son étui

⚠️ VAT défaillant = ARRÊT IMMÉDIAT !', 
     'text', 
     'Démonstration pratique du VAT. Insister sur les tests avant et après utilisation.', 
     360, 3),

    (module_bs_id, 'Remplacement de fusibles', 
     'PROCÉDURE DE REMPLACEMENT :

1. IDENTIFIER LE FUSIBLE DÉFAILLANT
• Contrôle visuel
• Test de continuité si nécessaire

2. CONSIGNER LE CIRCUIT
• Ouvrir le sectionneur amont
• Condamner si accessible à d''autres

3. VAT SUR LES CONTACTS DU FUSIBLE
• Vérifier l''absence de tension

4. REMPLACER LE FUSIBLE
• Utiliser un fusible identique
• Vérifier les caractéristiques

5. REMETTRE EN SERVICE
• Refermer le sectionneur
• Vérifier le bon fonctionnement

ATTENTION : Fusible = même calibre et même type !', 
     'text', 
     'Montrer différents types de fusibles. Expliquer l''importance du calibre et du type.', 
     360, 4),

    (module_bs_id, 'Remplacement d''appareillage', 
     'REMPLACEMENT À L''IDENTIQUE :

MATÉRIELS CONCERNÉS :
• Prises de courant
• Interrupteurs, va-et-vient
• Luminaires, réglettes
• Détecteurs, sonnettes

PROCÉDURE :
1. Couper l''alimentation au disjoncteur
2. VAT sur les conducteurs
3. Déconnecter l''ancien matériel
4. Connecter le nouveau matériel
5. Vérifier les connexions
6. Remettre sous tension
7. Tester le fonctionnement

RÈGLE : Remplacement strictement à l''identique !', 
     'text', 
     'Insister sur la notion "à l''identique". Montrer des exemples de matériels et leurs caractéristiques.', 
     420, 5),

    (module_bs_id, 'Raccordements sur borniers', 
     'RACCORDEMENTS AUTORISÉS :

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
• Pas de modification de schéma', 
     'text', 
     'Démonstration pratique de raccordement. Insister sur la qualité des connexions.', 
     360, 6),

    (module_bs_id, 'Outillage et EPI spécifiques', 
     'OUTILLAGE ISOLÉ :
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

Matériel défaillant = Interdiction d''utilisation !', 
     'text', 
     'Présenter l''outillage réel. Expliquer les vérifications périodiques obligatoires.', 
     300, 7),

    (module_bs_id, 'Incidents et anomalies', 
     'CONDUITE À TENIR :

INCIDENT ÉLECTRIQUE :
• Arrêter immédiatement l''intervention
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
• Tenir un carnet d''intervention', 
     'text', 
     'Insister sur l''importance de signaler les anomalies. Expliquer les limites de compétence BS.', 
     360, 8),

    (module_bs_id, 'Validation des compétences', 
     'RÉCAPITULATIF HABILITATION BS :

VOUS POUVEZ :
• Interventions élémentaires BT
• Remplacement à l''identique
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

Votre habilitation BS est validée !', 
     'text', 
     'Récapituler tous les points importants. Évaluer la compréhension pratique et théorique.', 
     300, 9);
END $$;

-- Module 5: BP - Photovoltaïque
DO $$
DECLARE
    module_bp_id uuid := gen_random_uuid();
    formateur_id uuid;
BEGIN
    SELECT id INTO formateur_id FROM users WHERE role = 'formateur' LIMIT 1;
    
    INSERT INTO modules (id, title, description, category, duration, level, certification, objectives, prerequisites, created_by) VALUES (
        module_bp_id,
        'BP - Photovoltaïque',
        'Formation spécialisée pour les interventions sur installations photovoltaïques.',
        'specialise',
        240,
        'Confirmé',
        'Habilitation BP Photovoltaïque',
        '["Comprendre le fonctionnement du photovoltaïque", "Identifier les risques spécifiques", "Effectuer des interventions en sécurité", "Utiliser les EPI adaptés"]',
        '["Habilitation BS ou BR", "Connaissances en électricité", "Formation aux risques en hauteur"]',
        formateur_id
    );

    INSERT INTO slides (module_id, title, content, type, notes, duration, order_index) VALUES
    (module_bp_id, 'Introduction au photovoltaïque', 
     'PRINCIPE DU PHOTOVOLTAÏQUE :
Conversion directe de la lumière en électricité

COMPOSITION D''UNE INSTALLATION :
• Modules photovoltaïques
• Onduleurs (conversion DC/AC)
• Câblage DC et AC
• Dispositifs de protection
• Système de monitoring

TYPES D''INSTALLATIONS :
• Raccordées au réseau
• Autonomes (sites isolés)
• Hybrides (avec stockage)

PUISSANCES :
• Résidentiel : 3 à 9 kWc
• Tertiaire : 10 à 250 kWc
• Industriel : > 250 kWc', 
     'text', 
     'Expliquer le principe de base avec des schémas. Montrer différents types d''installations.', 
     360, 1),

    (module_bp_id, 'Spécificités électriques du PV', 
     'CARACTÉRISTIQUES ÉLECTRIQUES :

CÔTÉ COURANT CONTINU (DC) :
• Tension à vide : jusqu''à 1500V
• Production dès qu''il y a de la lumière
• Impossible de "couper" la production
• Risque d''arc électrique important

CÔTÉ COURANT ALTERNATIF (AC) :
• Tension réseau : 230V/400V
• Synchronisation avec le réseau
• Possibilité de coupure

DANGERS SPÉCIFIQUES :
• Production permanente côté DC
• Tensions élevées (jusqu''à 1500V)
• Risque d''arc et d''incendie
• Éblouissement par réflexion', 
     'text', 
     'Insister sur la production permanente côté DC. Expliquer pourquoi on ne peut pas "éteindre" les panneaux.', 
     420, 2),

    (module_bp_id, 'Risques spécifiques au PV', 
     'RISQUES ÉLECTRIQUES :

CÔTÉ DC :
• Tension élevée permanente
• Risque d''arc électrique
• Électrocution par contact direct
• Incendie par défaut d''arc

CÔTÉ AC :
• Risques classiques BT
• Injection sur le réseau
• Îlotage de l''onduleur

RISQUES MÉCANIQUES :
• Travail en hauteur
• Glissement sur toiture
• Chute d''objets
• Conditions météorologiques

RISQUES PARTICULIERS :
• Éblouissement
• Reflets sur modules
• Accès difficile', 
     'text', 
     'Détailler chaque type de risque. Montrer des photos d''accidents ou de situations dangereuses.', 
     360, 3),

    (module_bp_id, 'Équipements de protection PV', 
     'EPI SPÉCIFIQUES AU PV :

PROTECTION ÉLECTRIQUE :
• Gants isolants classe 2 (17kV)
• Casque isolant classe E
• Chaussures isolantes
• Vêtements anti-arc

PROTECTION CONTRE LES CHUTES :
• Harnais de sécurité
• Longes et antichutes
• Points d''ancrage certifiés
• Échafaudages si nécessaire

PROTECTION OCULAIRE :
• Lunettes anti-éblouissement
• Écrans faciaux
• Protection UV

OUTILLAGE SPÉCIALISÉ :
• Connecteurs MC4
• Pinces à sertir
• Multimètre DC 1500V
• Caméra thermique', 
     'text', 
     'Présenter les EPI spécifiques. Expliquer l''importance de la classe 2 pour les gants.', 
     360, 4),

    (module_bp_id, 'Procédures d''intervention PV', 
     'AVANT L''INTERVENTION :

PRÉPARATION :
• Étude des plans et schémas
• Vérification météo
• Préparation EPI et outillage
• Information des occupants

SÉCURISATION :
• Balisage de la zone
• Coupure côté AC (onduleur)
• Identification des circuits DC
• Mise en place des protections

PENDANT L''INTERVENTION :
• Respecter les procédures
• Utiliser les EPI
• Éviter les heures d''ensoleillement fort
• Travailler par temps couvert si possible

APRÈS L''INTERVENTION :
• Vérifications de fonctionnement
• Remise en service progressive
• Nettoyage et rangement', 
     'text', 
     'Insister sur la préparation et la planification. Expliquer l''importance des conditions météo.', 
     420, 5),

    (module_bp_id, 'Interventions de maintenance', 
     'MAINTENANCE PRÉVENTIVE :

CONTRÔLES VISUELS :
• État des modules (fissures, salissures)
• Fixations et étanchéité
• Câblage et connecteurs
• Onduleurs et boîtiers

CONTRÔLES ÉLECTRIQUES :
• Mesures de tension et courant
• Contrôle d''isolement
• Vérification des protections
• Test des dispositifs de coupure

NETTOYAGE :
• Modules (eau déminéralisée)
• Ventilation des onduleurs
• Évacuation des feuilles/débris

MAINTENANCE CORRECTIVE :
• Remplacement de modules
• Réparation de câblage
• Changement de fusibles DC
• Remplacement d''onduleurs', 
     'text', 
     'Détailler les opérations de maintenance. Insister sur les précautions à prendre.', 
     360, 6),

    (module_bp_id, 'Mesures et contrôles', 
     'APPAREILS DE MESURE :

MULTIMÈTRE DC :
• Tension jusqu''à 1500V
• Courant jusqu''à 20A
• Résistance d''isolement

PINCE AMPÈREMÉTRIQUE DC :
• Mesure de courant sans coupure
• Détection de déséquilibres

CAMÉRA THERMIQUE :
• Détection de points chauds
• Contrôle des connexions
• Diagnostic des modules

CONTRÔLEUR D''ISOLEMENT :
• Mesure entre DC+ et terre
• Mesure entre DC- et terre
• Seuil d''alarme selon normes

PROCÉDURES DE MESURE :
• Respecter les consignes de sécurité
• Utiliser les EPI appropriés
• Noter les valeurs mesurées', 
     'text', 
     'Démonstration des appareils de mesure. Expliquer l''interprétation des résultats.', 
     360, 7),

    (module_bp_id, 'Incidents et dépannage', 
     'PANNES COURANTES :

CÔTÉ DC :
• Modules défaillants
• Connecteurs défectueux
• Câbles endommagés
• Fusibles DC grillés

CÔTÉ AC :
• Onduleur en défaut
• Protection réseau
• Problème de terre
• Surtension réseau

DIAGNOSTIC :
• Analyse des alarmes
• Mesures électriques
• Contrôle visuel
• Historique de production

INTERVENTIONS :
• Remplacement de composants
• Réparation de câblage
• Nettoyage de connecteurs
• Réinitialisation d''onduleurs

SÉCURITÉ :
• Jamais d''intervention sous tension DC
• Utilisation systématique des EPI
• Signalement des anomalies graves', 
     'text', 
     'Présenter des cas concrets de pannes. Expliquer les méthodes de diagnostic.', 
     420, 8),

    (module_bp_id, 'Validation BP Photovoltaïque', 
     'RÉCAPITULATIF HABILITATION BP :

COMPÉTENCES ACQUISES :
• Connaissance du photovoltaïque
• Identification des risques spécifiques
• Utilisation des EPI adaptés
• Procédures d''intervention sécurisées

INTERVENTIONS AUTORISÉES :
• Maintenance préventive et corrective
• Remplacement de composants
• Contrôles et mesures
• Diagnostic de pannes

RESPONSABILITÉS :
• Sécurité des personnes
• Protection de l''environnement
• Qualité des interventions
• Respect des normes

ÉVOLUTION :
• Veille technologique
• Formation continue
• Retour d''expérience
• Amélioration des pratiques

Félicitations ! Votre habilitation BP est validée !', 
     'text', 
     'Récapituler toutes les compétences acquises. Insister sur l''importance de la formation continue.', 
     300, 9);
END $$;

-- Module 6: BR - Interventions générales
DO $$
DECLARE
    module_br_id uuid := gen_random_uuid();
    formateur_id uuid;
BEGIN
    SELECT id INTO formateur_id FROM users WHERE role = 'formateur' LIMIT 1;
    
    INSERT INTO modules (id, title, description, category, duration, level, certification, objectives, prerequisites, created_by) VALUES (
        module_br_id,
        'BR - Interventions générales',
        'Formation pour effectuer des interventions générales en basse tension.',
        'charge-chantier',
        300,
        'Confirmé',
        'Habilitation BR',
        '["Effectuer des interventions générales BT", "Diriger des exécutants", "Analyser les risques", "Prendre des mesures de sécurité"]',
        '["Habilitation BS", "Expérience significative en électricité", "Connaissances techniques approfondies"]',
        formateur_id
    );

    INSERT INTO slides (module_id, title, content, type, notes, duration, order_index) VALUES
    (module_br_id, 'Présentation de l''habilitation BR', 
     'HABILITATION BR :
Intervention générale en Basse Tension

DOMAINE D''APPLICATION :
• Toutes interventions en BT
• Dépannage et maintenance
• Connexions et déconnexions
• Mesurage et essais

RESPONSABILITÉS :
• Analyse des risques
• Choix des mesures de sécurité
• Direction d''exécutants
• Surveillance des travaux

DIFFÉRENCE AVEC BS :
• Pas de limitation de puissance
• Interventions complexes autorisées
• Responsabilité d''encadrement
• Analyse de risque approfondie

Le BR est un électricien confirmé !', 
     'text', 
     'Bien expliquer les responsabilités du BR. Insister sur la différence avec BS.', 
     360, 1),

    (module_br_id, 'Analyse des risques', 
     'ÉVALUATION PRÉALABLE :

ANALYSE DU TRAVAIL :
• Nature de l''intervention
• Environnement de travail
• Matériels concernés
• Personnel impliqué

IDENTIFICATION DES RISQUES :
• Risques électriques
• Risques mécaniques
• Risques chimiques
• Risques d''environnement

MESURES DE PRÉVENTION :
• Consignation si nécessaire
• EPI adaptés
• Outillage approprié
• Surveillance renforcée

DOCUMENT D''ANALYSE :
• Formalisation écrite
• Validation hiérarchique
• Communication aux exécutants
• Mise à jour si évolution', 
     'text', 
     'Insister sur l''importance de l''analyse préalable. Montrer des exemples de documents d''analyse.', 
     420, 2),

    (module_br_id, 'Interventions sous tension', 
     'TRAVAIL SOUS TENSION (TST) :

CONDITIONS D''AUTORISATION :
• Impossibilité de consigner
• Nécessité d''exploitation
• Personnel habilité et formé
• Matériel adapté

MESURES DE SÉCURITÉ :
• EPI classe 2 minimum
• Outillage isolé 1000V
• Écran de protection
• Surveillance permanente

TECHNIQUES TST :
• Méthode au contact
• Méthode à distance
• Protection par isolation
• Protection par éloignement

INTERDICTIONS :
• Travail seul sous tension
• Conditions météo défavorables
• Matériel non conforme
• Personnel non formé

Le TST reste exceptionnel !', 
     'text', 
     'Insister sur le caractère exceptionnel du TST. Détailler les conditions strictes d''autorisation.', 
     420, 3),

    (module_br_id, 'Consignation pour intervention', 
     'CONSIGNATION BR :

ANALYSE PRÉALABLE :
• Identification des sources
• Schémas et plans
• Organes de séparation
• Zones d''intervention

PROCÉDURE COMPLÈTE :
1. Séparation de toutes les sources
2. Condamnation efficace
3. Identification sans ambiguïté
4. VAT sur tous les conducteurs
5. Mise à la terre et en court-circuit
6. Balisage de la zone

PARTICULARITÉS BR :
• Consignation partielle possible
• Analyse des alimentations multiples
• Gestion des circuits auxiliaires
• Coordination avec l''exploitation

DÉCONSIGNATION :
• Vérification des travaux
• Retrait des protections
• Remise en service progressive', 
     'text', 
     'Détailler la consignation complexe. Expliquer les particularités par rapport à BS.', 
     420, 4),

    (module_br_id, 'Direction d''exécutants', 
     'ENCADREMENT D''ÉQUIPE :

PERSONNEL SOUS DIRECTION :
• Exécutants B0, BS
• Autres BR si nécessaire
• Personnel non électricien

RESPONSABILITÉS DU BR :
• Formation aux risques
• Attribution des tâches
• Fourniture des EPI
• Surveillance continue

CONSIGNES À DONNER :
• Nature du travail
• Risques identifiés
• Mesures de sécurité
• Conduite à tenir en cas d''incident

SURVEILLANCE :
• Présence sur site
• Vérification du respect des consignes
• Adaptation des mesures si nécessaire
• Arrêt des travaux si danger

Le BR est responsable de son équipe !', 
     'text', 
     'Insister sur les responsabilités d''encadrement. Expliquer les obligations légales.', 
     360, 5),

    (module_br_id, 'Dépannage et diagnostic', 
     'MÉTHODES DE DIAGNOSTIC :

ANALYSE FONCTIONNELLE :
• Compréhension du système
• Identification des symptômes
• Localisation du défaut
• Choix de la méthode

OUTILS DE DIAGNOSTIC :
• Multimètres
• Oscilloscopes
• Analyseurs de réseau
• Caméras thermiques

MESURES ÉLECTRIQUES :
• Tensions et courants
• Résistances et isolements
• Puissances et énergies
• Harmoniques et perturbations

SÉCURITÉ LORS DU DIAGNOSTIC :
• EPI adaptés aux mesures
• Respect des distances
• Utilisation d''appareils conformes
• Procédures de mesurage

RÉPARATION :
• Choix des composants
• Respect des caractéristiques
• Essais de fonctionnement
• Validation de la réparation', 
     'text', 
     'Présenter les outils de diagnostic. Insister sur la sécurité lors des mesures.', 
     420, 6),

    (module_br_id, 'Maintenance électrique', 
     'TYPES DE MAINTENANCE :

MAINTENANCE PRÉVENTIVE :
• Contrôles périodiques
• Remplacement programmé
• Nettoyage et lubrification
• Réglages et étalonnages

MAINTENANCE CORRECTIVE :
• Dépannage d''urgence
• Réparation de pannes
• Remplacement de composants
• Remise en conformité

MAINTENANCE PRÉDICTIVE :
• Surveillance continue
• Analyse des tendances
• Détection précoce des défauts
• Optimisation des interventions

DOCUMENTATION :
• Historique des interventions
• Relevés de mesures
• Pièces remplacées
• Recommandations

PLANIFICATION :
• Programmation des arrêts
• Coordination avec la production
• Gestion des stocks
• Formation du personnel', 
     'text', 
     'Expliquer les différents types de maintenance. Insister sur l''importance de la documentation.', 
     360, 7),

    (module_br_id, 'Réglementation et normes', 
     'CADRE RÉGLEMENTAIRE :

CODE DU TRAVAIL :
• Articles R4544-1 à R4544-11
• Obligations de l''employeur
• Formation du personnel
• Vérifications périodiques

NORME NF C18-510 :
• Définition des habilitations
• Procédures de sécurité
• Symboles d''habilitation
• Formation et recyclage

AUTRES NORMES :
• NF C15-100 (installations BT)
• NF C13-200 (postes de livraison)
• NF EN 50110 (exploitation)
• NF C18-531 (vérifications)

RESPONSABILITÉS :
• Pénales en cas d''accident
• Civiles pour dommages
• Disciplinaires en entreprise
• Professionnelles vis-à-vis des tiers

VEILLE RÉGLEMENTAIRE :
• Évolution des textes
• Nouvelles technologies
• Retour d''expérience
• Formation continue', 
     'text', 
     'Présenter le cadre réglementaire. Insister sur les responsabilités personnelles.', 
     360, 8),

    (module_br_id, 'Validation BR', 
     'RÉCAPITULATIF HABILITATION BR :

COMPÉTENCES TECHNIQUES :
• Interventions générales BT
• Diagnostic et dépannage
• Maintenance électrique
• Mesures et essais

COMPÉTENCES MANAGÉRIALES :
• Analyse des risques
• Direction d''exécutants
• Organisation du travail
• Communication sécurité

RESPONSABILITÉS :
• Sécurité de l''équipe
• Qualité des interventions
• Respect de la réglementation
• Formation des exécutants

ÉVOLUTION PROFESSIONNELLE :
• Vers B2 (chargé de travaux)
• Vers BC (chargé de consignation)
• Spécialisations techniques
• Management d''équipes

FORMATION CONTINUE :
• Recyclage triennal obligatoire
• Veille technologique
• Retour d''expérience
• Perfectionnement technique

Félicitations ! Vous êtes maintenant BR !', 
     'text', 
     'Récapituler toutes les compétences. Présenter les perspectives d''évolution professionnelle.', 
     300, 9);
END $$;

-- Ajouter quelques questions de quiz pour les modules
INSERT INTO quiz_questions (module_id, question, options, correct_answer, explanation, order_index)
SELECT 
    m.id,
    'Quelle est la tension limite de la Très Basse Tension (TBT) en courant alternatif ?',
    '["25V", "50V", "120V", "230V"]'::jsonb,
    1,
    'La TBT est limitée à 50V en courant alternatif et 120V en courant continu selon la norme NF C18-510.',
    1
FROM modules m WHERE m.title LIKE 'Tronc Commun N°1%';

INSERT INTO quiz_questions (module_id, question, options, correct_answer, explanation, order_index)
SELECT 
    m.id,
    'Combien d''étapes comporte la procédure de consignation ?',
    '["3 étapes", "4 étapes", "5 étapes", "6 étapes"]'::jsonb,
    1,
    'La consignation comporte 4 étapes obligatoires : Séparation, Condamnation, Identification, Vérification (VAT).',
    1
FROM modules m WHERE m.title LIKE 'Tronc Commun N°2%';

INSERT INTO quiz_questions (module_id, question, options, correct_answer, explanation, order_index)
SELECT 
    m.id,
    'Un titulaire B0 peut-il effectuer des raccordements électriques ?',
    '["Oui, sans restriction", "Oui, sous surveillance", "Non, jamais", "Oui, en TBT uniquement"]'::jsonb,
    2,
    'Un titulaire B0 ne peut effectuer aucune intervention électrique, y compris les raccordements.',
    1
FROM modules m WHERE m.title LIKE 'B0-H0-H0V%';

INSERT INTO quiz_questions (module_id, question, options, correct_answer, explanation, order_index)
SELECT 
    m.id,
    'Quelle est la puissance maximale autorisée pour un raccordement BS en monophasé ?',
    '["16A", "20A", "32A", "63A"]'::jsonb,
    2,
    'L''habilitation BS autorise les raccordements jusqu''à 32A en monophasé.',
    1
FROM modules m WHERE m.title LIKE 'BS -%';

INSERT INTO quiz_questions (module_id, question, options, correct_answer, explanation, order_index)
SELECT 
    m.id,
    'Les modules photovoltaïques produisent-ils de l''électricité par temps nuageux ?',
    '["Non, jamais", "Oui, mais très peu", "Oui, normalement", "Seulement s''il y a du vent"]'::jsonb,
    1,
    'Les modules PV produisent de l''électricité dès qu''il y a de la lumière, même faible.',
    1
FROM modules m WHERE m.title LIKE 'BP -%';

INSERT INTO quiz_questions (module_id, question, options, correct_answer, explanation, order_index)
SELECT 
    m.id,
    'Le travail sous tension (TST) est-il autorisé pour un BR ?',
    '["Oui, sans restriction", "Oui, sous conditions strictes", "Non, jamais", "Seulement en TBT"]'::jsonb,
    1,
    'Le TST est autorisé pour un BR mais sous conditions strictes : impossibilité de consigner, personnel formé, matériel adapé.',
    1
FROM modules m WHERE m.title LIKE 'BR -%';