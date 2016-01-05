import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service';

@Injectable()
export class HeroService {
    constructor(private _loggerService: LoggerService) { }

    getHeroes() {
        this._loggerService.log("retrived heros!");
        return Promise.resolve(HEROES);
    }
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        this._loggerService.warn("retrived heros!");
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }
}