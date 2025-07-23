import { QuizQuestion } from '../../types';

export const quizQuestions: Record<string, QuizQuestion[]> = {
  'nf-c18-510': [
    {
      id: 'nfc-q1',
      question: 'Qu\'est-ce que la norme NF C 18-510 ?',
      options: [
        'Une norme pour la construction de bâtiments',
        'Une norme pour la prévention des risques électriques',
        'Une norme pour la fabrication d\'équipements électriques',
        'Une norme pour la gestion des déchets électriques'
      ],
      correctAnswer: 1,
      explanation: 'La norme NF C 18-510 est une norme française qui décrit les exigences pour se prémunir du risque électrique lors des opérations sur les ouvrages et installations électriques.',
      timeLimit: 30
    },
    {
      id: 'nfc-q2',
      question: 'Quel est l\'objectif principal de la norme NF C 18-510 ?',
      options: [
        'Augmenter la production électrique',
        'Assurer la sécurité des personnes et des installations lors de travaux électriques',
        'Réduire les coûts de maintenance électrique',
        'Standardiser les équipements électriques'
      ],
      correctAnswer: 1,
      explanation: 'L\'objectif principal est d\'assurer la sécurité des personnes et des installations lors de travaux électriques en définissant des procédures et responsabilités claires.',
      timeLimit: 30
    },
    {
      id: 'nfc-q3',
      question: 'Qui est responsable de la consignation électrique selon la norme NF C 18-510 ?',
      options: [
        'Le donneur d\'ordre',
        'L\'employeur',
        'Le chargé de consignation',
        'L\'exécutant'
      ],
      correctAnswer: 2,
      explanation: 'Le chargé de consignation est la personne spécifiquement chargée d\'effectuer ou de faire effectuer les opérations de consignation électrique.',
      timeLimit: 30
    },
    {
      id: 'nfc-q4',
      question: 'Quelle est une exclusion de la norme NF C 18-510 ?',
      options: [
        'Les travaux de construction',
        'L\'utilisation normale d\'appareils électriques',
        'Les opérations de maintenance électrique',
        'Les travaux de démantèlement électrique'
      ],
      correctAnswer: 1,
      explanation: 'L\'utilisation normale d\'appareils électriques est exclue du champ d\'application de la norme NF C 18-510, qui se concentre sur les opérations professionnelles spécialisées.',
      timeLimit: 30
    },
    {
      id: 'nfc-q5',
      question: 'Quel acteur est chargé d\'assurer la direction effective des travaux électriques ?',
      options: [
        'Le donneur d\'ordre',
        'Le chargé de travaux',
        'Le chargé de consignation',
        'L\'exécutant'
      ],
      correctAnswer: 1,
      explanation: 'Le chargé de travaux est la personne chargée d\'assurer la direction effective des travaux électriques ou non électriques sur le terrain.',
      timeLimit: 30
    },
    {
      id: 'nfc-q6',
      question: 'Quels sont les 3 objectifs fondamentaux de la norme NF C 18-510 ?',
      options: [
        'Production, distribution, consommation',
        'Prévention des risques, compétence des opérateurs, maîtrise de l\'information',
        'Formation, habilitation, certification',
        'Conception, réalisation, maintenance'
      ],
      correctAnswer: 1,
      explanation: 'Les 3 objectifs sont : 1) Prévention des risques électriques, 2) Compétence des opérateurs, 3) Cohérence et maîtrise de l\'information.',
      timeLimit: 45
    },
    {
      id: 'nfc-q7',
      question: 'La norme NF C 18-510 s\'applique-t-elle aux installations de traction électrique ?',
      options: [
        'Oui, sans restriction',
        'Oui, mais avec des adaptations',
        'Non, c\'est une exclusion',
        'Seulement pour la maintenance'
      ],
      correctAnswer: 2,
      explanation: 'Les installations de traction électrique sont explicitement exclues du champ d\'application de la norme NF C 18-510.',
      timeLimit: 30
    }
  ],
  'tronc-commun-1': [
    {
      id: 'tc1-q1',
      question: 'Quelle est la tension limite de la Très Basse Tension (TBT) en courant alternatif ?',
      options: ['25V', '50V', '120V', '230V'],
      correctAnswer: 1,
      explanation: 'La TBT est limitée à 50V en courant alternatif et 120V en courant continu selon la norme NF C18-510.',
      timeLimit: 30
    },
    {
      id: 'tc1-q2',
      question: 'À partir de quelle intensité le courant devient-il potentiellement mortel ?',
      options: ['10 mA', '30 mA', '40-50 mA', '80 mA'],
      correctAnswer: 2,
      explanation: 'À partir de 40-50 mA, le courant peut provoquer une fibrillation ventriculaire qui peut être mortelle.',
      timeLimit: 30
    },
    {
      id: 'tc1-q3',
      question: 'Quel est le seuil de non-lâcher (tétanisation musculaire) ?',
      options: ['0,5 mA', '5 mA', '10 mA', '30 mA'],
      correctAnswer: 2,
      explanation: 'À partir de 10 mA, les muscles se contractent et il devient impossible de lâcher le conducteur (tétanisation).',
      timeLimit: 30
    },
    {
      id: 'tc1-q4',
      question: 'Quelle est la résistance du corps humain avec une peau mouillée ?',
      options: ['100000 Ω', '5000 Ω', '1000 Ω', '500 Ω'],
      correctAnswer: 3,
      explanation: 'Avec une peau mouillée, la résistance du corps humain chute à environ 500 Ω, augmentant considérablement le danger.',
      timeLimit: 30
    },
    {
      id: 'tc1-q5',
      question: 'Quelle est la première mesure de prévention dans la hiérarchie ?',
      options: [
        'Protection individuelle (EPI)',
        'Protection collective',
        'Suppression du risque',
        'Formation du personnel'
      ],
      correctAnswer: 2,
      explanation: 'La suppression du risque (consignation, TBT de sécurité) est la première et plus efficace mesure de prévention.',
      timeLimit: 30
    },
    {
      id: 'tc1-q6',
      question: 'Que signifie un contact électrique indirect ?',
      options: [
        'Contact avec une partie active sous tension',
        'Contact avec une masse mise accidentellement sous tension',
        'Contact à travers un isolant',
        'Contact à distance par arc électrique'
      ],
      correctAnswer: 1,
      explanation: 'Un contact indirect est un contact avec une masse (carcasse métallique) mise accidentellement sous tension par un défaut d\'isolement.',
      timeLimit: 30
    },
    {
      id: 'tc1-q7',
      question: 'Quelle température peut atteindre un arc électrique ?',
      options: ['1000°C', '3000°C', '3000 à 20000°C', '50000°C'],
      correctAnswer: 2,
      explanation: 'Un arc électrique peut atteindre des températures de 3000 à 20000°C, causant des brûlures très graves.',
      timeLimit: 30
    },
    {
      id: 'tc1-q8',
      question: 'Quel est le domaine de tension de la Basse Tension (BT) en alternatif ?',
      options: [
        '50V à 500V',
        '50V à 1000V', 
        '120V à 1000V',
        '230V à 400V'
      ],
      correctAnswer: 1,
      explanation: 'La Basse Tension (BT) en courant alternatif va de 50V à 1000V selon la classification réglementaire.',
      timeLimit: 30
    },
    {
      id: 'tc1-q9',
      question: 'Pourquoi faut-il retirer les bijoux métalliques avant un travail électrique ?',
      options: [
        'Pour éviter le vol',
        'Ils diminuent la résistance du corps',
        'Ils gênent les mouvements',
        'C\'est une obligation syndicale'
      ],
      correctAnswer: 1,
      explanation: 'Les bijoux métalliques diminuent la résistance du corps et créent des points de contact privilégiés, augmentant le risque d\'électrisation.',
      timeLimit: 30
    },
    {
      id: 'tc1-q10',
      question: 'Combien y a-t-il de classes de gants isolants ?',
      options: ['3 classes', '4 classes', '5 classes', '6 classes'],
      correctAnswer: 3,
      explanation: 'Il existe 5 classes de gants isolants (00, 0, 1, 2, 3, 4) correspondant à différents niveaux de tension.',
      timeLimit: 30
    }
  ],
  'tronc-commun-2': [
    {
      id: 'tc2-q1',
      question: 'Combien d\'étapes comporte la procédure de consignation ?',
      options: ['3 étapes', '4 étapes', '5 étapes', '6 étapes'],
      correctAnswer: 1,
      explanation: 'La consignation comporte 4 étapes obligatoires : Séparation, Condamnation, Identification, Vérification (VAT).',
      timeLimit: 30
    },
    {
      id: 'tc2-q2',
      question: 'Que signifie l\'acronyme VAT ?',
      options: [
        'Vérification Avant Travaux',
        'Vérification d\'Absence de Tension',
        'Validation d\'Arrêt Temporaire',
        'Vérification d\'Appareillage de Test'
      ],
      correctAnswer: 1,
      explanation: 'VAT signifie Vérification d\'Absence de Tension, étape cruciale de la consignation.',
      timeLimit: 30
    },
    {
      id: 'tc2-q3',
      question: 'Quand doit-on tester le VAT ?',
      options: [
        'Seulement avant utilisation',
        'Seulement après utilisation', 
        'Avant ET après utilisation',
        'Une fois par jour'
      ],
      correctAnswer: 2,
      explanation: 'Le VAT doit être testé avant ET après utilisation sur une installation sous tension connue pour vérifier son bon fonctionnement.',
      timeLimit: 30
    },
    {
      id: 'tc2-q4',
      question: 'Qui peut effectuer une déconsignation ?',
      options: [
        'N\'importe quel électricien',
        'Le chargé de travaux',
        'Seulement la personne qui a consigné',
        'Le responsable de l\'entreprise'
      ],
      correctAnswer: 2,
      explanation: 'Seule la personne qui a effectué la consignation peut procéder à la déconsignation.',
      timeLimit: 30
    },
    {
      id: 'tc2-q5',
      question: 'Quel est le premier geste en cas d\'accident électrique ?',
      options: [
        'Appeler les secours',
        'Toucher la victime',
        'Couper l\'alimentation électrique',
        'Faire du bouche-à-bouche'
      ],
      correctAnswer: 2,
      explanation: 'Le premier geste est de couper immédiatement l\'alimentation électrique pour protéger la victime et les secouristes.',
      timeLimit: 30
    },
    {
      id: 'tc2-q6',
      question: 'Que faire si le VAT ne fonctionne pas ?',
      options: [
        'Continuer avec un autre appareil',
        'Arrêter immédiatement l\'intervention',
        'Faire la VAT visuellement',
        'Demander à un collègue'
      ],
      correctAnswer: 1,
      explanation: 'Si le VAT ne fonctionne pas, il faut arrêter immédiatement toute intervention car on ne peut pas garantir l\'absence de tension.',
      timeLimit: 30
    },
    {
      id: 'tc2-q7',
      question: 'Combien de temps maximum pour dégager une victime d\'électrisation ?',
      options: ['30 secondes', '1 minute', '2 minutes', '5 minutes'],
      correctAnswer: 1,
      explanation: 'Il faut dégager la victime en maximum 1 minute pour limiter les lésions, mais seulement après avoir coupé l\'alimentation.',
      timeLimit: 30
    },
    {
      id: 'tc2-q8',
      question: 'Quelle est la séquence des 3 P en cas d\'urgence ?',
      options: [
        'Prévenir - Protéger - Secourir',
        'Protéger - Alerter - Secourir',
        'Protéger - Prévenir - Soigner',
        'Alerter - Protéger - Secourir'
      ],
      correctAnswer: 1,
      explanation: 'La séquence est : Protéger (couper l\'électricité), Alerter (appeler les secours), Secourir (premiers gestes).',
      timeLimit: 30
    },
    {
      id: 'tc2-q9',
      question: 'Pourquoi un examen médical est-il obligatoire après électrisation ?',
      options: [
        'C\'est une obligation légale',
        'Les lésions internes peuvent apparaître plus tard',
        'Pour rassurer la victime',
        'Pour établir un rapport d\'accident'
      ],
      correctAnswer: 1,
      explanation: 'L\'examen médical est obligatoire car les lésions internes (brûlures, troubles cardiaques) peuvent apparaître plusieurs heures après l\'accident.',
      timeLimit: 30
    },
    {
      id: 'tc2-q10',
      question: 'Dans quel ordre doit-on retirer les protections lors de la déconsignation ?',
      options: [
        'Peu importe l\'ordre',
        'Dans l\'ordre de la consignation',
        'Dans l\'ordre inverse de la consignation',
        'Selon les instructions du chef'
      ],
      correctAnswer: 2,
      explanation: 'Lors de la déconsignation, il faut retirer les protections dans l\'ordre inverse de leur mise en place lors de la consignation.',
      timeLimit: 30
    }
  ],
  'b0-h0-h0v': [
    {
      id: 'b0-q1',
      question: 'Un titulaire B0 peut-il effectuer des raccordements électriques ?',
      options: [
        'Oui, sans restriction',
        'Oui, sous surveillance',
        'Non, jamais',
        'Oui, en TBT uniquement'
      ],
      correctAnswer: 2,
      explanation: 'Un titulaire B0 ne peut effectuer aucune intervention électrique, y compris les raccordements.',
      timeLimit: 30
    },
    {
      id: 'b0-q2',
      question: 'Quelle est la distance de sécurité en BT pour un B0 ?',
      options: ['10 cm', '30 cm', '50 cm', '1 mètre'],
      correctAnswer: 1,
      explanation: 'En Basse Tension, la distance de sécurité à respecter pour un B0 est de 30 cm.',
      timeLimit: 30
    },
    {
      id: 'b0-q3',
      question: 'Un B0 peut-il accéder seul à un local électrique ?',
      options: [
        'Oui, s\'il a les clés',
        'Oui, s\'il est formé',
        'Non, jamais seul',
        'Oui, en journée seulement'
      ],
      correctAnswer: 2,
      explanation: 'Un titulaire B0 ne peut jamais accéder seul à un local électrique, il doit toujours être accompagné et surveillé.',
      timeLimit: 30
    },
    {
      id: 'b0-q4',
      question: 'Que doit faire un B0 en cas de doute sur la sécurité ?',
      options: [
        'Continuer prudemment',
        'Demander à un collègue',
        'Arrêter et demander',
        'Improviser une solution'
      ],
      correctAnswer: 2,
      explanation: 'En cas de doute, un B0 doit toujours arrêter son travail et demander des instructions à son surveillant.',
      timeLimit: 30
    },
    {
      id: 'b0-q5',
      question: 'Quelle distance de sécurité en HT 63kV pour un H0 ?',
      options: ['3 mètres', '4 mètres', '5 mètres', '7 mètres'],
      correctAnswer: 1,
      explanation: 'Pour une tension de 63kV à 90kV, la distance de sécurité est de 4 mètres.',
      timeLimit: 30
    }
  ],
  'bs-interventions': [
    {
      id: 'bs-q1',
      question: 'Quelle est la puissance maximale autorisée pour un raccordement BS en monophasé ?',
      options: ['16A', '20A', '32A', '63A'],
      correctAnswer: 2,
      explanation: 'L\'habilitation BS autorise les raccordements jusqu\'à 32A en monophasé.',
      timeLimit: 30
    },
    {
      id: 'bs-q2',
      question: 'Un BS doit-il effectuer une VAT avant intervention ?',
      options: [
        'Non, ce n\'est pas nécessaire',
        'Oui, toujours',
        'Seulement en HT',
        'Seulement si demandé'
      ],
      correctAnswer: 1,
      explanation: 'Un BS doit toujours effectuer une VAT avant toute intervention pour vérifier l\'absence de tension.',
      timeLimit: 30
    },
    {
      id: 'bs-q3',
      question: 'Que peut faire un BS sur un circuit 25A triphasé ?',
      options: [
        'Toutes interventions',
        'Interventions élémentaires seulement',
        'Rien, dépassement de limite',
        'Seulement du dépannage'
      ],
      correctAnswer: 1,
      explanation: 'Un BS peut effectuer des interventions élémentaires sur un circuit 25A triphasé (limite BS).',
      timeLimit: 30
    },
    {
      id: 'bs-q4',
      question: 'Un BS peut-il modifier un schéma électrique ?',
      options: [
        'Oui, si c\'est simple',
        'Oui, avec autorisation',
        'Non, jamais',
        'Seulement en BT'
      ],
      correctAnswer: 2,
      explanation: 'Un BS ne peut jamais modifier un schéma électrique, il ne fait que du remplacement à l\'identique.',
      timeLimit: 30
    },
    {
      id: 'bs-q5',
      question: 'Quel outillage doit utiliser un BS ?',
      options: [
        'Outillage standard',
        'Outillage isolé 1000V',
        'Outillage isolé 500V',
        'N\'importe quel outillage'
      ],
      correctAnswer: 1,
      explanation: 'Un BS doit utiliser un outillage isolé 1000V adapté à la basse tension.',
      timeLimit: 30
    }
  ]
};

export const getQuizForModule = (moduleId: string): QuizQuestion[] => {
  return quizQuestions[moduleId] || [];
};