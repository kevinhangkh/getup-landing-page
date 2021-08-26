import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private topCompanies: Company[] = [
    {src: "../../assets/top-companies/great-place.png", title: "Great Place To Work 2021", text: "Best Workplace"},
    {src: "../../assets/top-companies/saastock.png", title: "SaaStock 2021", text: "Best SaaS Startup"},
    {src: "../../assets/top-companies/fintech.jpg", title: "The FinTech 50 2020", text: "Hot 10 Startup"}
  ];

   private stats: Stat[] = [
    {number: "30%", text: "Reduction in coffee consumption"},
    {number: "72+ hours", text: "Saved every month"},
    {number: "15", text: "Asleep in 15 countries"},
    {number: "50000+", text: "Satisfied sleepers"},
    {number: "Zero", text: "Greenhouse gas emissions"},
    {number: "200%", text: "Snoring noise reduction"},
  ];

  private employees: Employee[] = [
    {pic: "../../assets/about/sleepy_ceo_sm.png", name: "Rob Bed", position: "Chief Executive Officer"},
    {pic: "../../assets/about/sleepy_woman_sm.png", name: "Sarah Zzz", position: "Chief Operating Officer"},
    {pic: "../../assets/about/sleeping_guy_sm.png", name: "Jim Rem", position: "Chief Technology Officer"}
  ];

  constructor() { }

  get topComps(): Observable<Company> {
    return from(this.topCompanies);
  }

  get stat(): Observable<Stat> {
    return from(this.stats);
  }

  get employee(): Observable<Employee> {
    return from(this.employees);
  }
}

export interface Company {
  src: String; 
  title: String; 
  text: String;
}

export interface Stat {
  number: String;
  text: String;
}

export interface Employee {
  pic: String;
  name: String;
  position: String;
}