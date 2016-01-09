import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CrisisListComponent}   from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisService}         from './crisis.service';

@Component({
    templateUrl: 'app/crisis-center/template/crisis-center.html',
    directives: [RouterOutlet],
    providers: [CrisisService]
})

@RouteConfig([
    { path: '/', name: 'CrisisCenter', component: CrisisListComponent, useAsDefault: true }, // root of child component
    { path: '/:id', name: 'CrisisDetail', component: CrisisDetailComponent }
])

export class CrisisCenterComponent { }