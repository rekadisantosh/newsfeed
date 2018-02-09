import angular from "angular";
import uiRouter from "angular-ui-router";
import route from "./register.route";
import RegisterController from "./register.controller";


 var registerComponent=angular.module("newsfeed.register",[uiRouter])
.config(route)
.controller("RegisterController",RegisterController)
.name;
export default registerComponent;