// src/app/models/notification.model.ts
import { User } from './user'; // Assurez-vous que le chemin est correct

export interface Notification {
  id?: number;
  date: Date;
  message: string;
  isRead: boolean;
  type: 'success' | 'error'; // Assurez-vous que ce type correspond aux valeurs possibles
  utilisateur: User; // Utilisateur complet
}
