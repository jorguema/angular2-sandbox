import {Component, OnChanges, SimpleChange,
OnInit,
// DoCheck,  // not demonstrated
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy} from 'angular2/core';

import {LoggerService} from '../logger.service';

let nextId = 1;

@Component({
    templateUrl: 'app/lifecycle/template/lifecycle-list.html'
})

export class LifecycleListComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {

    private _afterContentCheckedCounter = 1;
    private _afterViewCheckedCounter = 1;
    private _id = nextId++;
    private _logger: LoggerService;
    private _onChangesCounter = 1;
    private _verb = 'initialized';

    hasChild = false;
    hookLog: string[];
    heroName = 'Windstorm';


    constructor(private _loggerService: LoggerService) {
        this._logger = _loggerService;
        this.hookLog = this._logger.logs;
    }
                 
    // only called if there is an @input variable set by parent.
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        let changesMsgs: string[] = []
        for (let propName in changes) {
            if (propName === 'name') {
                let name = changes['name'].currentValue;
                changesMsgs.push(`name ${this._verb} to "${name}"`);
            } else {
                changesMsgs.push(propName + ' ' + this._verb);
            }
        }
        this._logIt(`onChanges (${this._onChangesCounter++}): ${changesMsgs.join('; ')}`);
        this._verb = 'changed'; // next time it will be a change
    }

    ngOnInit() {
        this._logIt(`onInit`);
    }

    ngAfterContentInit() {
        this._logIt(`afterContentInit`);
    }

    // Called after every change detection check
    // of the component (directive) CONTENT
    // Beware! Called frequently!
    ngAfterContentChecked() {
        let counter = this._afterContentCheckedCounter++;
        let msg = `afterContentChecked (${counter})`;
        this._logIt(msg);
    }

    ngAfterViewInit() {
        this._logIt(`afterViewInit`);
    }

    // Called after every change detection check
    // of the component (directive) VIEW
    // Beware! Called frequently!

    ngAfterViewChecked() {
        let counter = this._afterViewCheckedCounter++;
        let msg = `afterViewChecked (${counter})`;
        this._logIt(msg);
    }

    ngOnDestroy() {
        this._logIt(`onDestroy`);
    }

    private _logIt(msg: string) {
        // Don't tick or else
        // the AfterContentChecked and AfterViewChecked recurse.
        // Let parent call tick()
        this._logger.log2(`#${this._id} ${msg}`,true);
    }

   
    toggleChild() {
        this.hasChild = !this.hasChild;
        if (this.hasChild) {
            this.heroName = 'Windstorm';
            this._logger.clear(); // clear log on create
        }
        this._logger.tick();
    }

    updateHero() {
        this.heroName += '!';
        this._logger.tick();
    }

}