System.register(['./crisis'], function(exports_1) {
    var crisis_1;
    var CRISIS;
    return {
        setters:[
            function (crisis_1_1) {
                crisis_1 = crisis_1_1;
            }],
        execute: function() {
            exports_1("CRISIS", CRISIS = [
                new crisis_1.Crisis(1, 'Princess Held Captive'),
                new crisis_1.Crisis(2, 'Dragon Burning Cities'),
                new crisis_1.Crisis(3, 'Giant Asteroid Heading For Earth'),
                new crisis_1.Crisis(4, 'Release Deadline Looms')
            ]);
        }
    }
});
//# sourceMappingURL=mock-crisis.js.map