# ngx-formly-helpers

ngx-formly is an Angular library. It simplifies the creation of forms by a declaring the form model in the component. It supports different theme libraries like Material, Bootstrap, etc.

ngrx-formly-helper provides opt-in functions for form fields that are used most of the time. Especially with form-centric applications, it reduces the verbosity and makes the code more readable.

For example following ngx-formly config:

```typescript
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
```

Can be reduced with ngx-formly-helpers to:

```typescript
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
```

Make sure that ngx-formly is installed and is working. Then simply add ngx-formly-helpers by

`npm install ngx-formly-helper -D`

You can then replace your form field configuration by using the functions provided by the `formly` object.

Helper methods exist for the common input elements in both required and non-required flavour:
* text
* requiredText
* number
* requiredNumber
* hidden
* checkbox
* requiredCheckbox
* select
* requiredSelect
* multiSelect
* requiredMultiSelect
* radio
* requiredRadio
* date
* requiredDate
* textArea
* requiredTextArea 

You also have can use the two factory methods to create your own helper functions:
* field
* requiredField
