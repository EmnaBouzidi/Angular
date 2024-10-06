// src/app/models/user.ts
export class User {
  id?: number; // Identifiant unique de l'utilisateur
  nom?: string; // Nom de l'utilisateur
  prenom?: string; // Prénom de l'utilisateur
  email?: string; // Adresse email de l'utilisateur
  password?: string; // Mot de passe de l'utilisateur
  confirmPassword?: string; // Champ optionnel pour la confirmation du mot de passe
  role?: string; // Rôle de l'utilisateur (par exemple, 'admin' ou 'client')
  dateDeNaissance?: Date; // Date de naissance de l'utilisateur

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
