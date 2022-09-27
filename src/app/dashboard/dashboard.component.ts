import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';
import { ResponseData } from '../response-data';
import { Observable } from 'rxjs';
import { ResponceModel } from '../responce-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allEmployees: ResponceModel[] = [];
  employeeCount: number = 0;

  constructor(private router: Router, private service: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  btnClick = () => {
    this.router.navigateByUrl('/form');
  };

  getAllEmployees() {
    this.service.getAllEmployees().subscribe((responce) => {
      console.log("data= ", responce.data);
      this.allEmployees = responce.data;
      this.employeeCount = this.allEmployees.length;
    });
  }

  deleteEmployee(index: number) {
    this.service.deleteEmployeeById(this.allEmployees[index].id).subscribe((response) => {
      alert("deleted employee " + response.data);
      this.ngOnInit();
    })
  }

  editEmployee(index: number) {
    this.router.navigate(['update', this.allEmployees[index].id]);
  }
}
