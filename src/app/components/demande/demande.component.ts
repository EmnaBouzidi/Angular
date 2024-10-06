import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeCreditService } from '../../services/demande-credit.service'; // Assurez-vous d'importer le service
import { DemandeCredit } from '../../models/demande'; // Assurez-vous d'importer le modèle

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {
  
  demande: DemandeCredit = new DemandeCredit(); // Modèle pour stocker les données du formulaire
  formSubmitted: boolean = false; // Variable pour suivre l'état de soumission du formulaire
  formInvalid: boolean = false; // Variable pour suivre l'état de validation du formulaire

  constructor(private demandeCreditService: DemandeCreditService) { }

  ngOnInit(): void {
    // Initialisation ou chargement de données si nécessaire
  }

  submitDemande(form: NgForm): void {
    if (form.valid) { // Vérifiez si le formulaire est valide avant de le soumettre
      this.demandeCreditService.createDemande(this.demande).subscribe(
        (response) => {
          console.log('Demande de crédit créée avec succès', response);
          this.formSubmitted = true; // Indiquez que le formulaire a été soumis
          this.formInvalid = false; // Réinitialisez l'état de validation
          form.reset(); // Réinitialisez le formulaire après soumission
        },
        (error) => {
          console.error('Erreur lors de la création de la demande de crédit', error);
          this.formInvalid = true; // Indiquez que le formulaire est invalide
          this.formSubmitted = false; // Réinitialisez l'état de soumission
        }
      );
    } else {
      console.log('Le formulaire est invalide.');
      this.formInvalid = true; // Indiquez que le formulaire est invalide
      this.formSubmitted = false; // Réinitialisez l'état de soumission
    }
  }

}
