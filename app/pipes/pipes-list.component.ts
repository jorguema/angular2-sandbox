import {Component, OnInit} from 'angular2/core';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {FetchJsonPipe} from './fetch-json.pipe';

@Component({
    templateUrl: 'app/pipes/template/pipe-list.html',
    pipes: [ExponentialStrengthPipe, FetchJsonPipe]
})

export class PipeListComponent {
    birthday = new Date(1988, 3, 15);

    toggle = true; // start with true == shortDate
    get format() { return this.toggle ? 'shortDate' : 'fullDate' }
    toggleFormat() { this.toggle = !this.toggle; }

    power = 5;
    factor = 1;

    delayedMessage: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => resolve('You are my Hero!'), 500);
    });
}