function routes($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/',
            template: require('./login.html'),
            controller: 'LoginController',
            controllerAs: 'loginCtrl',
        });
}

routes.$inject = ['$stateProvider'];

export default routes;