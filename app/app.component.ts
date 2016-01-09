import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';

import {DialogService}         from './dialog.service';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template/structure.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DialogService, HeroService]
})

@RouteConfig([
    { // Crisis Center child route
        path: '/crisis-center/...', //That means this is an incomplete route (AKA a non-terminal route).
        name: 'CrisisCenter',
        component: CrisisCenterComponent,
        useAsDefault: true
    },
    { path: '/heroes', name: 'Heroes', component: HeroListComponent },
    { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent }
])

export class AppComponent { }