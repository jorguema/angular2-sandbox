import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import { InputKindComponent } from './input-kind.component';

@Component({
    templateUrl: 'app/user-input/template/user-input.html',
     directives: [RouterOutlet]
})

@RouteConfig([
    { path: '/', name: 'UserInput', component: InputKindComponent, useAsDefault: true }
])

export class UserInputComponent { }