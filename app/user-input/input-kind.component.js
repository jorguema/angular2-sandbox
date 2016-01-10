System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var InputKindComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputKindComponent = (function () {
                function InputKindComponent() {
                    this.clickMessage = '';
                    this.valuesKeyUp = '';
                    this.valuesFromTemplate = '';
                }
                InputKindComponent.prototype.onClickMe = function () {
                    this.clickMessage = "You are my hero!";
                };
                InputKindComponent.prototype.onKeyUp = function (event) {
                    this.valuesKeyUp += event.target.value + ' | ';
                };
                /*
                 // IF EVENT DIFFERENT ANY KIND: with strong typing
                    onKeyUp(event:KeyboardEvent) {
                        this.valuesKeyUp += (<HTMLInputElement>event.target).value + ' | ';
                    }
               */
                InputKindComponent.prototype.onKeyFromLocalTemplate = function (value) {
                    this.valuesFromTemplate += value + ' | ';
                };
                InputKindComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/user-input/template/input-kind.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputKindComponent);
                return InputKindComponent;
            })();
            exports_1("InputKindComponent", InputKindComponent);
        }
    }
});
//# sourceMappingURL=input-kind.component.js.map