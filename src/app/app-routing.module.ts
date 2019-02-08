import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },

  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'sigin', loadChildren: './pages/sigin/sigin.module#SiginPageModule' },  { path: 'queue-list', loadChildren: './pages/queue-list/queue-list.module#QueueListPageModule' },
  { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
  { path: 'history-detail', loadChildren: './pages/history-detail/history-detail.module#HistoryDetailPageModule' }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
