import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import {MatButtonModule} from '@angular/material/button'; 
@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    AuthorsComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
