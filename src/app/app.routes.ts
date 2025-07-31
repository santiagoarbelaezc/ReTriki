import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomComponent } from './pages/custom/custom.component';
import { RetrikiComponent } from './pages/retriki/retriki.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'retriki', component: RetrikiComponent },
    { path: 'custom', component: CustomComponent },
    
    
];
