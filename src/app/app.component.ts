import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Test app';
  salary: number = 60000.1212431231
  randDate: Date =new  Date(2022, 1, 1);
  project: any = {
    "manager": "XYZ",
    "name": "ABC"
  }
  products: any[]=[
    {id:101,name:"Product1",price:"100",martialStatus:"Married"},
    {id:102,name:"Product2",price:"101",martialStatus:"NMarried"},
    {id:103,name:"Product3",price:"102",martialStatus:"Married"}
  ];

  inputNo: number = 3;

  showAlert(): void {
    alert("Hello there");
  }
  showTxt(txt: any): void {
    alert(txt.value);
  }
  colorName:any="green";

  size:number=18;

  changeColor(clr:any){
    this.colorName=clr.value;
  }
  setSize(rng:any){
    this.size=rng.value;
  }
}
