import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8080/api/transactions';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getTransactionsByUser(userId: number): Observable<Transaction[]> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<Transaction[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    const formattedTransaction: Transaction = {
      ...transaction,
      date_transaction: this.formatDate(transaction.date_transaction)
    };
    
    return this.http.post<Transaction>(this.apiUrl, formattedTransaction, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private formatDate(date: string): string {
    return new Date(date).toISOString();
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    // Optionnel: Utiliser une bibliothèque de notifications pour afficher les erreurs à l'utilisateur
    return throwError(() => new Error(errorMessage));
  }
}
