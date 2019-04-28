import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.class';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './h.html',
  styleUrls: ['./h.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;
  
  heroes: Hero[];

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
  }
  
//   hero.id = 2;

   constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
        add(name: string): void {
            name = name.trim();
            if (!name) { return; }
            this.heroService.addHero({ name } as Hero)
            .subscribe(hero => {
            this.heroes.push(hero);
            });
}


delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}

}

