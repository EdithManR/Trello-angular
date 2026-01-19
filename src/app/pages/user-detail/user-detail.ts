import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  selectedUser: any;

  constructor(private route: ActivatedRoute, public userService: UserService){ }
    ngOnInit(): void {
        const id= this.route.snapshot.params['id'];
        this.getUser(id);
    }
      getUser(id:number){
        this.userService.getUser(id).subscribe({
        next:(data)=>{
          this.selectedUser= data;
        }, error:(e)=>{
          console.log(e);
        }
      });
    }   

}
