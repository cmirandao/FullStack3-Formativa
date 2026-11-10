import { Routes } from '@angular/router';
import { LibroListComponent } from './components/libro-list.component/libro-list.component';


export const routes: Routes = [
  { path: '', component: LibroListComponent },
  { path: '**', redirectTo: '' }
];