import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroComponent} from './heros/hero.component';
import {UserInputComponent} from './user-input/user-input.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';

import {DialogService}         from './dialog.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/structure.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DialogService]//, HeroService]
})

@RouteConfig([
    { // Crisis Center child route
        path: '/crisis-center/...', //That means this is an incomplete route (AKA a non-terminal route).
        name: 'CrisisCenter',
        component: CrisisCenterComponent,
        useAsDefault: true
    },
    {
        path: '/heroes/...', //That means this is an incomplete route (AKA a non-terminal route).
        name: 'Heroes',
        component: HeroComponent
    },
    {
        path: '/user-input/...',
        name: 'UserInput',
        component: UserInputComponent
    },
    {
        path: '/forms/...',
        name: 'Forms',
        component: FormsComponent
    },    
    {
        path: '/pipes/...',
        name: 'Pipes',
        component: PipesComponent
    },
    {
        path: '/lifecycle/...',
        name: 'Lifecycle',
        component: LifecycleComponent
    },
    {
        path: '/directives',
        name: 'Directives',
        component: DirectivesComponent
    },
    {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] }
])

export class AppComponent { }