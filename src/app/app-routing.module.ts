import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  // { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },

  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'sigin', loadChildren: './pages/sigin/sigin.module#SiginPageModule' },

  { path: 'queue', loadChildren: './pages/queue/queue.module#QueuePageModule' },  { path: 'alert-confirm', loadChildren: './modals/alert-confirm/alert-confirm.module#AlertConfirmPageModule' }




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
