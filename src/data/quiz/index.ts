
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
    }
  ],
  'executant-bt': [
    {
      id: 'executant-bt-q1',
      question: 'Quel est le rôle principal du chargé de travaux en BT ?',
      options: [
        'Réaliser les travaux',
        'Superviser, planifier et assurer la sécurité',
        'Contrôler les stocks',
        'Rédiger les factures'
      ],
      correctAnswer: 1,
      explanation: 'Le chargé de travaux planifie, supervise et assure la sécurité des opérations.',
      timeLimit: 30
    },
    {
      id: 'executant-bt-q2',
      question: 'Quel EPI est obligatoire pour un exécutant BT ?',
      options: [
        'Gants isolants',
        'Chaussures de sécurité',
        'Lunettes de protection',
        'Tous les précédents'
      ],
      correctAnswer: 3,
      explanation: 'Tous ces EPI sont nécessaires pour garantir la sécurité en BT.',
      timeLimit: 30
    },
    {
      id: 'executant-bt-q3',
      question: 'Que signifie l’habilitation B2V Essai ?',
      options: [
        'Travaux sous tension',
        'Travaux hors tension avec essais',
        'Travaux en haute tension',
        'Travaux de consignation'
      ],
      correctAnswer: 1,
      explanation: 'B2V Essai permet de réaliser des travaux hors tension avec essais en BT.',
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
      question: 'À partir de quelle intensité le courant devient-il mortel ?',
      options: ['10 mA', '30 mA', '40-50 mA', '80 mA'],
      correctAnswer: 2,
      explanation: 'À partir de 40-50 mA, le courant peut provoquer une fibrillation ventriculaire qui peut être mortelle.',
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
    }
  ],
  'bs-interventions': [
    {
      id: 'bs-q1',
      question: 'Quel est le rôle principal d’un titulaire BS ?',
      options: [
        'Réaliser des interventions générales',
        'Remplacer et raccorder des équipements électriques en BT',
        'Superviser les travaux HT',
        'Aucune intervention autorisée'
      ],
      correctAnswer: 1,
      explanation: 'Le titulaire BS est habilité à effectuer des interventions de remplacement et de raccordement en basse tension.',
      timeLimit: 30
    }
  ],
  'charge-chantier': [
    {
      id: 'cc-q1',
      question: 'Quel est le rôle du chargé de chantier ?',
      options: [
        'Superviser et organiser les travaux',
        'Réaliser les travaux seul',
        'Contrôler uniquement les EPI',
        'Aucune responsabilité'
      ],
      correctAnswer: 0,
      explanation: 'Le chargé de chantier supervise, organise et contrôle les travaux d’ordre non électrique.',
      timeLimit: 30
    }
  ],
  'pose-photovoltaique': [
    {
      id: 'pv-q1',
      question: 'Quel EPI est indispensable lors de la pose de panneaux photovoltaïques ?',
      options: [
        'Gants isolants',
        'Harnais antichute',
        'Lunettes de protection',
        'Tous les précédents'
      ],
      correctAnswer: 3,
      explanation: 'Tous ces EPI sont nécessaires pour garantir la sécurité lors de la pose.',
      timeLimit: 30
    }
  ],
  'manoeuvres-bt': [
    {
      id: 'mbt-q1',
      question: 'Que permet l’habilitation BE Manœuvre ?',
      options: [
        'Réaliser des travaux sous tension',
        'Réaliser des manœuvres en BT',
        'Superviser les travaux HT',
        'Aucune intervention autorisée'
      ],
      correctAnswer: 1,
      explanation: 'L’habilitation BE Manœuvre permet de réaliser des manœuvres en basse tension.',
      timeLimit: 30
    }
  ],
  'manoeuvres-hta': [
    {
      id: 'mhta-q1',
      question: 'Que permet l’habilitation HE manœuvre HTA ?',
      options: [
        'Réaliser des manœuvres en HTA',
        'Réaliser des travaux sous tension',
        'Superviser les travaux BT',
        'Aucune intervention autorisée'
      ],
      correctAnswer: 0,
      explanation: 'L’habilitation HE manœuvre HTA permet de réaliser des manœuvres en haute tension A.',
      timeLimit: 30
    }
  ],
  'mesurages-bt': [
    {
      id: 'mbt-q1',
      question: 'Quel document est obligatoire pour un mesurage en BT ?',
      options: [
        'Fiche de mesurage',
        'Autorisation d’accès',
        'Instructions de sécurité',
        'Tous les précédents'
      ],
      correctAnswer: 3,
      explanation: 'Tous ces documents sont nécessaires pour garantir la sécurité lors d’un mesurage.',
      timeLimit: 30
    }
  ],
  'interventions-br': [
    {
      id: 'br-q1',
      question: 'Que permet l’habilitation BR ?',
      options: [
        'Réaliser des interventions générales en BT',
        'Réaliser des travaux sous tension',
        'Superviser les travaux HT',
        'Aucune intervention autorisée'
      ],
      correctAnswer: 0,
      explanation: 'L’habilitation BR permet de réaliser des interventions générales en basse tension.',
      timeLimit: 30
    }
  ],
  'consignation-bt': [
    {
      id: 'cbt-q1',
      question: 'Quel document atteste la consignation en BT ?',
      options: [
        'Fiche de manœuvre',
        'Attestation de consignation',
        'Rapport d’activité',
        'Aucun document requis'
      ],
      correctAnswer: 1,
      explanation: 'L’attestation de consignation est le document officiel pour la consignation en BT.',
      timeLimit: 30
    }
  ],
  'essais-bt': [
    {
      id: 'ebt-q1',
      question: 'Quel EPI est obligatoire lors d’un essai en BT ?',
      options: [
        'Gants isolants',
        'Chaussures de sécurité',
        'Lunettes de protection',
        'Tous les précédents'
      ],
      correctAnswer: 3,
      explanation: 'Tous ces EPI sont nécessaires pour garantir la sécurité lors d’un essai en BT.',
      timeLimit: 30
    }
  ],
  'tronc-commun-htb': [
    {
      id: 'tchtb-q1',
      question: 'Quel est l’objectif du tronc commun HTB ?',
      options: [
        'Connaître les fondamentaux, risques et organisation en HTB',
        'Réaliser des travaux sous tension',
        'Superviser les travaux BT',
        'Aucune intervention autorisée'
      ],
      correctAnswer: 0,
      explanation: 'Le tronc commun HTB vise à donner les bases pour intervenir en sécurité en HTB.',
      timeLimit: 30
    }
  ],
  'technique-hta': [
    {
      id: 'thta-q1',
      question: 'Quel est l’objectif du module Technique HTA ?',
      options: [
        'Maîtriser les techniques et la sécurité en HTA',
        'Réaliser des travaux sous tension',
        'Superviser les travaux BT',
        'Aucune intervention autorisée'
      ],
      correctAnswer: 0,
      explanation: 'Le module Technique HTA vise à maîtriser les techniques et la sécurité en HTA.',
      timeLimit: 30
    }
  ],
  'technique-htb': [
    {
      id: 'thtb-q1',
      question: 'Quel est l’objectif du module Technique HTB ?',
      options: [
        'Maîtriser les techniques et la sécurité en HTB',
        'Réaliser des travaux sous tension',
        'Superviser les travaux BT',
        'Aucune intervention autorisée'
      ],
      correctAnswer: 0,
      explanation: 'Le module Technique HTB vise à maîtriser les techniques et la sécurité en HTB.',
      timeLimit: 30
    }
  ],
  'essais-ht': [
    {
      id: 'essais-ht-q1',
      question: 'Quel EPI est obligatoire lors d\'un essai en HT ?',
      options: [
        'Gants isolants',
        'Chaussures de sécurité',
        'Écran facial',
        'Tous les précédents'
      ],
      correctAnswer: 3,
      explanation: 'Tous les EPI cités sont obligatoires pour garantir la sécurité lors d\'un essai en HT.',
      timeLimit: 30
    },
    {
      id: 'essais-ht-q2',
      question: 'Quelle est la première étape avant de réaliser un essai en HT ?',
      options: [
        'Rédiger le rapport',
        'Préparer les matériels et vérifier les EPI',
        'Analyser les résultats',
        'Ranger les outils'
      ],
      correctAnswer: 1,
      explanation: 'La préparation des matériels et la vérification des EPI sont indispensables avant tout essai.',
      timeLimit: 30
    },
    {
      id: 'essais-ht-q3',
      question: 'Pourquoi rédiger un compte-rendu d\'essai ?',
      options: [
        'Pour la traçabilité et la sécurité',
        'Pour faire plaisir au chef',
        'Ce n\'est pas utile',
        'Pour gagner du temps'
      ],
      correctAnswer: 0,
      explanation: 'Le compte-rendu d\'essai permet d\'assurer la traçabilité et la sécurité des opérations.',
      timeLimit: 30
    },
    {
      id: 'bs-q1',
      question: 'Quelle est la puissance maximale autorisée pour un raccordement BS en monophasé ?',
      options: ['16A', '20A', '32A', '63A'],
      correctAnswer: 2,
      explanation: 'L\'habilitation BS autorise les raccordements jusqu\'à 32A en monophasé.',
      timeLimit: 30
    }
  ],
};

export const getQuizForModule = (moduleId: string): QuizQuestion[] => {
  return quizQuestions[moduleId] || [];
};