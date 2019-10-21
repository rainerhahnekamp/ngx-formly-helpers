import { Component, OnInit } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { FormGroup } from "@angular/forms";
import { formly } from "ngx-formly-helpers";
import { continents } from "../continents";

@Component({
  selector: "app-with-helpers",
  templateUrl: "./with-helpers.component.html",
  styleUrls: ["./with-helpers.component.css"]
})
export class WithHelpersComponent implements OnInit {
  fields: FormlyFieldConfig[];
  form = new FormGroup({});
  json: string;

  model = {
    firstname: "Dave",
    lastname: "Noydra",
    birthday: new Date(1990, 4, 12),
    height: 182,
    gender: "male",
    continent: 1
  };

  constructor() {}

  ngOnInit() {
    this.fields = [
      formly.text("firstname", "Firstname"),
      formly.required("lastname", "Lastname"),
      formly.date("birthday", "Geburtstag"),
      formly.number("height", "Height (inches)"),
      formly.radio("gender", "Gender", [
        { key: "m", label: "male" },
        { key: "f", label: "female" }
      ]),
      formly.select("continent", "Continent", continents)
    ];
    this.json = `this.fields = [
  formly.text("firstname", "Firstname"),
  formly.required("lastname", "Lastname"),
  formly.date("birthday", "Geburtstag"),
  formly.number("height", "Height (inches)"),
  formly.radio("gender", "Gender", [
    { key: "m", label: "male" },
    { key: "f", label: "female" }
  ]),
  formly.select("continent", "Continent", continents)
];`;
  }
}
