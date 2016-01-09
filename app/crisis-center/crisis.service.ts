import {Injectable} from 'angular2/core';
import {CRISIS} from './mock-crisis';

@Injectable()
export class CrisisService {
    getCrises() { return crisesPromise; }
    getCrisis(id: number | string) {
        return crisesPromise
            .then(crises => crises.filter(c => c.id === +id)[0]);
    }
}

var crisesPromise = Promise.resolve(CRISIS);