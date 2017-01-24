import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs'
import { Hero }           from './hero';
import { AppConfig }      from '../app.config'

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`${AppConfig.API_ENDPOINT}/persons/?name=${term}`)
      .map((r: Response) => r.json() as Hero[]);
  }
}