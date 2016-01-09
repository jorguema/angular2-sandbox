System.register(['angular2/core', 'angular2/router', './hero-list.component', './hero-detail.component', './hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_list_component_1, hero_detail_component_1, hero_service_1;
    var HeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroComponent = (function () {
                function HeroComponent() {
                }
                HeroComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/heros/template/hero-center.html',
                        directives: [router_1.RouterOutlet],
                        providers: [hero_service_1.HeroService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Heroes', component: hero_list_component_1.HeroListComponent, useAsDefault: true },
                        { path: '/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HeroComponent);
                return HeroComponent;
            })();
            exports_1("HeroComponent", HeroComponent);
        }
    }
});
//# sourceMappingURL=hero.component.js.map