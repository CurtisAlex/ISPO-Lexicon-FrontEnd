import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-error-screen",
  templateUrl: "./error-screen.component.html",
  styleUrls: ["./error-screen.component.scss"]
})
export class ErrorScreenComponent implements OnInit {
  constructor() {}

  @Input() noSearchResults: boolean;
  @Input() waitToLoad: boolean;

  ngOnInit() {}
}
