import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import Routes
import { AppRoutingModule } from './app-routing.module'; // Assuming this module handles routing separately
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CompteComponent } from './components/compte/compte.component';
import { CompteDetailsComponent } from './components/compte-details/compte-details.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { DemandeComponent } from './components/demande/demande.component';
import { CurrencyPipe } from '@angular/common';
import { HistoriqueComponent } from './components/historique/historique.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListeUtilisateurComponent } from './components/liste-utilisateur/liste-utilisateur.component';
import { DemandeCreditComponent } from './components/demande-credit/demande-credit.component';
import { NotificationComponent } from './components/notification/notification.component';

// Define your routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  // add other routes here
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SignUpComponent,
    LogoutComponent,
    CompteComponent,
    CompteDetailsComponent,
    TransactionComponent,
    DemandeComponent,
    HistoriqueComponent,
    AdminDashboardComponent,
    ListeUtilisateurComponent,
    DemandeCreditComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Provide your routes here
  ],
  providers: [
    provideHttpClient(withFetch()),
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
