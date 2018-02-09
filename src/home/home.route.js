function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
        });
}

routes.$inject = ['$stateProvider'];

export default routes;