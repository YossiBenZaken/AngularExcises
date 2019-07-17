import { Bank } from './bank.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private http: HttpClient) { }
  createAndStoreAccount(fullName:string,amount:number){
    const BankData: Bank = {fullName: fullName,amount: amount};
    this.http.post<{ fullname: string }>('https://bank-yossi.firebaseio.com/accounts.json',
      BankData
    ).subscribe(res => {
      console.log(res);
    });
  }
  fetchAccounts(){
    return this.http.get<{[key:string]: Bank}>('https://bank-yossi.firebaseio.com/accounts.json')
      .pipe(map(res => {
        const accountArray:Bank[] = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            accountArray.push({ ...res[key], id: key });
          }
        }
        return accountArray;
      }));
  }
  deleteAccounts(){
    return this.http.delete('https://bank-yossi.firebaseio.com/accounts.json');
  }
  depositToAccount(bank: Bank){
    return this.http.put<Bank>('https://bank-yossi.firebaseio.com/accounts/'+bank.id+'.json',bank);
  }
}
