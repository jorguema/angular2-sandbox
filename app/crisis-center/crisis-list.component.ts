import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {CrisisService} from './crisis.service';
import {Crisis} from './crisis';

@Component({
     templateUrl: 'app/crisis-center/template/crisis-list.html',
})

export class CrisisListComponent implements OnInit {
    crises: Crisis[];
    
    constructor(
        private _service: CrisisService,
        private _router: Router) { }
        
    ngOnInit() {
        this._service.getCrises().then(crises => this.crises = crises);
    }
    onSelect(crisis: Crisis) {
        this._router.navigate(['CrisisDetail', { id: crisis.id }]);
    }
}