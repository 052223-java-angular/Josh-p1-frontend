import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { WatchhistoryComponent } from './pages/watchhistory/watchhistory.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'watchhistory', component: WatchhistoryComponent},
  {path: 'review', component: ReviewComponent},
  {path: '**', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
