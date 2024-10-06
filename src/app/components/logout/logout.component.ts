import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    this.authService.logout().subscribe(
      (response) => {
        console.log('Logged out successfully:', response);
        // Autres actions à effectuer après la déconnexion
        localStorage.removeItem('userId');
        localStorage.removeItem('userRole');
      
      },
      (error) => {
        console.error('Error logging out:', error);
        // Gestion des erreurs de déconnexion
      }
    );
    
      // Logique de déconnexion ici (par exemple, effacer les sessions, réinitialiser les états, etc.)
      // Après la déconnexion, redirigez vers la page de connexion
      this.router.navigate(['/login']);
    
  }
 
}
