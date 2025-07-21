
import { Module } from '../../types';

export const troncCommunHTB: Module = {
  id: 'tronc-commun-htb',
  title: 'Tronc commun spécifique HTB',
  description: 'Fondamentaux, sécurité, organisation, études de cas et exercices pour les interventions en haute tension B.',
  category: 'tronc-commun',
  duration: 180,
  level: 'Intermédiaire',
  certification: 'HTB',
  objectives: [
    'Comprendre les fondamentaux de la HTB',
    'Connaître les risques et mesures de prévention',
    'Identifier les matériels et documents spécifiques',
    'Appliquer les procédures de sécurité',
    'Organiser et préparer les interventions en HTB',
    'Réaliser des études de cas et exercices pratiques',
    'Maîtriser le glossaire et les ressources HTB'
  ],
  prerequisites: [
    'Avoir validé le Tronc Commun N°2',
    'Notions de base en électricité et sécurité',
    'Expérience pratique souhaitée'
  ],
  slides: [
    {
      id: 'htb-tc-slide-1',
      type: 'text',
      title: 'Fondamentaux de la HTB',
      content: `La Haute Tension B (HTB) concerne les installations électriques de 50 kV à 225 kV.\n\n• Définitions : HTB, domaine de tension, équipements concernés\n• Rôle des installations HTB dans la distribution électrique\n• Différences entre HTA et HTB\n• Exemples d’ouvrages HTB (postes, lignes, transformateurs)`,
      notes: 'Présenter des schémas et photos d’installations HTB. Insister sur la spécificité du domaine.',
      duration: 240
    },
    {
      id: 'htb-tc-slide-2',
      type: 'text',
      title: 'Risques et prévention',
      content: `• Risques électriques spécifiques à la HTB (arc, induction, chutes, etc.)\n• Conséquences d’un accident HTB\n• Mesures de prévention collective et individuelle\n• EPI obligatoires (gants, casque, visière, vêtements ignifugés, chaussures isolantes)\n• Contrôle et vérification des EPI avant chaque intervention`,
      notes: 'Faire un focus sur les accidents types et la gravité des risques. Présenter les EPI réels.',
      duration: 240
    },
    {
      id: 'htb-tc-slide-3',
      type: 'text',
      title: 'Matériels et documents spécifiques',
      content: `• Perches isolantes, détecteurs de tension, outillage HTB\n• Matériel de consignation (cadenas, pancartes, dispositifs de verrouillage)\n• Schémas unifilaires, procédures d’exploitation, attestations de consignation\n• Plans de prévention et permis de travail`,
      notes: 'Présenter le matériel réel. Expliquer les critères de choix, de vérification et de conformité.',
      duration: 180
    },
    {
      id: 'htb-tc-slide-4',
      type: 'text',
      title: 'Procédures de sécurité',
      content: `• Consignation stricte avant toute intervention\n• Vérification d’absence de tension (VAT) sur chaque phase\n• Mise à la terre et en court-circuit obligatoire\n• Balisage et signalisation renforcés\n• Contrôle d’accès à la zone HTB\n• Surveillance continue pendant l’intervention\n• Procédures d’urgence en cas d’incident`,
      notes: 'Détailler chaque étape de la procédure. Insister sur l’ordre et la traçabilité.',
      duration: 240
    },
    {
      id: 'htb-tc-slide-5',
      type: 'text',
      title: 'Organisation des interventions',
      content: `• Planification des opérations (planning, coordination des équipes)\n• Réunions de préparation et briefings sécurité\n• Vérification des autorisations et habilitations\n• Préparation du matériel et des documents\n• Contrôle des accès et des moyens de communication\n• Suivi et traçabilité des opérations`,
      notes: 'Proposer un exercice de planification. Insister sur la coordination et la communication.',
      duration: 180
    },
    {
      id: 'htb-tc-slide-6',
      type: 'text',
      title: 'Étude de cas pratique',
      content: `CAS PRATIQUE : Intervention de maintenance sur un poste HTB\n\nObjectifs :\n• Identifier les risques\n• Définir les étapes de consignation\n• Choisir les EPI adaptés\n• Organiser la communication et la surveillance\n\nTravail en groupe : Élaborer un plan d’intervention détaillé et présenter à la classe.`,
      notes: 'Faire travailler les stagiaires en groupe. Corriger collectivement le plan proposé.',
      duration: 240
    },
    {
      id: 'htb-tc-slide-7',
      type: 'text',
      title: 'Exercices pratiques',
      content: `EXERCICE 1 : Identifier les matériels HTB sur photos\nEXERCICE 2 : Rédiger une procédure de consignation HTB\nEXERCICE 3 : Analyse de risque pour une opération de remplacement de sectionneur\n\nCorrigés disponibles en annexe.`,
      notes: 'Proposer des exercices variés. Prévoir une correction collective ou en auto-évaluation.',
      duration: 180
    },
    {
      id: 'htb-tc-slide-8',
      type: 'text',
      title: 'Glossaire HTB',
      content: `• HTB : Haute Tension B (50 kV à 225 kV)\n• Consignation : Procédure de mise en sécurité\n• VAT : Vérification d’Absence de Tension\n• EPI : Équipement de Protection Individuelle\n• Balisage : Signalisation de la zone de travail\n• Attestation de consignation : Document officiel de sécurité\n• Induction : Phénomène de tension induite dans un conducteur voisin\n• Sectionneur : Appareil permettant d’isoler une partie d’installation`,
      notes: 'Faire lire et commenter le glossaire. Ajouter des termes si besoin selon les questions.',
      duration: 120
    },
    {
      id: 'htb-tc-slide-9',
      type: 'text',
      title: 'Synthèse et évaluation',
      content: `POINTS CLÉS À RETENIR :\n• Respect strict des procédures HTB\n• Importance de la consignation et de la VAT\n• Utilisation systématique des EPI\n• Organisation et communication essentielles\n\nÉVALUATION :\n• QCM sur les procédures HTB\n• Étude de cas à présenter\n• Correction collective et feedback\n\nVous êtes maintenant prêts pour les modules techniques spécialisés !`,
      notes: 'Récapituler les acquis. Proposer une évaluation formative et recueillir le feedback.',
      duration: 120
    },
    {
      id: 'htb-tc-slide-10',
      type: 'text',
      title: 'Ressources et documentation',
      content: `• Norme NF C 13-100 (HTB)\n• Guides de l’INRS et de l’UTE\n• Fiches techniques fabricants\n• Vidéos de formation HTB\n• Sites spécialisés (AFNOR, INRS, UTE)\n• Contacts pour questions techniques et retours d’expérience`,
      notes: 'Distribuer ou référencer les documents. Encourager la consultation régulière des ressources.',
      duration: 60
    }
  ]
};
