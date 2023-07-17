import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(user:any) {
    const q: any[] = JSON.parse(localStorage.getItem("onUser")!);
    if (q === null) {
        const users = [];
        users.push(user);
        return localStorage.setItem('onUser',JSON.stringify(users));
    }
    q.push(user);
    return localStorage.setItem('onUser',JSON.stringify(q));
  }

  login(user:any) {
    const q: any[] = JSON.parse(localStorage.getItem("onUser")!);
    if (q === null) {
        return false;
    }
    const userSelected = q.find(x => x.email === user.email);

    if (!userSelected) {
        return 'Invalid';
    }
    console.log(userSelected);
    if (userSelected.password !== user.password) {
        return 'wrong'
    }

    return true;
  }
}
