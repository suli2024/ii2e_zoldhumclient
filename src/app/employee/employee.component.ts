import { Component } from '@angular/core';
import { 
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { EmpapiService } from '../shared/empapi.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeForm !: FormGroup
  empList !: any[]

  constructor(
    private builder: FormBuilder,
    private empapi: EmpapiService
  ) {}

  ngOnInit() {
    this.employeeForm = this.builder.group({
      name: new FormControl(''),
      city: new FormControl(''),
      salary: new FormControl(''),
    })
    this.getEmployees();
  }

  getEmployees() {
    this.empapi.getEmployees().subscribe({
      next: (data: any) => {
        console.log(data);
        this.empList = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  saveEmployee(){
    // console.log(this.employeeForm.value)
    this.empapi.addEmployee(this.employeeForm.value).subscribe({
      next: (data) => {
        console.log(data)
        this.getEmployees();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
