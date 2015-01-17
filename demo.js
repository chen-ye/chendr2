// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards'])


.config(function($stateProvider, $urlRouterProvider) {

})

.directive('noScroll', function($document) {

    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {

            $document.on('touchmove', function(e) {
                e.preventDefault();
            });
        }
    }
})

.controller('CardsCtrl', function($scope, TDCardDelegate) {
    console.log('CARDS CTRL');
    var cardTypes = [
        { image: 'https://scontent-b.xx.fbcdn.net/hphotos-xpa1/t31.0-8/p417x417/10911341_10204156231003628_3946397854333902977_o.jpg' },
        { image: 'https://scontent-b.xx.fbcdn.net/hphotos-xpa1/t31.0-8/p417x417/10700688_10203687913455982_6472224125266140302_o.jpg' },
        { image: 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1926131_10203615218798661_7501579013500703163_o.jpg' },
        { image: 'https://scontent-b.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10354085_10203168278865442_3457285431204637874_n.jpg?oh=70cec2ca90fde7a1623bfe3d62e0429c&oe=55349D45' },
        { image: 'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/10293758_10203133252949816_6421520510966591999_o.jpg' },
        { image: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/p417x417/10009763_1495303684080442_3159252502541142705_n.jpg?oh=bf2d41860fde524b63da13d49b748a3f&oe=552EAE3B&__gda__=1428487856_40b028e19fa0b168642c202b7583893b' },
        { image: 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/10404496_10203743350841882_3765422765045060125_n.jpg?oh=27a07c48b6e1b9d030be03536155eb38&oe=5562AB3E&__gda__=1429099304_3f7788a93c6b320bcbe41583d324de6f' },
        { image: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/1493431_10203131430904266_162108625017533242_o.jpg' },
        { image: 'https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t31.0-8/10465341_10203070001128560_4478179401999435077_o.jpg' },
        { image: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/10499357_10202882771207929_4674712119663718380_o.jpg' },
        { image: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/p417x417/10458303_10202784013379045_6588426025909470743_n.jpg?oh=dc7ce56ef172c5d2789fe519380dbd84&oe=552EF579&__gda__=1429169024_e1d17ac6e42b5997a7de6c02a2ff057d' },
        { image: 'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/10428413_10202787827314391_5084024140245248231_o.jpg' },
        { image: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/10700313_10203585266369869_9100543080303043120_o.jpg' },
        { image: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1909137_727084374003143_1349203086_o.jpg' },
        { image: 'https://scontent-b.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/p417x417/69573_10202192751437866_1905690160_n.jpg?oh=2f988283549f41d6498a8a079c110daa&oe=5533A035' },
        { image: 'https://scontent-b.xx.fbcdn.net/hphotos-xpf1/t31.0-8/1243301_10202184606274242_1594754927_o.jpg' },
        { image: 'https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t31.0-8/1496035_10201741778723830_1051406726_o.jpg' }
    ];

    $scope.cards = Array.prototype.slice.call(cardTypes, 0);

    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
    };

    $scope.addCard = function() {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    }
})

.controller('CardCtrl', function($scope, TDCardDelegate) {
    $scope.cardSwipedLeft = function(index) {
        console.log('LEFT SWIPE');
        $scope.addCard();
    };
    $scope.cardSwipedRight = function(index) {
        console.log('RIGHT SWIPE');
        $scope.addCard();
    };
    $scope.cardPartialSwipe = function(amt) {
        console.log("amt" + amt);
    }
});