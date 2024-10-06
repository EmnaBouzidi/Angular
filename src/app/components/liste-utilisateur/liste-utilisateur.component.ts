import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {
  utilisateurs: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUtilisateurs().subscribe(
      (data: User[]) => {
        this.utilisateurs = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs', error);
      }
    );
  }

  editUser(id: number): void {
    // Redirection vers un composant d'édition utilisateur
    this.router.navigate([`/edit-user/${id}`]);
  }

  deleteUser(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUtilisateur(id).subscribe(
        () => {
          // Retirer l'utilisateur supprimé de la liste
          this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la suppression de l\'utilisateur', error);
        }
      );
    }
  }

  goBack(): void {
    // Redirection vers la page précédente ou une autre page
    this.router.navigate(['/admin-dashboard']);
  }
}
