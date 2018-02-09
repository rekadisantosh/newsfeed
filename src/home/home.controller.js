class HomeController {
    constructor($http) {
        this.$http = $http;
        this.name = 'Home';
        console.log(this.name);
    }
}
HomeController.$inject = ["$http"];
export default HomeController;