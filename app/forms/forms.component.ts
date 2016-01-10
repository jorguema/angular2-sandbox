import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import { FormsListComponent } from './forms-list.component';

@Component({
    templateUrl: 'app/forms/template/forms.html',
     directives: [RouterOutlet]
})

@RouteConfig([
    { path: '/', name: 'Forms', component: FormsListComponent, useAsDefault: true }
])

export class FormsComponent { }