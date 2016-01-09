import {Component, OnInit}  from 'angular2/core';
import {HeroService}   from './hero.service';
import {Hero} from './hero';
import {RouteParams, Router} from 'angular2/router';

@Component({
    templateUrl: 'app/template/hero-detail.html'
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _service: HeroService) { }
        
    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getHero(id).then(hero => this.hero = hero);
    }
    
    gotoHeroes() {
        this._router.navigate(['Heroes']);
    }
}