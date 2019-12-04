import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services';

export interface ListUsers {
    fullName: string;
    email: string;
    cpf: string;
    phone: string;
}

const ELEMENT_DATA: ListUsers[] = [

]

@Component({
    templateUrl: 'list.component.html'
})


export class ListComponent implements OnInit {

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    displayedColumns: string[] = ['fullName', 'email', 'cpf', 'phone'];
    dataSource = ELEMENT_DATA;

    ngOnInit() {
        this.userService.getAllUsers()
            .subscribe(
                data => {
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

}