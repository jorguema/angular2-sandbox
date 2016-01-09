import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisListComponent}   from './crisis-list.component';
import {HeroListComponent}     from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template/structure.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})

@RouteConfig([
    { path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent },
    { path: '/heroes', name: 'Heroes', component: HeroListComponent },
    {path:'/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent}
])

export class AppComponent {}