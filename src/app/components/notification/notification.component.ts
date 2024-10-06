import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.notificationService.getNotifications().subscribe(
      (data: Notification[]) => {
        this.notifications = data;
      },
      (error: any) => {
        this.errorMessage = 'Erreur lors du chargement des notifications.';
        console.error('Erreur lors du chargement des notifications:', error);
      }
    );
  }

  markAsRead(notificationId: number): void {
    this.notificationService.markAsRead(notificationId).subscribe(
      () => {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification) {
          notification.isRead = true;
          this.successMessage = 'Notification marquée comme lue.';
        }
      },
      (error: any) => {
        this.errorMessage = 'Erreur lors du marquage de la notification comme lue.';
        console.error('Erreur lors du marquage de la notification:', error);
      }
    );
  }

  // Stubs pour éviter les erreurs
  acceptRequest(requestId: number): void {
    console.log('Accepter la demande', requestId);
  }

  rejectRequest(requestId: number): void {
    console.log('Refuser la demande', requestId);
  }
}
