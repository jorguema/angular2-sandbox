import {Hero} from './hero';
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
    constructor(private _loggerService: LoggerService) { }

    getHeroes() {
        this._loggerService.log("retrived heros!");
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        this._loggerService.warn("retrived heros!");
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number | string) {
        return Promise.resolve(HEROES)
            .then(heroes => heroes.filter(h => h.id === +id)[0]);
    }
}