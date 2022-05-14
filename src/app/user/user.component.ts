import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }
  user: any = JSON.parse(localStorage.getItem('user') as string);

  AddElement(name: HTMLInputElement, desc: HTMLInputElement) {
    let users = localStorage.getItem("user");
    let parsedUsers;
    if (users === null) {
      parsedUsers = []
    } else {
      parsedUsers = JSON.parse(users);
    }
    localStorage.setItem('user', JSON.stringify(
      [...parsedUsers, {"id": (parsedUsers.length === 0 ? 1 : parsedUsers[parsedUsers.length - 1].id + 1), "Name" : name.value, "Description": desc.value}]
      ));
    this.router.navigate(['/user']);
  }

  DeleteElement(id: HTMLInputElement) {
    let users = localStorage.getItem("user");
    let parsedUsers ;
    if (users === null) {
      parsedUsers = []
    } else {
      parsedUsers = JSON.parse(users);
    }
    let newParsedUsers = parsedUsers.filter((e: any) => {
      if (e.id != id) return e;
    });
    localStorage.setItem('user', JSON.stringify(
      [...newParsedUsers]
      ));
    this.router.navigate(['/user']);
  }

  EditElement(id: any, name: HTMLInputElement, desc: HTMLInputElement) {
    let users = localStorage.getItem("user");
    let parsedUsers ;
    if (users === null ) {
      parsedUsers = []
    } else {
      parsedUsers = JSON.parse(users);
    }
    let newParsedUsers = parsedUsers.map((e: any) => {
      if (e.id == id) return {"id": id, "Name": name.value, "Description": desc.value};
      else return e;
    });
    localStorage.setItem('user', JSON.stringify(
      [...newParsedUsers]
      ));
    this.router.navigate(['/user']);
  }

}
