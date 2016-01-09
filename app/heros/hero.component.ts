import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {HeroListComponent}     from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    templateUrl: 'app/heros/template/hero-center.html',
    directives: [RouterOutlet],
    providers: [HeroService]
})

@RouteConfig([
    { path: '/', name: 'Heroes', component: HeroListComponent, useAsDefault: true }, // root of child component 
    { path: '/:id', name: 'HeroDetail', component: HeroDetailComponent }
])

export class HeroComponent { }