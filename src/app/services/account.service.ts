import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getClientName(): string {
    return 'John Doe'; // Remplacez par la logique réelle de récupération des données
  }

  getAccountNumber(): string {
    return '0123456789'; // Remplacez par la logique réelle de récupération des données
  }

  getBalance(): number {
    return 1500.75; // Remplacez par la logique réelle de récupération des données
  }

  getTransactions(): any[] {
    return [
      { date: new Date(), description: 'Dépôt', amount: 500 },
      { date: new Date(), description: 'Retrait', amount: -200 },
      // Ajoutez d'autres transactions réelles
    ];
  }
}
