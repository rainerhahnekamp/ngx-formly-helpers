import { FormlyFieldConfig, FormlyTemplateOptions } from "@ngx-formly/core";

export interface Option {
  value: any;
  label: string;
}

function field(
  key: string,
  type = "input",
  label: string = "",
  templateOptions = {},
  otherOptions: FormlyFieldConfig = {}
): FormlyFieldConfig {
  const returner: FormlyFieldConfig = { key, type };
  returner.templateOptions = Object.assign({ label, ...templateOptions });

  const className = `formly-${key}`;
  otherOptions.className = otherOptions.className
    ? `${otherOptions.className} ${className}`
    : className;

  return { ...returner, ...otherOptions };
}

function requiredField(
  key: string,
  type = "input",
  label: string = "",
  templateOptions = {},
  otherOptions = {}
) {
  return field(
    key,
    type,
    label,
    { ...templateOptions, required: true },
    otherOptions
  );
}

function text(
  key: string,
  label: string,
  templateOptions = {}
): FormlyFieldConfig {
  return field(key, "input", label, templateOptions);
}

function number(
  key: string,
  label: string,
  templateOptions = {},
  otherOptions: FormlyFieldConfig = {}
): FormlyFieldConfig {
  return field(key, "input", label, templateOptions, {
    ...otherOptions,
    parsers: [input => +input.replace(",", ".")]
  });
}

function requiredNumber(
  key: string,
  label: string,
  templateOptions = {},
  otherOptions: FormlyFieldConfig = {}
): FormlyFieldConfig {
  return number(
    key,
    label,
    { ...templateOptions, required: true },
    otherOptions
  );
}

function requiredText(
  key: string,
  label: string,
  templatOptions = {},
  otherOptions = {}
): FormlyFieldConfig {
  return requiredField(key, "input", label, templatOptions, otherOptions);
}

function hidden(key: string): FormlyFieldConfig {
  return { key, type: "input", hide: true };
}

function checkbox(
  key: string,
  label: string,
  templateOptions = {}
): FormlyFieldConfig {
  return field(key, "checkbox", label, templateOptions);
}

function requiredCheckbox(
  key: string,
  label: string,
  templateOptions = {}
): FormlyFieldConfig {
  return field(key, "checkbox", label, templateOptions);
}

function select(key: string, label: string = "", options: Option[]) {
  return field(key, "select", label, { options: [{ label: "-" }, ...options] });
}
function requiredSelect(
  key: string,
  label: string = "",
  options: FormlyTemplateOptions = {},
  otherOptions = {}
) {
  return field(key, "select", label, { options, required: true }, otherOptions);
}

function multiSelect(
  key: string,
  label: string = "",
  options: any[],
  templateOptions = {}
) {
  return field(key, "select", label, {
    options,
    multiple: true,
    ...templateOptions
  });
}
function requiredMultiSelect(
  key: string,
  label: string = "",
  options: any[],
  templateOptions: FormlyTemplateOptions = {}
) {
  return multiSelect(key, label, options, {
    required: true,
    ...templateOptions
  });
}

function radio(
  key: string,
  label: string = "",
  options: any[],
  templateOptions: FormlyTemplateOptions = {}
) {
  return field(key, "radio", label, { options, ...templateOptions });
}

function requiredRadio(
  key: string,
  label: string = "",
  options: any[],
  templateOptions: FormlyTemplateOptions = {}
) {
  return field(key, "radio", label, {
    options,
    ...templateOptions,
    required: true
  });
}

function date(
  key: string,
  label: string,
  templateOptions: FormlyTemplateOptions = {},
  otherOptions: FormlyFieldConfig = {}
) {
  return field(key, "datepicker", label, templateOptions, otherOptions);
}

function requiredDate(
  key: string,
  label: string,
  templateOptions: FormlyTemplateOptions = {},
  otherOptions: FormlyFieldConfig = {}
) {
  return field(
    key,
    "datepicker",
    label,
    { ...templateOptions, required: true },
    otherOptions
  );
}

function textArea(
  key: string,
  label: string,
  templateOptions: FormlyTemplateOptions = {},
  otherOptions: FormlyFieldConfig = {}
) {
  return field(key, "textarea", label, templateOptions, otherOptions);
}
function requiredTextArea(
  key: string,
  label: string,
  templatOptions: FormlyTemplateOptions = {},
  otherOptions: FormlyFieldConfig = {}
) {
  return requiredField(key, "textarea", label, templatOptions, otherOptions);
}

export const formly = {
  field,
  requiredField,
  text,
  requiredText,
  number,
  requiredNumber,
  hidden,
  checkbox,
  requiredCheckbox,
  select,
  requiredSelect,
  multiSelect,
  requiredMultiSelect,
  radio,
  requiredRadio,
  date,
  requiredDate,
  textArea,
  requiredTextArea
};
