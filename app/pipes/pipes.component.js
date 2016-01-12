System.register(['angular2/core', 'angular2/router', './pipes-list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, pipes_list_component_1;
    var PipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pipes_list_component_1_1) {
                pipes_list_component_1 = pipes_list_component_1_1;
            }],
        execute: function() {
            PipesComponent = (function () {
                function PipesComponent() {
                }
                PipesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/pipes/template/pipe.html',
                        directives: [router_1.RouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Pipes', component: pipes_list_component_1.PipeListComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], PipesComponent);
                return PipesComponent;
            })();
            exports_1("PipesComponent", PipesComponent);
        }
    }
});
//# sourceMappingURL=pipes.component.js.map