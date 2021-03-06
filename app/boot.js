System.register(['angular2/platform/browser', './app.component', './logger.service', 'angular2/router'], function(exports_1) {
    var browser_1, app_component_1, logger_service_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, logger_service_1.LoggerService]);
        }
    }
});
//# sourceMappingURL=boot.js.map