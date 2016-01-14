System.register(['angular2/core', '../logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1;
    var nextId, LifecycleListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            nextId = 1;
            LifecycleListComponent = (function () {
                function LifecycleListComponent(_loggerService) {
                    this._loggerService = _loggerService;
                    this._afterContentCheckedCounter = 1;
                    this._afterViewCheckedCounter = 1;
                    this._id = nextId++;
                    this._onChangesCounter = 1;
                    this._verb = 'initialized';
                    this.hasChild = false;
                    this.heroName = 'Windstorm';
                    this._logger = _loggerService;
                    this.hookLog = this._logger.logs;
                }
                // only called if there is an @input variable set by parent.
                LifecycleListComponent.prototype.ngOnChanges = function (changes) {
                    var changesMsgs = [];
                    for (var propName in changes) {
                        if (propName === 'name') {
                            var name_1 = changes['name'].currentValue;
                            changesMsgs.push("name " + this._verb + " to \"" + name_1 + "\"");
                        }
                        else {
                            changesMsgs.push(propName + ' ' + this._verb);
                        }
                    }
                    this._logIt("onChanges (" + this._onChangesCounter++ + "): " + changesMsgs.join('; '));
                    this._verb = 'changed'; // next time it will be a change
                };
                LifecycleListComponent.prototype.ngOnInit = function () {
                    this._logIt("onInit");
                };
                LifecycleListComponent.prototype.ngAfterContentInit = function () {
                    this._logIt("afterContentInit");
                };
                // Called after every change detection check
                // of the component (directive) CONTENT
                // Beware! Called frequently!
                LifecycleListComponent.prototype.ngAfterContentChecked = function () {
                    var counter = this._afterContentCheckedCounter++;
                    var msg = "afterContentChecked (" + counter + ")";
                    this._logIt(msg);
                };
                LifecycleListComponent.prototype.ngAfterViewInit = function () {
                    this._logIt("afterViewInit");
                };
                // Called after every change detection check
                // of the component (directive) VIEW
                // Beware! Called frequently!
                LifecycleListComponent.prototype.ngAfterViewChecked = function () {
                    var counter = this._afterViewCheckedCounter++;
                    var msg = "afterViewChecked (" + counter + ")";
                    this._logIt(msg);
                };
                LifecycleListComponent.prototype.ngOnDestroy = function () {
                    this._logIt("onDestroy");
                };
                LifecycleListComponent.prototype._logIt = function (msg) {
                    // Don't tick or else
                    // the AfterContentChecked and AfterViewChecked recurse.
                    // Let parent call tick()
                    this._logger.log2("#" + this._id + " " + msg, true);
                };
                LifecycleListComponent.prototype.toggleChild = function () {
                    this.hasChild = !this.hasChild;
                    if (this.hasChild) {
                        this.heroName = 'Windstorm';
                        this._logger.clear(); // clear log on create
                    }
                    this._logger.tick();
                };
                LifecycleListComponent.prototype.updateHero = function () {
                    this.heroName += '!';
                    this._logger.tick();
                };
                LifecycleListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/lifecycle/template/lifecycle-list.html'
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], LifecycleListComponent);
                return LifecycleListComponent;
            })();
            exports_1("LifecycleListComponent", LifecycleListComponent);
        }
    }
});
//# sourceMappingURL=lifecycle-list.component.js.map