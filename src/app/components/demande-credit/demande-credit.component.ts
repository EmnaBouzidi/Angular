// src/app/components/demande-credit/demande-credit.component.ts
import { Component, OnInit } from '@angular/core';
import { DemandeCreditService } from '../../services/demande-credit.service';
import { NotificationService } from '../../services/notification.service';
import { DemandeCredit } from '../../models/demande-credit';
import { Router } from '@angular/router';
import { Notification } from '../../models/notification.model'; // Importer Notification

@Component({
  selector: 'app-demande-credit',
  templateUrl: './demande-credit.component.html',
  styleUrls: ['./demande-credit.component.scss']
})
export class DemandeCreditComponent implements OnInit {
  demandes: DemandeCredit[] = [];

  constructor(
    private demandeCreditService: DemandeCreditService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  loadDemandes(): void {
    this.demandeCreditService.getDemandes().subscribe(
      (data: DemandeCredit[]) => {
        this.demandes = data;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des demandes', error);
      }
    );
  }

  acceptDemande(id?: number): void {
    if (id !== undefined && confirm('Êtes-vous sûr de vouloir accepter cette demande ?')) {
      this.demandeCreditService.acceptDemande(id).subscribe(
        () => {
          this.sendNotification(id, 'acceptée');
          this.demandes = this.demandes.filter(d => d.id !== id);
          console.log('Demande acceptée avec succès');
        },
        (error: any) => {
          console.error('Erreur lors de l\'acceptation de la demande', error);
        }
      );
    }
  }

  refuseDemande(id?: number): void {
    if (id !== undefined && confirm('Êtes-vous sûr de vouloir refuser cette demande ?')) {
      this.demandeCreditService.refuseDemande(id).subscribe(
        () => {
          this.sendNotification(id, 'refusée');
          this.demandes = this.demandes.filter(d => d.id !== id);
          console.log('Demande refusée avec succès');
        },
        (error: any) => {
          console.error('Erreur lors du refus de la demande', error);
        }
      );
    }
  }

  sendNotification(demandeId: number, status: string): void {
    const demande = this.demandes.find(d => d.id === demandeId);
    
    if (demande) {
      if (demande.utilisateur) {
        const notification: Notification = {
          id: 0,
          date: new Date(),
          message: `Votre demande de crédit #${demandeId} a été ${status}.`,
          isRead: false,
          type: status === 'acceptée' ? 'success' : 'error',
          utilisateur: demande.utilisateur
        };

        this.notificationService.createNotification(notification).subscribe({
          next: (createdNotification) => {
            console.log('Notification envoyée avec succès', createdNotification);
          },
          error: (err) => console.error('Erreur lors de l\'envoi de la notification:', err)
        });
      } else {
        console.error('Utilisateur non défini pour la demande de crédit', demandeId);
      }
    } else {
      console.error('Demande de crédit non trouvée pour l\'ID', demandeId);
    }
  }

  goToAdminDashboard(): void {
    this.router.navigate(['/admin-dashboard']);
  }
}
