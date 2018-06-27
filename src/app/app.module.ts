import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,     
    ContentComponent,
    FooterComponent,
    HomeComponent,
    

    PageNotFoundComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
