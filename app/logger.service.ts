import {Injectable} from 'angular2/core';

@Injectable()
export class LoggerService {
    log(msg: any) { console.log(msg); }
    error(msg: any) { console.error(msg); }
    warn(msg: any) { console.warn(msg); }

    log2(msg: string, noTick: boolean = false) {
        if (!noTick) { this.tick(); }
        this.logs.push(msg);
        this.log(msg);
    }
    logs: string[] = [];
    tick() {
        setTimeout(() => {
            // console.log('tick')
        }, 0);
    }
    clear() { }
}