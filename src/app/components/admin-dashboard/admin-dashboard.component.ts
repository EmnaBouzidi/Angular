import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importer Router pour la redirection
import { AuthService } from '../../services/auth.service'; // Importer AuthService

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout(); // Appel à la méthode logout du service AuthService
    this.router.navigate(['/login']); // Redirection vers la page de connexion après la déconnexion
  }
}
