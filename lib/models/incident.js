"use strict";

// get incident list from database
export const getIncidentList = () => {
  return [{
    email: 'client1@gmail.com',
    relayPoint: 'Biocoop Le Baraban',
    date: '20/01/2021',
    type: 'Conditionnement',
    cause: 'Fuite',
    resolution: 'email',
    refund: 12.5
  },
  {
    email: 'client2@gmail.com',
    relayPoint: 'Biocoop montparnasse',
    date: '22/03/2021',
    type: 'Livraison',
    cause: 'Retard',
    resolution: 'Remboursement partiel',
    refund: 36
  },
  {
    email: 'MadamePouet@gmail.com',
    relayPoint: 'La vie claire saint lazare',
    date: '17/05/2021',
    type: 'Produit',
    cause: 'Manque',
    resolution: 'Appel telephonique',
    refund: 54
  },
  {
    email: 'Dupont@gmail.com',
    relayPoint: 'Au Bout Du Champ - Martyrs',
    date: '05/10/2021',
    type: 'Livraison',
    cause: 'Retard',
    resolution: 'Remboursement partiel',
    refund: 9
  },
  {
    email: 'Pif@gmail.com',
    relayPoint: 'Chez Chloé',
    date: '06/09/2021',
    type: 'Client',
    cause: 'Oubli',
    resolution: 'Email',
    refund: 0
  },
  {
    email: 'pollux12@gmail.com',
    relayPoint: 'omptoir Bio',
    date: '30/04/2021',
    type: 'E-commerce',
    cause: 'Email non reçu',
    resolution: 'Remboursement total',
    refund: 45.3
  }];
};
