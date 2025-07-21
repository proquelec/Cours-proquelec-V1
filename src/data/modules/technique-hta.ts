
import { Module } from '../../types';

export const techniqueHTA: Module = {
  id: 'technique-hta',
  title: 'Technique HTA - Interventions en Haute Tension A',
  description: 'Module complet sur les techniques, matériels, sécurité, organisation et prévention pour les interventions en haute tension A (HTA).',
  category: 'specialise',
  duration: 210,
  level: 'Avancé',
  certification: 'Habilitation HTA',
  objectives: [
    'Comprendre les techniques spécifiques à la HTA',
    'Identifier et utiliser les matériels et documents applicables',
    'Appliquer les procédures de sécurité et de consignation',
    'Analyser les risques et utiliser les EPI adaptés',
    'Préparer, organiser et suivre les interventions en HTA',
    'Réaliser des études de cas et exercices pratiques',
    'Maîtriser le glossaire et les ressources HTA'
  ],
  prerequisites: [
    'Avoir validé le tronc commun HTA',
    'Connaissances de base en électricité et sécurité',
    'Expérience pratique souhaitée'
  ],
  slides: [
    {
      id: 'hta-slide-1',
      type: 'text',
      title: 'Introduction à la Haute Tension A (HTA)',
      content: `La Haute Tension A (HTA) concerne les installations électriques dont la tension est comprise entre 1 kV et 50 kV. Les interventions en HTA nécessitent des compétences techniques spécifiques, une organisation rigoureuse et le respect strict des procédures de sécurité.\n\nOBJECTIFS DU MODULE :\n• Comprendre les enjeux de la HTA\n• Identifier les risques spécifiques\n• Maîtriser les techniques et matériels dédiés\n• Appliquer les procédures réglementaires\n• Préparer et organiser les interventions en toute sécurité`,
      notes: 'Présenter le contexte, les enjeux et la réglementation HTA. Insister sur la gravité des risques.',
      duration: 240
    },
    {
      id: 'hta-slide-2',
      type: 'text',
      title: 'Techniques spécifiques d’intervention',
      content: `• Méthodes d’approche des installations HTA\n• Utilisation des perches isolantes, outils adaptés\n• Techniques de mise à la terre et en court-circuit\n• Procédures de consignation et déconsignation\n• Contrôle d’absence de tension (VAT HTA)\n• Communication et coordination sur site\n\nExemple : Intervention sur un poste HTA avec perche isolante et balisage renforcé.`,
      notes: 'Détailler chaque technique avec schémas ou photos si possible. Faire un focus sur la VAT HTA.',
      duration: 300
    },
    {
      id: 'hta-slide-3',
      type: 'text',
      title: 'Matériels et documents applicables',
      content: `MATÉRIELS SPÉCIFIQUES :\n• Perches isolantes HTA\n• Détecteurs de tension HTA\n• Gants et sur-gants isolants classe 2 ou 3\n• Chaussures et tapis isolants\n• Outillage isolé 20 kV et plus\n• Matériel de consignation (cadenas, pancartes, dispositifs de verrouillage)\n\nDOCUMENTS :\n• Schémas unifilaires HTA\n• Procédures d’exploitation\n• Attestations de consignation\n• Plans de prévention et permis de travail`,
      notes: 'Présenter le matériel réel. Expliquer les critères de choix, de vérification et de conformité.',
      duration: 240
    },
    {
      id: 'hta-slide-4',
      type: 'text',
      title: 'Procédures de sécurité en HTA',
      content: `• Consignation stricte avant toute intervention\n• Vérification d’absence de tension (VAT) sur chaque phase\n• Mise à la terre et en court-circuit obligatoire\n• Balisage et signalisation renforcés\n• Contrôle d’accès à la zone HTA\n• Surveillance continue pendant l’intervention\n• Procédures d’urgence en cas d’incident\n\nRappel : Toute intervention doit être autorisée par le chargé de consignation HTA.`,
      notes: 'Détailler chaque étape de la procédure. Insister sur l’ordre et la traçabilité.',
      duration: 300
    },
    {
      id: 'hta-slide-5',
      type: 'text',
      title: 'Gestion des risques et EPI',
      content: `• Identification des dangers spécifiques HTA (arc électrique, induction, chutes, etc.)\n• Analyse de risque préalable à chaque intervention\n• Mesures de prévention adaptées\n• Utilisation obligatoire des EPI : gants, casque, visière, vêtements ignifugés, chaussures isolantes\n• Vérification périodique des EPI et outillages\n• Procédures en cas de défaillance d’un EPI\n\nExemple : Analyse de risque pour une opération de maintenance sur un disjoncteur HTA.`,
      notes: 'Faire réaliser une analyse de risque en groupe. Présenter différents EPI et leur contrôle.',
      duration: 300
    },
    {
      id: 'hta-slide-6',
      type: 'text',
      title: 'Organisation et préparation des interventions',
      content: `• Planification des opérations (planning, coordination des équipes)\n• Réunions de préparation et briefings sécurité\n• Vérification des autorisations et habilitations\n• Préparation du matériel et des documents\n• Contrôle des accès et des moyens de communication\n• Suivi et traçabilité des opérations\n\nÉtude de cas : Organisation d’un chantier HTA multi-équipes.`,
      notes: 'Proposer un exercice de planification. Insister sur la coordination et la communication.',
      duration: 240
    },
    {
      id: 'hta-slide-7',
      type: 'text',
      title: 'Étude de cas pratique',
      content: `CAS PRATIQUE : Intervention de maintenance sur un poste HTA\n\nObjectifs :\n• Identifier les risques\n• Définir les étapes de consignation\n• Choisir les EPI adaptés\n• Organiser la communication et la surveillance\n\nTravail en groupe : Élaborer un plan d’intervention détaillé et présenter à la classe.`,
      notes: 'Faire travailler les stagiaires en groupe. Corriger collectivement le plan proposé.',
      duration: 300
    },
    {
      id: 'hta-slide-8',
      type: 'text',
      title: 'Exercices pratiques',
      content: `EXERCICE 1 : Identifier les matériels HTA sur photos\nEXERCICE 2 : Rédiger une procédure de consignation HTA\nEXERCICE 3 : Analyse de risque pour une opération de remplacement de sectionneur\n\nCorrigés disponibles en annexe.`,
      notes: 'Proposer des exercices variés. Prévoir une correction collective ou en auto-évaluation.',
      duration: 240
    },
    {
      id: 'hta-slide-9',
      type: 'text',
      title: 'Glossaire HTA',
      content: `• HTA : Haute Tension A (1 kV à 50 kV)\n• Consignation : Procédure de mise en sécurité\n• VAT : Vérification d’Absence de Tension\n• EPI : Équipement de Protection Individuelle\n• Balisage : Signalisation de la zone de travail\n• Attestation de consignation : Document officiel de sécurité\n• Induction : Phénomène de tension induite dans un conducteur voisin\n• Sectionneur : Appareil permettant d’isoler une partie d’installation`,
      notes: 'Faire lire et commenter le glossaire. Ajouter des termes si besoin selon les questions.',
      duration: 180
    },
    {
      id: 'hta-slide-10',
      type: 'text',
      title: 'Synthèse et évaluation',
      content: `POINTS CLÉS À RETENIR :\n• Respect strict des procédures HTA\n• Importance de la consignation et de la VAT\n• Utilisation systématique des EPI\n• Organisation et communication essentielles\n\nÉVALUATION :\n• QCM sur les procédures HTA\n• Étude de cas à présenter\n• Correction collective et feedback\n\nVous êtes maintenant prêts pour les interventions en HTA !`,
      notes: 'Récapituler les acquis. Proposer une évaluation formative et recueillir le feedback.',
      duration: 180
    },
    {
      id: 'hta-slide-11',
      type: 'text',
      title: 'Ressources et documentation',
      content: `• Norme NF C 13-100 (HTA)\n• Guides de l’INRS et de l’UTE\n• Fiches techniques fabricants\n• Vidéos de formation HTA\n• Sites spécialisés (AFNOR, INRS, UTE)\n• Contacts pour questions techniques et retours d’expérience`,
      notes: 'Distribuer ou référencer les documents. Encourager la consultation régulière des ressources.',
      duration: 120
    }
  ]
};
