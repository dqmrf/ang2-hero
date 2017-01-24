import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router }        from '@angular/router';
import { AppConfig }     from '../app.config'

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = AppConfig.API_ENDPOINT;

  constructor(public router: Router, public http: Http) {}

  login(user) {
    let body = JSON.stringify(user);
    this.http.post(`${this.apiUrl}/sessions`, body, { headers: this.headers }).subscribe(
      response => {
        localStorage.setItem('token', response.json().token);
        this.router.navigate(['Dashboard']);
      },
      error => {
        alert(error.text());
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['Login']);
  }

  registration(user) {
    let body = JSON.stringify({user: user});
    this.http.post(`${this.apiUrl}/users`, body, { headers: this.headers }).subscribe(
      response => {
        localStorage.setItem('token', response.json().token);
        this.router.navigate(['Tasks']);
      },
      error => {
        alert(error.text());
      }
    );
  }

  isCurrentUser() {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['Login']);
      return false;
    }
    return true;
  }
}