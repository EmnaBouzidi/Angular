import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DemandeCredit } from '../models/demande-credit';

@Injectable({
  providedIn: 'root'
})
export class DemandeCreditService {
  private apiUrl = 'http://localhost:8080/api/demandes-credit'; // URL de votre backend

  constructor(private http: HttpClient) { }

  // Récupérer toutes les demandes de crédit
  getDemandes(): Observable<DemandeCredit[]> {
    return this.http.get<DemandeCredit[]>(this.apiUrl);
  }

  // Récupérer une demande de crédit par ID
  getDemandeById(id: number): Observable<DemandeCredit> {
    return this.http.get<DemandeCredit>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle demande de crédit
  createDemande(demande: DemandeCredit): Observable<DemandeCredit> {
    return this.http.post<DemandeCredit>(this.apiUrl, demande);
  }

  // Mettre à jour une demande de crédit existante
  updateDemande(id: number, demande: DemandeCredit): Observable<DemandeCredit> {
    return this.http.put<DemandeCredit>(`${this.apiUrl}/${id}`, demande);
  }

  // Créer ou mettre à jour une demande de crédit (fonction combinée)
  createOrUpdateDemande(demande: DemandeCredit): Observable<DemandeCredit> {
    if (demande.id) {
      return this.http.put<DemandeCredit>(`${this.apiUrl}/${demande.id}`, demande);
    } else {
      return this.http.post<DemandeCredit>(this.apiUrl, demande);
    }
  }

  // Supprimer une demande de crédit par ID
  deleteDemande(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Accepter une demande de crédit
  acceptDemande(id: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}`, { status: 'accepted' });
  }

  // Refuser une demande de crédit
  refuseDemande(id: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}`, { status: 'rejected' });
  }
}
