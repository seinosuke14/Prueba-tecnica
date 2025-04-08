import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchersComponent } from './searchers/searchers.component';

export const routes: Routes = [
    {path: 'header',component: HeaderComponent},
    {path: 'searcher',component: SearchersComponent},
    
];
