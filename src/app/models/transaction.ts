export interface Transaction {
  id?: number; // Identifiant unique de la transaction (optionnel car il peut être généré par le serveur)
  montant: number; // Montant de la transaction
  date_transaction: string; // Date et heure de la transaction au format ISO 8601 (par exemple '2024-08-01T14:30:00Z')
  type: 'DEPOT' | 'RETRAIT' | 'TRANSFERT'; // Type de la transaction
  compte_id: number; // Identifiant du compte associé à la transaction
}
