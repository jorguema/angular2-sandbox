import {Component} from 'angular2/core';
import {HighlightDirective} from './directives-attribute.directive';

@Component({
    templateUrl: 'app/directives/template/directives.html',
     directives: [HighlightDirective]
})

export class DirectivesComponent { }