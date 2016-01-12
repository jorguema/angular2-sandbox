System.register(['angular2/core', './exponential-strength.pipe', './fetch-json.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, exponential_strength_pipe_1, fetch_json_pipe_1;
    var PipeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exponential_strength_pipe_1_1) {
                exponential_strength_pipe_1 = exponential_strength_pipe_1_1;
            },
            function (fetch_json_pipe_1_1) {
                fetch_json_pipe_1 = fetch_json_pipe_1_1;
            }],
        execute: function() {
            PipeListComponent = (function () {
                function PipeListComponent() {
                    this.birthday = new Date(1988, 3, 15);
                    this.toggle = true; // start with true == shortDate
                    this.power = 5;
                    this.factor = 1;
                    this.delayedMessage = new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve('You are my Hero!'); }, 500);
                    });
                }
                Object.defineProperty(PipeListComponent.prototype, "format", {
                    get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
                    enumerable: true,
                    configurable: true
                });
                PipeListComponent.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
                PipeListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/pipes/template/pipe-list.html',
                        pipes: [exponential_strength_pipe_1.ExponentialStrengthPipe, fetch_json_pipe_1.FetchJsonPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipeListComponent);
                return PipeListComponent;
            })();
            exports_1("PipeListComponent", PipeListComponent);
        }
    }
});
//# sourceMappingURL=pipes-list.component.js.map