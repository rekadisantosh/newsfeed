function routes($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            template: require('./about.html'),
            controller: 'AboutController',
            controllerAs: 'aboutCtrl',
        });
}
routes.$inject = ['$stateProvider'];
export default routes;