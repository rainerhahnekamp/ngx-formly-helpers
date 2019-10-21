import { Component, OnInit } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { FormGroup } from "@angular/forms";
import { model } from "../model";
import { continents } from "../continents";

@Component({
  selector: "app-without-helpers",
  templateUrl: "./without-helpers.component.html",
  styleUrls: ["./without-helpers.component.css"]
})
export class WithoutHelpersComponent implements OnInit {
  fields: FormlyFieldConfig[];
  form = new FormGroup({});
  model = model;
  json: string;

  constructor() {}

  ngOnInit() {
    this.fields = [
      {
        key: "firstname",
        type: "input",
        templateOptions: { label: "Firstname" }
      },
      {
        key: "lastname",
        type: "input",
        templateOptions: { label: "Firstname", required: true }
      },
      {
        key: "birthday",
        type: "datepicker",
        templateOptions: { label: "Birthday" }
      },
      {
        key: "height",
        type: "input",
        templateOptions: { label: "Height (inches)" }
      },
      {
        key: "gender",
        type: "radio",
        templateOptions: {
          label: "Gender",
          options: [{ key: "m", label: "male" }, { key: "f", label: "female" }]
        }
      },
      {
        key: "continent",
        type: "select",
        templateOptions: {
          label: "Continent",
          options: continents
        }
      }
    ];
    this.json = `this.fields = [
  {
    key: "firstname",
    type: "input",
    templateOptions: { label: "Firstname" }
  },
  {
    key: "lastname",
    type: "input",
    templateOptions: { label: "Firstname", required: true }
  },
  {
    key: "birthday",
    type: "datepicker",
    templateOptions: { label: "Birthday" }
  },
  {
    key: "height",
    type: "input",
    templateOptions: { label: "Height (inches)" }
  },
  {
    key: "gender",
    type: "radio",
    templateOptions: {
      label: "Gender",
      options: [{ key: "m", label: "male" }, { key: "f", label: "female" }]
      }
    },
    {
      key: "continent",
      type: "select",
      templateOptions: {
        label: "Continent",
        options: continents
      }
    }
  ];`;
  }
}
