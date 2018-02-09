function route($stateProvider)
{
    $stateProvider.state("register",{
        url:"/register",
        template:require("./register.html"),
        controller:"RegisterController",
        controllerAs:"registerCtrl",
    })
}
route.$inject=["$stateProvider"];
export default route;