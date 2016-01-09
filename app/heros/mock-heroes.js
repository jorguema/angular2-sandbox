System.register(['./hero'], function(exports_1) {
    var hero_1;
    var HEROES;
    return {
        setters:[
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            exports_1("HEROES", HEROES = [
                new hero_1.Hero(11, 'Mr. Nice'),
                new hero_1.Hero(12, 'Narco'),
                new hero_1.Hero(13, 'Bombasto'),
                new hero_1.Hero(14, 'Celeritas'),
                new hero_1.Hero(15, 'Magneta'),
                new hero_1.Hero(16, 'RubberMan')
            ]);
        }
    }
});
//# sourceMappingURL=mock-heroes.js.map