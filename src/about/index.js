import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './about.route';
import AboutController from './about.controller';

const aboutComponent = angular.module('MyApp.about', [uirouter])
    .config(routes)
    .controller('AboutController', AboutController)
    .name;

export default aboutComponent;