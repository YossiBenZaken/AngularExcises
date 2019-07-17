import { BankService } from './../bank.service';
import { Bank } from './../bank.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  loadedAccount:Bank[] = [];
  isFetching = false;
  constructor(private service:BankService) { }

  ngOnInit() {
    this.isFetching = true;
    this.service.fetchAccounts().subscribe(account=>{
      this.isFetching = false;
      this.loadedAccount = account;
    });
  }
  onCreateAccount(BankData: Bank) {
    this.service.createAndStoreAccount(BankData.fullName,BankData.amount);
    this.onFetchAccounts();
  }
  onFetchAccounts() {
    this.isFetching = true;
    this.service.fetchAccounts().subscribe(account=>{
      this.isFetching = false;
      this.loadedAccount = account;
    });
  }
  onClearAccounts(){
    this.service.deleteAccounts().subscribe(() =>{
      this.loadedAccount =[];
    })
  }
  Deposit(money:number,index:number){
    let i=0;
    while(i<money--)
      this.loadedAccount[index].amount++;
    this.service.ChangeMoneytoPerson(this.loadedAccount[index]).subscribe(()=>{
    });
  }
  Withdraw(money:number,index:number){
    let i=0;
    while(i<money--)
      this.loadedAccount[index].amount--;
    this.service.ChangeMoneytoPerson(this.loadedAccount[index]).subscribe(()=>{
    });
  }
}
