// src/app/models/demande-credit.ts
import { User } from '../models/user'; // Assurez-vous que ce chemin est correct

export interface DemandeCredit {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  dateNaissance?: Date;
  cin?: string;
  telephone?: string;
  adresse?: string;
  numeroCompte?: string;
  montant?: number;
  butCredit?: string;
  dureeMois?: number;
  dateDemande?: Date;
  utilisateur?: User; // Ajoutez cette ligne si vous avez besoin de l'utilisateur
}
