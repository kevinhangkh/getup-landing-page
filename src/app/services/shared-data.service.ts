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

  private review: Review[] = [
    {rating: 5, comment: "Had a fantastic experience at the store today. The team were very knowledgeable and provided all the information we needed to make a decision. Omar was an awesome salesman and I strongly encourage everyone to go here instead of buying shotguns online (better prices and you can try before you buy!)", 
    employee: {pic: "../../assets/reviews/mcnulty.png", name: "Jimmy McNulty", position: "Detective"}},
    {rating: 4, comment: "Mr. Burns provided great service, confirming availability, matching online price, and organizing 2 day delivery in very short notice. Very helpful during a stressful situation",
    employee: {pic: "../../assets/reviews/lisasimpson.png", name: "Lisa Simpson", position: "Straight A student"}},
    {rating: 3, comment: "Gus was extremely helpful and confirmed everything many times. Was a great experience from the customer service aspect. Getting fried chicken and adjustable drinks delivered next week!", 
    employee: {pic: "../../assets/reviews/marieschrader.png", name: "Marie Schrader", position: "Housewife"}},
    {rating: 2, comment: "A mattress store with neat displays but with very limited product information on display. Super aggressive sales urged immediately purchase and refused to provide a name card for future reference. Overall, not a comfortable shopping experience and will not visit again.", 
    employee: {pic: "../../assets/reviews/loganpaul.png", name: "Logan Paul", position: "Trash influencer"}},
    {rating: 1, comment: "Awful, don't waste your time with this bunch of clowns!", employee: {pic: "../../assets/reviews/tillygreen.jpg", name: "Tilly Green", position: "Day sleeper"}},
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

  get rev() : Observable<Review> {
    return new Observable(obs => {
      obs.next(this.review[Math.floor(Math.random() * this.review.length)]);
      obs.complete();
    })
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

export interface Review {
  rating: number;
  comment: String;
  employee: Employee;
}