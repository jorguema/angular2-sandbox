import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import { PipeListComponent } from './pipes-list.component';

@Component({
    templateUrl: 'app/pipes/template/pipe.html',
    directives: [RouterOutlet]
})

@RouteConfig([
    { path: '/', name: 'Pipes', component: PipeListComponent, useAsDefault: true }
])


export class PipesComponent { }