import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }
  ngOnInit(): void { }

  showAlert():void {
    this.router.navigate(['/about']);
  }

  addItem(prod: any): void {
    let prods = localStorage.getItem("product");
    let parsedProds;
    if (prods === null ) {
      parsedProds = []
    } else {
      parsedProds = JSON.parse(prods);
    }

    let data = [...parsedProds, prod.value];
    localStorage.setItem("product", JSON.stringify(data));
  }

}
