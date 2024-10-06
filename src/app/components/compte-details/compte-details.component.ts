// src/app/components/compte-details/compte-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompteService } from '../../services/compte.service';
import { Compte } from '../../models/compte';

@Component({
  selector: 'app-compte-details',
  templateUrl: './compte-details.component.html',
  styleUrls: ['./compte-details.component.scss']
})
export class CompteDetailsComponent implements OnInit {

  compte: Compte | null = null;
  errorMessage: string = '';

  constructor(
    private compteService: CompteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadCompteDetails();
  }

  loadCompteDetails(): void {
    const compteId = this.route.snapshot.paramMap.get('id') || '';
    this.compteService.getCompteById(compteId).subscribe({
      next: (data: Compte) => {
        this.compte = data;
        console.log('Compte chargé:', this.compte);
      },
      error: (error: any) => { // Spécifiez le type de paramètre pour l'erreur
        console.error('Erreur lors du chargement du compte:', error);
        this.errorMessage = error.message || 'Erreur inconnue lors du chargement du compte';
      }
    });
  }
}
