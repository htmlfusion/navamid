import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {TopNavComponent} from './top-nav/top-nav.component';
import {CoreContentComponent} from './core-content/core-content.component';
import {FooterNavComponent} from './footer-nav/footer-nav.component';

@Component({
  moduleId: __moduleName,
  selector: 'navamid-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'navamid.component.html',
  styles: ['.body { margin: 0;, padding: 0 }'],
  styleUrls: ['navamid.component.css'],
  directives: [ROUTER_DIRECTIVES, TopNavComponent, CoreContentComponent, FooterNavComponent],
  pipes: []
})
@RouteConfig([
])
export class NavamidApp {
}
