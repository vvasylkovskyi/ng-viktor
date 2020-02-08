import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  selectedJourney: any;

  indraJourney: any = {
    title: "Frontend Developer",
    company: "Indra",
    period: "2018-2020",
    projects: [
      {
        name: "JUL",
        content:
          "Involved in Development of most of web pages that project required. Implemented in Angular 7 with Redux Pattern. Optimized project into fast micro frontends.",
        scope:
          "The project is of a national scope for the whole Portugal Transport System"
      },
      {
        name: "Lisbon Metro",
        content:
          "Implemented all the Frontend from scratch. Angular 8 with Redux Pattern.",
        scope: "Currently the software is in production in Lisbon Metro"
      }
    ]
  };

  skyJourney: any = {
    title: "Frontend Developer",
    company: "Sky",
    period: "Feb 2020 - Present",
    projects: [
      {
        name: "Peacock",
        content:
          "Involved in development of the web part. Implemented in React",
        scope:
          "American over-the-top subscription video on demand streaming service by NBCUniversal, a subsidiary of Comcast."
      }
    ]
  };

  ngOnInit() {
    this.selectedJourney = this.indraJourney;
  }
}
