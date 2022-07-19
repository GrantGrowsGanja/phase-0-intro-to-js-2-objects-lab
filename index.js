const employee = {
    name: 'Grant Ours',
    streetAddress: '6412 S Field Way',
}

function updateEmployeeWithKeyAndValue(object,key,value) {
    const newEmployee = {...object};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object,key,value) {
    const newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object,key,value) {
    delete object[key];
    return object;
}