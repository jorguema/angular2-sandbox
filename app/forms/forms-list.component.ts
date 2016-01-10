import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Hero }    from '../heros/hero';

@Component({
    templateUrl: 'app/forms/template/forms-list.html'
})

export class FormsListComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }  
}
