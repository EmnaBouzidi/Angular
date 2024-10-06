import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  comptes: any[] = [
    { 
      numeroCompte: '123456789', 
      solde: 1000, 
      dateOuverture: '2002-01-28', 
      nom: 'BOUZIDI', 
      prenom: 'Emna', 
      agence: 'Manar 1', 
      actif: false, 
      typeCarte: 'Débit', // Nouveau champ
      numeroCarte: '1234 5678 9012 3456' // Nouveau champ
    },
    { 
      numeroCompte: '002596473', 
      solde: 1500, 
      dateOuverture: '2022-01-28', 
      nom: 'BOUZIDI', 
      prenom: 'Emna', 
      agence: 'Lac 2', 
      actif: true, 
      typeCarte: 'Crédit', // Nouveau champ
      numeroCarte: '6543 2109 8765 4321' // Nouveau champ
    }
  ];

  errorMessage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Logique d'initialisation si nécessaire
  }

  supprimerCompte(numeroCompte: string): void {
    if (confirm('Êtes-vous sûr de vouloir désactiver ce compte ?')) {
      this.comptes = this.comptes.map(compte => 
        compte.numeroCompte === numeroCompte ? { ...compte, actif: false } : compte
      );
    }
  }

  activerCompte(numeroCompte: string): void {
    if (confirm('Êtes-vous sûr de vouloir activer ce compte ?')) {
      this.comptes = this.comptes.map(compte => 
        compte.numeroCompte === numeroCompte ? { ...compte, actif: true } : compte
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
