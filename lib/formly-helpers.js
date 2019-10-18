function field(key, type = "input", label = "", templateOptions = {}, otherOptions = {}) {
    const returner = { key, type };
    returner.templateOptions = Object.assign({ label }, templateOptions);
    const className = `formly-${key}`;
    otherOptions.className = otherOptions.className
        ? `${otherOptions.className} ${className}`
        : className;
    return Object.assign(Object.assign({}, returner), otherOptions);
}
function requiredField(key, type = "input", label = "", templateOptions = {}, otherOptions = {}) {
    return field(key, type, label, Object.assign(Object.assign({}, templateOptions), { required: true }), otherOptions);
}
function text(key, label, templateOptions = {}) {
    return field(key, "input", label, templateOptions);
}
function number(key, label, templateOptions = {}, otherOptions = {}) {
    return field(key, "input", label, templateOptions, Object.assign(Object.assign({}, otherOptions), { parsers: [input => +input.replace(",", ".")] }));
}
function required(key, label, templatOptions = {}, otherOptions = {}) {
    return requiredField(key, "input", label, templatOptions, otherOptions);
}
function hidden(key) {
    return { key, type: "input", hide: true };
}
function checkbox(key, label, templateOptions = {}) {
    return field(key, "checkbox", label, templateOptions);
}
function select(key, label = "", options) {
    return field(key, "select", label, { options: [{ label: "-" }, ...options] });
}
function requiredSelect(key, label = "", options = {}, otherOptions = {}) {
    return field(key, "select", label, { options, required: true }, otherOptions);
}
function multiSelect(key, label = "", options, templateOptions = {}) {
    return field(key, "select", label, Object.assign({ options, multiple: true }, templateOptions));
}
function requiredMultiSelect(key, label = "", options, templateOptions = {}) {
    return multiSelect(key, label, options, Object.assign({ required: true }, templateOptions));
}
function radio(key, label = "", options, templateOptions = {}) {
    return field(key, "radio", label, Object.assign({ options }, templateOptions));
}
function date(key, label, templateOptions = {}, otherOptions = {}) {
    return field(key, "datepicker", label, templateOptions, otherOptions);
}
function textArea(key, label, templateOptions = {}, otherOptions = {}) {
    return field(key, "textarea", label, templateOptions, otherOptions);
}
function requiredTextArea(key, label, templatOptions = {}, otherOptions = {}) {
    return requiredField(key, "textarea", label, templatOptions, otherOptions);
}
function shiftDate(key, label, templateOptions = {}, otherOptions = {}) {
    return field(key, "shiftDate", label, templateOptions, otherOptions);
}
function requiredShiftDate(key, label, templateOptions = {}, otherOptions = {}) {
    return shiftDate(key, label, Object.assign({ required: true }, templateOptions), otherOptions);
}
export const formly = {
    field,
    requiredField,
    text,
    required,
    number,
    hidden,
    checkbox,
    select,
    requiredSelect,
    multiSelect,
    requiredMultiSelect,
    radio,
    date,
    textArea,
    requiredTextArea,
    shiftDate,
    requiredShiftDate
};
