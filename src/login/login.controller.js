class LoginController {
    constructor() {
       this.email="";
       this.password="";
       
    }
    doLogin(){
       console.log(this.email);
       console.log(this.password);
    }
}
LoginController.$inject = ["$http"];
export default LoginController;