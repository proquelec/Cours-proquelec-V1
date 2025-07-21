/*
  # Création du module Introduction à la norme NF C 18-510

  1. Nouveau module
    - Module complet sur la norme NF C 18-510
    - 12 diapositives détaillées
    - Objectifs pédagogiques clairs
    - Contenu structuré et professionnel

  2. Questions de quiz
    - 5 questions de quiz correspondant au contenu
    - Questions à choix multiples
    - Explications détaillées
    - Temps limite adapté

  3. Sécurité
    - Respect des politiques RLS existantes
    - Attribution au formateur approprié
*/

-- Créer le module Introduction à la norme NF C 18-510
DO $$
DECLARE
    module_nfc18510_id uuid := gen_random_uuid();
    formateur_id uuid;
BEGIN
    -- Récupérer l'ID d'un formateur
    SELECT id INTO formateur_id FROM users WHERE role = 'formateur' LIMIT 1;
    
    -- Créer le module
    INSERT INTO modules (id, title, description, category, duration, level, certification, objectives, prerequisites, created_by) VALUES (
        module_nfc18510_id,
        'Introduction à la norme NF C 18-510',
        'Module d''introduction à la norme française NF C 18-510 qui décrit les exigences pour se prémunir du risque électrique lors des opérations sur les ouvrages et installations électriques.',
        'tronc-commun',
        180,
        'Débutant',
        'Habilitation Électrique NF C18-510',
        '["Comprendre l''importance et le contexte de la norme NF C 18-510", "Identifier les principaux objectifs et le champ d''application", "Reconnaître les acteurs clés et leurs rôles", "Appliquer les principes de prévention du risque électrique"]',
        '["Aucun prérequis technique", "Savoir lire et écrire en français", "Notions de base en sécurité au travail"]',
        formateur_id
    );

    -- Diapositives du module
    INSERT INTO slides (module_id, title, content, type, notes, duration, order_index) VALUES
    
    -- Slide 1: Introduction
    (module_nfc18510_id, 'Introduction à la norme NF C 18-510', 
     'BIENVENUE DANS CE MODULE D''INTRODUCTION

La norme NF C 18-510 est une norme française fondamentale qui décrit les exigences pour se prémunir du risque électrique lors des opérations sur les ouvrages et installations électriques.

OBJECTIFS DE CE MODULE :
• Comprendre l''importance et le contexte de la norme
• Identifier les principaux objectifs et le champ d''application
• Reconnaître les acteurs clés et leurs rôles
• Appliquer les principes de prévention du risque électrique

POURQUOI CETTE FORMATION ?
Cette norme est essentielle pour garantir la sécurité des personnes et des installations lors de travaux électriques ou non électriques réalisés dans un environnement électrique.', 
     'text', 
     'Présenter les enjeux de sécurité. Insister sur l''importance de cette norme dans le contexte professionnel actuel.', 
     300, 1),

    -- Slide 2: Contexte et importance
    (module_nfc18510_id, 'Contexte et importance de la norme', 
     'CONTEXTE D''ÉLABORATION

La norme NF C 18-510 a été élaborée pour répondre à un besoin crucial de sécurité dans le domaine de l''électricité.

POURQUOI CETTE NORME EST-ELLE IMPORTANTE ?

🔒 SÉCURITÉ DES PERSONNES
• Protection des travailleurs contre les dangers électriques
• Réduction des accidents d''origine électrique
• Prévention des électrisations et électrocutions

🏭 PROTECTION DES INSTALLATIONS
• Préservation des équipements électriques
• Évitement des dommages matériels
• Continuité de service

📋 CADRE RÉGLEMENTAIRE CLAIR
• Procédures standardisées
• Responsabilités définies
• Coordination entre acteurs
• Conformité réglementaire facilitée', 
     'text', 
     'Expliquer le contexte historique et les enjeux actuels. Donner des exemples concrets d''accidents évités grâce à cette norme.', 
     360, 2),

    -- Slide 3: Principaux objectifs
    (module_nfc18510_id, 'Principaux objectifs de la norme', 
     'LES 3 OBJECTIFS FONDAMENTAUX

1️⃣ PRÉVENTION DES RISQUES ÉLECTRIQUES
• Assurer que chaque personne impliquée prenne en compte la prévention
• Du donneur d''ordre à l''exécutant
• Approche globale et systémique
• Culture de sécurité partagée

2️⃣ COMPÉTENCE DES OPÉRATEURS
• Garantir les connaissances techniques nécessaires
• Adaptation aux environnements spécifiques
• Formation continue et mise à jour
• Habilitation selon les compétences

3️⃣ COHÉRENCE ET MAÎTRISE DE L''INFORMATION
• Unicité de l''information entre tous les acteurs
• Communication claire et précise
• Traçabilité des opérations
• Coordination efficace des interventions

Ces objectifs visent à créer un environnement de travail sûr et maîtrisé.', 
     'text', 
     'Détailler chaque objectif avec des exemples pratiques. Insister sur l''aspect systémique de la prévention.', 
     420, 3),

    -- Slide 4: Champ d'application
    (module_nfc18510_id, 'Champ d''application de la norme', 
     'DOMAINE D''APPLICATION

La norme NF C 18-510 s''applique à :

⚡ INSTALLATIONS ÉLECTRIQUES
• Toutes tensions ≤ 500 kV
• Courant alternatif ET continu
• Ouvrages et installations électriques

🔧 TYPES D''OPÉRATIONS
• Construction et réalisation
• Exploitation et maintenance
• Démantèlement
• Essais et vérifications
• Travaux non électriques en environnement électrique

📍 LIEUX D''APPLICATION
• Installations industrielles
• Bâtiments tertiaires et résidentiels
• Infrastructures publiques
• Chantiers de construction

La norme couvre donc un très large spectre d''activités professionnelles.', 
     'text', 
     'Donner des exemples concrets pour chaque type d''opération. Préciser les limites de tension.', 
     360, 4),

    -- Slide 5: Exclusions importantes
    (module_nfc18510_id, 'Exclusions de la norme', 
     'CE QUI N''EST PAS COUVERT PAR LA NORME

❌ UTILISATION NORMALE D''APPAREILS
• Usage domestique standard
• Utilisation conforme aux instructions
• Appareils électroménagers
• Équipements informatiques

❌ ACTIVITÉS NON PROFESSIONNELLES
• Bricolage personnel
• Activités de loisir
• Interventions domestiques

❌ INSTALLATIONS SPÉCIALISÉES
• Avions et aéronefs
• Bateaux et navires
• Installations de traction électrique
• Véhicules automobiles
• Installations soumises à réglementations particulières

⚠️ ATTENTION : Ces exclusions ne signifient pas absence de risques !
D''autres réglementations peuvent s''appliquer.', 
     'text', 
     'Bien expliquer pourquoi ces exclusions existent. Préciser que d''autres normes peuvent s''appliquer.', 
     300, 5),

    -- Slide 6: Acteurs clés - Partie 1
    (module_nfc18510_id, 'Acteurs clés - Donneurs d''ordre et employeurs', 
     'LES ACTEURS DE LA CHAÎNE DE RESPONSABILITÉ

👔 DONNEUR D''ORDRE
• Personne ou entité qui décide de faire réaliser des opérations
• Définit les objectifs et contraintes
• Choisit les entreprises intervenantes
• Responsable de la coordination générale

RESPONSABILITÉS :
• Évaluation des risques globaux
• Choix d''entreprises compétentes
• Coordination des interventions
• Information sur les risques spécifiques

👨‍💼 EMPLOYEUR
• Personne physique qui emploie du personnel
• A autorité hiérarchique sur ses salariés
• Responsable de leur sécurité

RESPONSABILITÉS :
• Formation et habilitation du personnel
• Fourniture des EPI et outillage
• Organisation du travail en sécurité
• Surveillance des opérations', 
     'text', 
     'Insister sur les responsabilités légales. Donner des exemples de situations concrètes.', 
     420, 6),

    -- Slide 7: Acteurs clés - Partie 2
    (module_nfc18510_id, 'Acteurs clés - Chargés d''exploitation et de consignation', 
     'ACTEURS TECHNIQUES SPÉCIALISÉS

⚡ CHARGÉ D''EXPLOITATION ÉLECTRIQUE
• Personne chargée d''assurer les opérations d''exploitation
• Connaissance approfondie de l''installation
• Interface avec les intervenants extérieurs

RESPONSABILITÉS :
• Autorisation des travaux
• Fourniture des informations techniques
• Coordination avec l''exploitation
• Surveillance des opérations

🔒 CHARGÉ DE CONSIGNATION
• Personne chargée d''effectuer les opérations de consignation
• Compétences techniques spécialisées
• Responsabilité de la mise en sécurité

RESPONSABILITÉS :
• Analyse des risques de consignation
• Réalisation des opérations de consignation
• Délivrance des attestations
• Déconsignation en fin d''intervention

Ces rôles nécessitent des habilitations spécifiques.', 
     'text', 
     'Expliquer l''importance de ces rôles techniques. Préciser les niveaux d''habilitation requis.', 
     420, 7),

    -- Slide 8: Acteurs clés - Partie 3
    (module_nfc18510_id, 'Acteurs clés - Chargés de travaux et exécutants', 
     'ACTEURS DE TERRAIN

👷‍♂️ CHARGÉ DE TRAVAUX
• Personne chargée d''assurer la direction effective des travaux
• Encadrement direct des équipes
• Interface entre conception et exécution

RESPONSABILITÉS :
• Organisation pratique des travaux
• Encadrement et formation des exécutants
• Application des mesures de sécurité
• Surveillance continue des opérations

🔧 EXÉCUTANT
• Personne assurant l''exécution des opérations
• Travaille sous la conduite d''un chargé de travaux
• Applique les consignes de sécurité

RESPONSABILITÉS :
• Respect des consignes de sécurité
• Utilisation correcte des EPI
• Signalement des anomalies
• Application des procédures

PRINCIPE CLEF : Chaque niveau a ses responsabilités spécifiques !', 
     'text', 
     'Insister sur la chaîne de responsabilité. Expliquer l''importance de chaque maillon.', 
     360, 8),

    -- Slide 9: Étude de cas - Introduction
    (module_nfc18510_id, 'Étude de cas pratique - Contexte', 
     'CAS PRATIQUE : CONSTRUCTION D''UN BÂTIMENT COMMERCIAL

📋 CONTEXTE DU PROJET
• Nouveau bâtiment commercial de 2000 m²
• Installation électrique complexe
• Plusieurs entreprises impliquées
• Délais serrés de réalisation

🏗️ ENJEUX IDENTIFIÉS
• Coordination de multiples intervenants
• Sécurité des travailleurs
• Respect des délais
• Qualité des installations

👥 ACTEURS IMPLIQUÉS
• Donneur d''ordre : Société de construction principale
• Employeur : Entreprises sous-traitantes électricité
• Chargé d''exploitation : Ingénieur électrique superviseur
• Chargé de consignation : Technicien spécialisé
• Chargé de travaux : Chef d''équipe électricité
• Exécutants : Électriciens sur site

Comment appliquer la norme NF C 18-510 dans ce contexte ?', 
     'text', 
     'Présenter le cas de manière vivante. Faire le lien avec des situations que les stagiaires peuvent connaître.', 
     360, 9),

    -- Slide 10: Étude de cas - Application
    (module_nfc18510_id, 'Étude de cas - Application de la norme', 
     'APPLICATION CONCRÈTE DE LA NORME

1️⃣ PRÉPARATION ET PLANIFICATION
• Analyse des risques par le donneur d''ordre
• Définition des responsabilités de chaque acteur
• Planification des opérations de consignation
• Coordination des planning d''intervention

2️⃣ CONSIGNATION ET SÉCURITÉ
• Le chargé de consignation sécurise les installations
• Mise hors tension avant début des travaux
• Formation et équipement des exécutants
• Vérification des compétences et habilitations

3️⃣ SUPERVISION ET COORDINATION
• Le chargé d''exploitation supervise l''ensemble
• Respect des procédures de sécurité
• Le chargé de travaux coordonne sur le terrain
• Communication continue entre tous les acteurs

✅ RÉSULTAT
Projet mené à bien sans incident grâce à l''application rigoureuse de la norme NF C 18-510.', 
     'text', 
     'Détailler chaque étape. Insister sur l''importance de la coordination et de la communication.', 
     420, 10),

    -- Slide 11: Exercices pratiques
    (module_nfc18510_id, 'Exercices pratiques d''application', 
     'MISE EN PRATIQUE DE VOS CONNAISSANCES

📝 EXERCICE 1 : IDENTIFICATION DES ACTEURS
Scénario : Chantier de construction
• Identifiez les acteurs clés impliqués
• Décrivez leurs rôles respectifs
• Analysez l''importance de chaque rôle

🔧 EXERCICE 2 : PLANIFICATION DE CONSIGNATION
Scénario : Maintenance électrique industrielle
• Identifiez les étapes clés de consignation
• Définissez les responsabilités
• Élaborez les procédures de sécurité

💡 POINTS À RETENIR
• Chaque acteur a un rôle spécifique
• La coordination est essentielle
• La sécurité est l''affaire de tous
• La formation continue est nécessaire

Ces exercices vous préparent aux situations réelles que vous rencontrerez sur le terrain.', 
     'text', 
     'Encourager la participation active. Proposer de travailler en groupes si possible.', 
     300, 11),

    -- Slide 12: Conclusion et ressources
    (module_nfc18510_id, 'Conclusion et ressources', 
     'RÉCAPITULATIF DU MODULE

✅ POINTS CLÉS ACQUIS
• Importance de la norme NF C 18-510
• Objectifs de prévention des risques électriques
• Champ d''application et exclusions
• Rôles et responsabilités des acteurs
• Application pratique sur le terrain

🎯 PROCHAINES ÉTAPES
• Approfondissement des modules spécialisés
• Formation pratique aux habilitations
• Application sur vos postes de travail
• Formation continue et recyclage

📚 RESSOURCES SUPPLÉMENTAIRES
• Site officiel de l''AFNOR
• Guide des bonnes pratiques en électricité
• Documentation technique spécialisée
• Formations complémentaires

🔍 GLOSSAIRE DISPONIBLE
• Consignation électrique
• Donneur d''ordre, Employeur
• Chargé de travaux, Exécutant

Vous êtes maintenant prêts à aborder les modules techniques spécialisés !', 
     'text', 
     'Récapituler les acquis. Orienter vers les formations suivantes. Encourager l''utilisation des ressources.', 
     300, 12);

    -- Questions de quiz pour le module
    INSERT INTO quiz_questions (module_id, question, options, correct_answer, explanation, time_limit, order_index) VALUES
    
    (module_nfc18510_id, 'Qu''est-ce que la norme NF C 18-510 ?',
     '["Une norme pour la construction de bâtiments", "Une norme pour la prévention des risques électriques", "Une norme pour la fabrication d''équipements électriques", "Une norme pour la gestion des déchets électriques"]'::jsonb,
     1,
     'La norme NF C 18-510 est une norme française qui décrit les exigences pour se prémunir du risque électrique lors des opérations sur les ouvrages et installations électriques.',
     30, 1),

    (module_nfc18510_id, 'Quel est l''objectif principal de la norme NF C 18-510 ?',
     '["Augmenter la production électrique", "Assurer la sécurité des personnes et des installations lors de travaux électriques", "Réduire les coûts de maintenance électrique", "Standardiser les équipements électriques"]'::jsonb,
     1,
     'L''objectif principal est d''assurer la sécurité des personnes et des installations lors de travaux électriques en définissant des procédures et responsabilités claires.',
     30, 2),

    (module_nfc18510_id, 'Qui est responsable de la consignation électrique selon la norme NF C 18-510 ?',
     '["Le donneur d''ordre", "L''employeur", "Le chargé de consignation", "L''exécutant"]'::jsonb,
     2,
     'Le chargé de consignation est la personne spécifiquement chargée d''effectuer ou de faire effectuer les opérations de consignation électrique.',
     30, 3),

    (module_nfc18510_id, 'Quelle est une exclusion de la norme NF C 18-510 ?',
     '["Les travaux de construction", "L''utilisation normale d''appareils électriques", "Les opérations de maintenance électrique", "Les travaux de démantèlement électrique"]'::jsonb,
     1,
     'L''utilisation normale d''appareils électriques est exclue du champ d''application de la norme NF C 18-510, qui se concentre sur les opérations professionnelles spécialisées.',
     30, 4),

    (module_nfc18510_id, 'Quel acteur est chargé d''assurer la direction effective des travaux électriques ?',
     '["Le donneur d''ordre", "Le chargé de travaux", "Le chargé de consignation", "L''exécutant"]'::jsonb,
     1,
     'Le chargé de travaux est la personne chargée d''assurer la direction effective des travaux électriques ou non électriques sur le terrain.',
     30, 5);

END $$;