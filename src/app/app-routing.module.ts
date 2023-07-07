import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",component : HomeComponent  , canActivate : [authGuard]  },
  {path:"movie/:id",component : MovieComponent},
  {path:"about",component : AboutComponent },
  {path:"contact",component : ContactComponent },
  {path:"login",component : LoginComponent },
  {path:"**",redirectTo : '/' , pathMatch : 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
