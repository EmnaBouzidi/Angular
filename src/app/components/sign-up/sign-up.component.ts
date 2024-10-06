import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  user: User = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'client', // Default role
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.isFormValid()) {
      this.userService.register(this.user).subscribe(
        response => {
          console.log('User registered successfully:', response);
          console.log("hey");
          console.log(this.user);
          this.resetForm();
          // Optionally, you can navigate to another page or display a success message
        },
        error => {
          console.error('Registration failed:', error);
          // Handle registration error, e.g., display an error message to the user
        }
      );
    }
  }

  isFormValid(): boolean {
    // Add form validation logic as needed
    return true; // Implement your validation logic
  }

  resetForm() {
    this.user = {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'client', // Réinitialisation au rôle par défaut
    };
  }

  onCancel() {
    // Logique d'annulation
    this.router.navigate(['/login']); // Redirigez vers la page d'accueil ou une autre page après l'annulation
  }
}
