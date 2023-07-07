import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CardFilmComponent } from './components/card-film/card-film.component';
import { SlideFilmComponent } from './components/slide-film/slide-film.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ResumePipe } from './pipes/resume.pipe';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    ContactComponent,
    AboutComponent,
    CardFilmComponent,
    SlideFilmComponent,
    NavbarComponent,
    ResumePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS ,
     useClass : TokenInterceptorInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
