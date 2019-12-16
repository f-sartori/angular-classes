import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {

  id: number 
  user : User = new User(0,0,'','');
  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  searchById(){
    this.UserService.getById(this.id).subscribe((userOut:User)=>{
      this.user = userOut;
    })
  }

}
