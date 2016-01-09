import {Component, OnInit} from 'angular2/core';
import {Router}              from 'angular2/router';
import {HeroService}   from './hero.service';
import {Hero} from './hero';

@Component({
    templateUrl: 'app/heros/template/hero-list.html'
})

export class HeroListComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;
    constructor(
        private _router: Router,
        private _heroService: HeroService
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    onSelect(hero: Hero) {
        this._router.navigate(['HeroDetail', { id: hero.id }]);
    }
}