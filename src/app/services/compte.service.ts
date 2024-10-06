// src/app/services/compte.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private apiUrl = 'http://your-api-url.com/comptes'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir tous les comptes d'un utilisateur par ID
  getComptesByUserId(userId: string): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.apiUrl}?userId=${userId}`);
  }

  // Méthode pour obtenir un compte spécifique par ID
  getCompteById(compteId: string): Observable<Compte> {
    return this.http.get<Compte>(`${this.apiUrl}/${compteId}`);
  }

  // Méthode pour supprimer un compte par numéro de compte
  supprimerCompte(numeroCompte: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${numeroCompte}`);
  }
}
