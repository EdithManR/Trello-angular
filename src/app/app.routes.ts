import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { UserDetail } from './pages/user-detail/user-detail';

export const routes: Routes = [
  { path: '', component: Login},
  { path: 'detail-user', component: UserDetail},
];
