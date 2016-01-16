import {Component} from 'angular2/core';
import {HighlightDirective} from './directives-attribute.directive';
import {HeavyLoaderComponent} from './structural/heavy-loader.component';
import {UnlessDirective} from './structural/unless.directive';

@Component({
    templateUrl: 'app/directives/template/directives.html',
    directives: [HighlightDirective, HeavyLoaderComponent, UnlessDirective]
})

export class DirectivesComponent {
    heroes = ['Mr. Nice', 'Narco', 'Bombasto'];
    hero = this.heroes[0];
    condition = true;
    isVisible = true;
    logs: string[] = [];
    status = 'ready';
}