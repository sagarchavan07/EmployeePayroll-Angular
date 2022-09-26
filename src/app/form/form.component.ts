import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {  EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // constructor(private router: Router) { }
  constructor(private router: Router, private service:EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCancel=  () => {
    this.router.navigateByUrl('/dashboard');
  };

  employee: EmployeeModel = new EmployeeModel("",[], "","","", 0, new Date, "");

  addEmployee(){
    this.employee.department = this.getselectedValues(".checkbox");
    console.log("running addEmployee method", this.employee);
    // this.service.insertEmployee(employee).subscribe((data: any) => {
    //   this.router.navigate(["dashboard"]);
    // } );
  }

  // updateSalaryRangeValue($event: any){
  //   const sliderValue = document.getElementById("salary-value");
  //   if(sliderValue != null)
  //     sliderValue.innerHTML = $event.value;
  //     this.employee.salary = $event.value;
  // }

  getselectedValues(propertyValue:any){
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems:any = [];
    allItems.forEach(item => {
        if (item.checked) {
            selectedItems.push(item.value);
        }
    });
    return selectedItems;
  }

}
