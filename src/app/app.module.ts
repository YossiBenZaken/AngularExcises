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
import { BankDepositComponent } from './Bank/bank-deposit/bank-deposit.component';
import { BankWithdrawComponent } from './Bank/bank-withdraw/bank-withdraw.component'; 
import { HttpClientModule } from '@angular/common/http';
import { BankComponent } from './Bank/bank/bank.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    AuthorsComponent,
    FavoriteComponent,
    BankDepositComponent,
    BankWithdrawComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
