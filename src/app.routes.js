routing.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider', '$stateProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $urlMatcherFactoryProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlMatcherFactoryProvider.strictMode(false);
    $urlRouterProvider.otherwise('/');
}