import { CarteBancaire } from './carte-bancaire';

export interface Compte {
  id: number;
  dateOuverture: string;
  numeroCompte: string;
  solde: number;
  nom: string;
  prenom: string;
  agence: string;
  cartesBancaires: CarteBancaire[]; // Utilisation correcte
}
