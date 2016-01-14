import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import { LifecycleListComponent } from './lifecycle-list.component';

@Component({
    templateUrl: 'app/lifecycle/template/lifecycle.html',
    directives: [RouterOutlet]
})

@RouteConfig([
    { path: '/', name: 'Lifecycle', component: LifecycleListComponent, useAsDefault: true }
])


export class LifecycleComponent { }