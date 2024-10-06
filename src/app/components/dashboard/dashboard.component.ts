import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  clientName: string = '';
  accountNumber: string = '';
  balance: number = 0;
  transactions: any[] = [];

  constructor(
    private authService: AuthService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAccountInfo();
    this.loadTransactions();
  }

  loadAccountInfo(): void {
    // Utilisation des méthodes du service pour obtenir les informations du compte
    this.clientName = this.accountService.getClientName();
    this.accountNumber = this.accountService.getAccountNumber();
    this.balance = this.accountService.getBalance();
  }

  loadTransactions(): void {
    // Utilisation de la méthode du service pour obtenir les transactions
    this.transactions = this.accountService.getTransactions();
  }

  openNotification(): void {
    this.router.navigate(['/notifications']); // Navigation vers la page des notifications
  }

  logout(): void {
    this.authService.logout();
    console.log('Déconnexion réussie');
    this.router.navigate(['/login']);
  }
}
