import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: any = this.route.snapshot.paramMap.get("id");

  employee: EmployeeModel = new EmployeeModel("", [], "", "", 0, new Date, "");

  constructor(private router: Router, private service: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.id != null){
      this.service.getEmployeeById(this.id).subscribe((responce) =>{
        this.employee = responce;
        console.log("update employee ",responce);
      });
    }
  }

  onCancel = () => {
    this.router.navigateByUrl('/dashboard');
  };

  addEmployee() {
    this.employee.department = this.getselectedValues(".checkbox");
    console.log("running addEmployee method", this.employee);
    this.service.insertEmployee(this.employee).subscribe((data: any) => {
      this.router.navigate(["dashboard"]);
    });
  }

  updateEmployee(){
    this.employee.department = this.getselectedValues(".checkbox");
    console.log("running updateEmployee method", this.employee);
    this.service.updateEmployee(this.employee,this.id).subscribe((data: any) => {
      this.router.navigate(["dashboard"]);
    });
  }

  getselectedValues(propertyValue: any) {
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems: any = [];
    allItems.forEach(item => {
      if (item.checked) {
        selectedItems.push(item.value);
      }
    });
    return selectedItems;
  }


  resetForm(){
    this.employee= new EmployeeModel("", [], "", "", 0, new Date, "");
  }

}
