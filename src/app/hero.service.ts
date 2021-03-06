import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {Hero} from './heroes/hero';
import {HEROES} from './mock-heros';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }



  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  
}