import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services';

export interface ListUsers {
    fullName: string;
    email: string;
    cpf: string;
    phone: string;
}

@Component({
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {

    items: any = [];

    constructor(
        private userService: UserService
    ) { }

    getUsers() {
        this.userService.getAllUsers()
            .subscribe(data => {
                console.log('DATA', data);
                this.items = data;
            },
                error => {
                    console.log(error);
                });
    }

    ngOnInit() {
        this.getUsers();
    }

}