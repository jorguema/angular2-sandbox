System.register(['angular2/core', 'angular2/router', './crisis-center/crisis-center.component', './heros/hero.component', './user-input/user-input.component', './forms/forms.component', './pipes/pipes.component', './lifecycle/lifecycle.component', './directives/directives.component', './dialog.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, crisis_center_component_1, hero_component_1, user_input_component_1, forms_component_1, pipes_component_1, lifecycle_component_1, directives_component_1, dialog_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (crisis_center_component_1_1) {
                crisis_center_component_1 = crisis_center_component_1_1;
            },
            function (hero_component_1_1) {
                hero_component_1 = hero_component_1_1;
            },
            function (user_input_component_1_1) {
                user_input_component_1 = user_input_component_1_1;
            },
            function (forms_component_1_1) {
                forms_component_1 = forms_component_1_1;
            },
            function (pipes_component_1_1) {
                pipes_component_1 = pipes_component_1_1;
            },
            function (lifecycle_component_1_1) {
                lifecycle_component_1 = lifecycle_component_1_1;
            },
            function (directives_component_1_1) {
                directives_component_1 = directives_component_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/structure.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [dialog_service_1.DialogService] //, HeroService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/crisis-center/...',
                            name: 'CrisisCenter',
                            component: crisis_center_component_1.CrisisCenterComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/heroes/...',
                            name: 'Heroes',
                            component: hero_component_1.HeroComponent
                        },
                        {
                            path: '/user-input/...',
                            name: 'UserInput',
                            component: user_input_component_1.UserInputComponent
                        },
                        {
                            path: '/forms/...',
                            name: 'Forms',
                            component: forms_component_1.FormsComponent
                        },
                        {
                            path: '/pipes/...',
                            name: 'Pipes',
                            component: pipes_component_1.PipesComponent
                        },
                        {
                            path: '/lifecycle/...',
                            name: 'Lifecycle',
                            component: lifecycle_component_1.LifecycleComponent
                        },
                        {
                            path: '/directives',
                            name: 'Directives',
                            component: directives_component_1.DirectivesComponent
                        },
                        { path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map