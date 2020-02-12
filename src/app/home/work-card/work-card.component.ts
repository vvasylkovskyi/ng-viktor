import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "work-card",
  templateUrl: "./work-card.component.html",
  styleUrls: ["./work-card.component.scss"]
})
export class WorkCardComponent implements OnInit {
  @Input() imgUrl: any;
  @Input() title: string;
  @Input() description: string;

  constructor() {}

  ngOnInit() {}
}
