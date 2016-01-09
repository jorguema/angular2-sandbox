import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {LoggerService} from './logger.service';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent, [ROUTER_PROVIDERS, LoggerService]);
