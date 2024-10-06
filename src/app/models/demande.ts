export class DemandeCredit {
    id?: number; // Identifiant unique de la demande de crédit
    nom?: string;
    prenom?: string;
    email?: string;
    dateNaissance?: Date;
    cin?: string;
    telephone?: string;
    adresse?: string;
    numeroCompte?: string;
    montant?: number; // Montant du crédit demandé
    butCredit?: string; // Raison de la demande de crédit
    dureeMois?: number; // Durée du crédit en mois
    dateDemande?: Date; // Date de la demande
  }
  