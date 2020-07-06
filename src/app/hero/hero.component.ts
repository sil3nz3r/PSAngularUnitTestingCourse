import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // 4. Shallow Integration Tests
  @Input() hero: Hero;
  @Output() delete = new EventEmitter();

  onDeleteClick($event): void {
    $event.stopPropagation();
    this.delete.next();
  }

  // 2-3. Isolated Tests
  // heroes: Hero[];

  // constructor(private heroService: HeroService) { }

  // ngOnInit() {
  //   this.getHeroes();
  // }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }

  // add(name: string): void {
  //   name = name.trim();
  //   var strength = 11
  //   if (!name) {
  //     return;
  //   }
  //   else {
  //     this.heroService.addHero({ name, strength } as Hero)
  //       .subscribe(hero => {
  //         this.heroes.push(hero);
  //       })
  //   }
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }
}
