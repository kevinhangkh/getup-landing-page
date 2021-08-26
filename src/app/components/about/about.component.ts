import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Company, Employee, SharedDataService, Stat } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  subs: Subscription[] = [];
  topCompanies: Company[] = [];
  stats: Stat[] = [];
  employees: Employee[] = [];

  constructor(private sharedData: SharedDataService) { 
    
  }

  ngOnInit(): void {
    this.subs.push(this.sharedData.topComps.subscribe(
      (company) => {
        this.topCompanies.push(company);
      }
    ));

    this.subs.push(this.sharedData.stat.subscribe(
      (stat) => this.stats.push(stat)
    ));

    this.subs.push(this.sharedData.employee.subscribe(
      (employee) => this.employees.push(employee)
    ));

  }

}
