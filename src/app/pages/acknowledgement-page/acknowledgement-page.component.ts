import { Component, OnInit } from "@angular/core";
import { Person } from "src/app/models/person";

@Component({
  selector: "app-acknowledgement-page",
  templateUrl: "./acknowledgement-page.component.html",
  styleUrls: ["./acknowledgement-page.component.scss"]
})
export class AcknowledgementPageComponent implements OnInit {
  constructor() {}

  acknowledgements: Person[] = [
    {
      name: "Wieland Kaphingst",
      titles: "Dipl.-Ing., BMT, CPO",
      roles: "Author, Translator: English, German"
    },
    {
      name: "René Baumgartner",
      titles: "MD, Prof. emeritus, Orthopaedic Surgeon",
      roles: "Author, Translator: German"
    },
    {
      name: "Wilfred Raab",
      titles: "CPO",
      roles: "Author, Translator: German, Vietnamese"
    },
    {
      name: "Edward Lemaire",
      titles: "PhD",
      roles: "Editing/Web, Translator: English"
    },
    {
      name: "Fangwei Zeng",
      titles: "BSc",
      roles: "Editing/Web"
    },
    {
      name: "Alexander Curtis",
      titles: "BSc",
      roles: "Web"
    },
    {
      name: "Rhya Burnet",
      titles: "BSc",
      roles: "Web"
    },
    {
      name: "Aaron Leung",
      titles: "",
      roles: "Translator: Chinese"
    },
    {
      name: "Lingzhen Dong",
      titles: "",
      roles: "Translator: Chinese"
    },
    {
      name: "JSPO and ISPO Japan",
      titles: "Japanese Society for Prosthetics and Orthotics",
      roles: "Translator: Japanese"
    },
    {
      name: "Monica Castaneda",
      titles: "",
      roles: "Translator: Spanish"
    },
    {
      name: "Heinz Trebbin",
      titles: "",
      roles: "Translator: Spanish"
    },
    {
      name: "Serap Alsancak",
      titles: "",
      roles: "Translator: Turkish"
    },
    {
      name: "Pham Thuy",
      titles: "",
      roles: "Translator: Vietnamese"
    },
    {
      name: "Pierre Huet",
      titles: "",
      roles: "Translator: French"
    }
  ];

  ngOnInit() {}
}
