System.register(['angular2/core', '../heros/hero'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1;
    var FormsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            FormsListComponent = (function () {
                function FormsListComponent() {
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new hero_1.Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                }
                FormsListComponent.prototype.onSubmit = function () { this.submitted = true; };
                FormsListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/forms/template/forms-list.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormsListComponent);
                return FormsListComponent;
            })();
            exports_1("FormsListComponent", FormsListComponent);
        }
    }
});
//# sourceMappingURL=forms-list.component.js.map