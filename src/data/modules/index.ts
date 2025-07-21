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


import { b0H0H0V } from './b0-h0-h0v';


import { bsInterventions } from './bs-interventions';


import { consignationHT } from './consignation-ht';



import { mesuragesHT } from './mesurages-ht';
import { manoeuvresHTB } from './manoeuvres-htb';
import { travauxHT } from './travaux-ht';

export const allModules: Module[] = [
  nfC18510,
  troncCommun1,
  troncCommun2,
  b0H0H0V,
  bsInterventions,
  consignationHT,
  mesuragesHT,
  manoeuvresHTB,
  travauxHT,
  essaisHT,
  executantBT
  ,chargeChantier
  ,posePhotovoltaique
  ,manoeuvresBT
  ,manoeuvresHTA
  ,mesuragesBT
  ,interventionsBR
  ,consignationBT
  ,essaisBT
  ,troncCommunHTB
  ,techniqueHTA
  ,techniqueHTB
];

export const getModuleById = (id: string): Module | undefined => {
  return allModules.find(module => module.id === id);
};

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