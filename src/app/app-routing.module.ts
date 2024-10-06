import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { CompteComponent } from './components/compte/compte.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { DemandeComponent } from './components/demande/demande.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListeUtilisateurComponent } from './components/liste-utilisateur/liste-utilisateur.component';
import { DemandeCreditComponent } from './components/demande-credit/demande-credit.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [
  // Routes pour les tableaux de bord
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'notifications', component: NotificationComponent },

  // Routes pour les composants d'authentification
  { path: 'login', component: LoginComponent },
  { path: 'login/register', component: SignUpComponent },
  { path: 'logout', component: LogoutComponent },

  // Routes pour les composants d'application
  { path: 'compte', component: CompteComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'demande', component: DemandeComponent },
  { path: 'historique', component: HistoriqueComponent },


  // Routes spécifiques pour les listes et demandes de crédit
  { path: 'liste-utilisateurs', component: ListeUtilisateurComponent },
  { path: 'demande-credit', component: DemandeCreditComponent },

  // Redirections
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
