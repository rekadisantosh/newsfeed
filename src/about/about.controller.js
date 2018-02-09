class AboutController {
    constructor($http) {
        this.$http = $http;
        this.name = 'About';
        console.log(this.name);
    }
}
AboutController.$inject = ["$http"];
export default AboutController;