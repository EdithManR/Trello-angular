import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';
import { UserDetail } from '../user-detail/user-detail';

@Component({
  selector: 'app-login',
  imports: [RouterLink, UserDetail],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{
  userName: string='Patricia Lebsack';
  userEmail:string='Julianne.OConner@kory.org';
  constructor(public userService:UserService){}
  ngOnInit():void{
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe({
      next:(data)=>{
        this.userService.users = data;
      },
      error:(e)=>{
        console.log(e);
      }
    });
  }
}
