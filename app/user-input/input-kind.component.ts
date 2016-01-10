import {Component, OnInit} from 'angular2/core';

@Component({
    templateUrl: 'app/user-input/template/input-kind.html'
})

export class InputKindComponent {
    clickMessage = '';
    valuesKeyUp = '';
    valuesFromTemplate = '';

    onClickMe() {
        this.clickMessage = "You are my hero!";
    }
    onKeyUp(event: any) {
        this.valuesKeyUp += event.target.value + ' | ';
    }
    /*
     // IF EVENT DIFFERENT ANY KIND: with strong typing 
        onKeyUp(event:KeyboardEvent) {
            this.valuesKeyUp += (<HTMLInputElement>event.target).value + ' | ';
        }
   */

    onKeyFromLocalTemplate(value: string) {
        this.valuesFromTemplate += value + ' | ';
    }
}