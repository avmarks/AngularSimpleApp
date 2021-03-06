import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  constructor (private heroService: HeroService){}
  heroes = Hero[1];

  getHeroes():void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  
  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

 

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
