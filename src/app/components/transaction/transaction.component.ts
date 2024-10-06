import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  newTransaction: Transaction = {
    id: 0,
    montant: 0,
    date_transaction: new Date().toISOString(),
    type: 'DEPOT',
    compte_id: 0
  };

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe({
      next: (data) => this.transactions = data,
      error: (error) => {
        console.error('Error fetching transactions', error);
        // Optionnel : Afficher une notification à l'utilisateur
      }
    });
  }

  onSubmit(): void {
    if (this.validateTransaction(this.newTransaction)) {
      this.newTransaction.date_transaction = new Date(this.newTransaction.date_transaction).toISOString();

      const transactionToSend: Transaction = {
        montant: this.newTransaction.montant,
        date_transaction: this.newTransaction.date_transaction,
        type: this.newTransaction.type,
        compte_id: this.newTransaction.compte_id
      };

      console.log('Transaction to send:', transactionToSend);

      this.transactionService.createTransaction(transactionToSend).subscribe({
        next: (response) => {
          console.log('Transaction created successfully', response);
          this.resetForm();
        },
        error: (err) => {
          console.error('Error creating transaction', err);
          // Optionnel : Afficher une notification à l'utilisateur
          console.log('Error details:', err.error);
        }
      });
    } else {
      console.error('Invalid transaction data');
      // Optionnel : Afficher une notification à l'utilisateur concernant les données invalides
    }
  }

  validateTransaction(transaction: Transaction): boolean {
    // Implémentez la logique de validation ici
    return transaction.montant > 0 && transaction.compte_id > 0;
  }

  resetForm(): void {
    this.newTransaction = {
      id: 0,
      montant: 0,
      date_transaction: new Date().toISOString(),
      type: 'DEPOT',
      compte_id: 0
    };
  }

  onRetour(): void {
    this.router.navigate(['/dashboard']);
  }
}
