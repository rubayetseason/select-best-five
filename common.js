function getValueByFieldId(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldValueString = elementField.value;
    const elementFieldValue = parseFloat(elementFieldValueString);
    return elementFieldValue;
}