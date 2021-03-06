System.register(['angular2/core', './directives-attribute.directive', './structural/heavy-loader.component', './structural/unless.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, directives_attribute_directive_1, heavy_loader_component_1, unless_directive_1;
    var DirectivesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (directives_attribute_directive_1_1) {
                directives_attribute_directive_1 = directives_attribute_directive_1_1;
            },
            function (heavy_loader_component_1_1) {
                heavy_loader_component_1 = heavy_loader_component_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            DirectivesComponent = (function () {
                function DirectivesComponent() {
                    this.heroes = ['Mr. Nice', 'Narco', 'Bombasto'];
                    this.hero = this.heroes[0];
                    this.condition = true;
                    this.isVisible = true;
                    this.logs = [];
                    this.status = 'ready';
                }
                DirectivesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/directives/template/directives.html',
                        directives: [directives_attribute_directive_1.HighlightDirective, heavy_loader_component_1.HeavyLoaderComponent, unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DirectivesComponent);
                return DirectivesComponent;
            })();
            exports_1("DirectivesComponent", DirectivesComponent);
        }
    }
});
//# sourceMappingURL=directives.component.js.map