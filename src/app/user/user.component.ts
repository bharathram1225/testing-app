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


  getElements() {
    let users = localStorage.getItem("user");
    return (users === null ? [] :JSON.parse(users));
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate([uri]));
  }

  AddElement(name: HTMLInputElement, desc: HTMLInputElement) {
    let parsedUsers = this.getElements();
    localStorage.setItem('user', JSON.stringify(
      [...parsedUsers, {"id": (parsedUsers.length === 0 ? 1 : parsedUsers[parsedUsers.length - 1].id + 1), "Name" : name.value, "Description": desc.value}]
      ));
    this.redirectTo('/user');
  }

  DeleteElement(id: HTMLInputElement) {
    let parsedUsers = this.getElements();
    let newParsedUsers = parsedUsers.filter((e: any) => {
      if (e.id != id) return e;
    });
    localStorage.setItem('user', JSON.stringify(
      [...newParsedUsers]
      ));

    this.redirectTo('/user');
  }

  EditElement(id: any, name: HTMLInputElement, desc: HTMLInputElement) {
    let parsedUsers = this.getElements();
    let newParsedUsers = parsedUsers.map((e: any) => {
      if (e.id == id) return {"id": id, "Name": name.value, "Description": desc.value};
      else return e;
    });
    localStorage.setItem('user', JSON.stringify(
      [...newParsedUsers]
      ));
      this.redirectTo('/user');
  }

}
