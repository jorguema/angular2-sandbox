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
    var core_1, core_2;
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective(_templateRef, _viewContainer) {
                    this._templateRef = _templateRef;
                    this._viewContainer = _viewContainer;
                }
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    set: function (condition) {
                        if (!condition) {
                            this._viewContainer.createEmbeddedView(this._templateRef);
                        }
                        else {
                            this._viewContainer.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], UnlessDirective.prototype, "myUnless", null);
                UnlessDirective = __decorate([
                    core_1.Directive({ selector: '[myUnless]' }), 
                    __metadata('design:paramtypes', [core_2.TemplateRef, core_2.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            })();
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});
//# sourceMappingURL=unless.directive.js.map