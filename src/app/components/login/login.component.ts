import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Assurez-vous que FormsModule est importé
import { Router, RouterModule } from '@angular/router'; // Importez Router et RouterModule
import { CommonModule } from '@angular/common'; // Importez CommonModule pour les directives de base
import { AuthService } from '../../services/auth.service'; // Importez AuthService ici

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule] // Incluez CommonModule pour les directives comme *ngIf
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (this.authService.isAuthenticated()) {
          this.authService.checkRoleAndRedirect();
        }
      },
      error => {
        this.errorMessage = 'Erreur de connexion. Veuillez vérifier vos informations.';
      }
    );
  }
}
