// src/app/components/historique/historique.component.ts

import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent {

  transactions = [
    { id: 1, date_transaction: '2024-07-06 00:00:00', montant: 1800, type: 'DEPOT', compte_id: 51 },
    { id: 2, date_transaction: '2024-07-07 00:00:00', montant: 750, type: 'RETRAIT', compte_id: 51 },
    { id: 3, date_transaction: '2024-07-08 00:00:00', montant: 3000, type: 'DEPOT', compte_id: 51 },
    { id: 4, date_transaction: '2024-07-09 00:00:00', montant: 1000, type: 'RETRAIT', compte_id: 51 },
    { id: 5, date_transaction: '2024-07-10 00:00:00', montant: 2200, type: 'DEPOT', compte_id: 51 }
  ];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
  
  editTransaction(id: number) {
    console.log('Éditer la transaction avec ID:', id);
    // Implémentez la logique pour éditer la transaction
  }

  copyTransaction(id: number) {
    console.log('Copier la transaction avec ID:', id);
    // Implémentez la logique pour copier la transaction
  }

  deleteTransaction(id: number) {
    console.log('Supprimer la transaction avec ID:', id);
    // Implémentez la logique pour supprimer la transaction
  }
  downloadHistorique() {
    // Logique pour télécharger l'historique
    console.log('Télécharger l\'historique');
  }

}
