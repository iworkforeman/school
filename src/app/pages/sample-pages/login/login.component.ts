import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loginStats: any = {
        login: true,
        signUp: false,
        forgotPassword: false
    };
    ngSelectData: Array<any> = [
        { id: 1, name: "Toyota" },
        { id: 2, name: "Nissan" },
        { id: 3, name: "Mitsubishi" },
        { id: 4, name: "Kia" },
        { id: 5, name: "Isuzu" },
        { id: 6, name: "Mazda" }
      ];
      
    ngSelectSelected: string;

    toggleBlock(currentBlock, nextBlock) {
        this.loginStats[currentBlock] = false;
        this.loginStats[nextBlock] = true;
    };

    Signin() {
        environment.isSigned = true;
        this.router.navigate(['/' + environment.loginRole]);
    }

    changeRole(event) {
        environment.loginRole = event.target.value;
        console.log(environment.loginRole);
    }

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

}
