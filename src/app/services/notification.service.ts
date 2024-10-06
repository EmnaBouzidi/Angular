import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl = 'http://votre-api-url.com/api/notifications'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir toutes les notifications
  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}`);
  }

  // Méthode pour marquer une notification comme lue
  markAsRead(notificationId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${notificationId}/mark-as-read`, {});
  }

  // Méthode pour créer une nouvelle notification
  createNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(`${this.apiUrl}`, notification);
  }
}
