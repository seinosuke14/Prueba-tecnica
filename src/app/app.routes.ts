import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchersComponent } from './searchers/searchers.component';
import { DescriptionsComponent } from './pages/descriptions/descriptions.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'header',component: HeaderComponent},
    {path: 'searcher',component: SearchersComponent},
    {path: 'descriptions/:id',component: DescriptionsComponent },
    {path: 'home', component:HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    
    
];
