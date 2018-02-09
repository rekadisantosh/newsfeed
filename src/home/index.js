import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './home.route';
import HomeController from './home.controller';

const homeComponent = angular.module('MyApp.home', [uirouter])
    .config(routes)
    .controller('HomeController', HomeController)
    .name;

export default homeComponent;