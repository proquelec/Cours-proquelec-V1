import { techniqueHTB } from './technique-htb';
import { techniqueHTA } from './technique-hta';
import { troncCommunHTB } from './tronc-commun-htb';
import { essaisBT } from './essais-bt';
import { consignationBT } from './consignation-bt';
import { interventionsBR } from './interventions-br';
import { mesuragesBT } from './mesurages-bt';
import { manoeuvresHTA } from './manoeuvres-hta';
import { manoeuvresBT } from './manoeuvres-bt';
import { posePhotovoltaique } from './pose-photovoltaique';
import { chargeChantier } from './charge-chantier';
import { executantBT } from './executant-bt';
import { essaisHT } from './essais-ht';

import type { Module } from '../../types';
import { troncCommun1 } from './tronc-commun-1';

import { troncCommun2 } from './tronc-commun-2';


import { nfC18510 } from './nf-c18-510';

export const allModules: Module[] = [
  techniqueHTB,
  techniqueHTA,
  troncCommunHTB,
  essaisBT,
  consignationBT,
  interventionsBR,
  mesuragesBT,
  manoeuvresHTA,
  manoeuvresBT,
  posePhotovoltaique,
  chargeChantier,
  executantBT,
  essaisHT,
  troncCommun1,
  troncCommun2,
  nfC18510
];

export const allModules2: Module[] = [
  troncCommun2,
  b0H0H0V,
  bsInterventions,
  consignationHT,
  mesuragesHT,
  manoeuvresHTB,
  bsInterventions
];

export const getModulesByCategory = (category: string): Module[] => {
  if (category === 'all') return allModules;
  return allModules.filter(module => module.category === category);
};

export const searchModules = (searchTerm: string): Module[] => {
  const term = searchTerm.toLowerCase();
  return allModules.filter(module => 
    module.title.toLowerCase().includes(term) ||
    module.description.toLowerCase().includes(term) ||
    module.objectives.some(obj => obj.toLowerCase().includes(term))
  );
};