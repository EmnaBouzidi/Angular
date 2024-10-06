import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private logoutUrl = 'http://localhost:8080/api/auth/logout';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        console.log('Login response before check:', response);

        // Vérifiez si userId et userRole sont présents
        if (response && response.userId) {
          localStorage.setItem('userId', response.userId.toString());
          localStorage.setItem('userRole', response.role);
          localStorage.setItem('userEmail', email); // Stocker l'email si nécessaire
          console.log("User ID set:", response.userId);
        } else {
          console.log("User ID not found in response:", response);
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }

  logout(): Observable<string> {
    return this.http.post<string>(this.logoutUrl, {}, { responseType: 'text' as 'json' }).pipe(
      tap(() => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userEmail'); // Supprimer l'email lors de la déconnexion
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.error.message || 'Unknown error'}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  // Méthode pour récupérer le rôle de l'utilisateur
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  // Méthode pour récupérer l'email de l'utilisateur
  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }

  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return !!localStorage.getItem('userId');
  }

  // Méthode pour rediriger en fonction du rôle et de l'email
  checkRoleAndRedirect(): void {
    const userRole = this.getUserRole();
    const userEmail = this.getUserEmail();
    
    if (userEmail === 'test@gmail.com') {
      this.router.navigate(['/admin-dashboard']);
    } else if (userRole === 'ROLE_ADMIN') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
