const validation = (values) => {
    let errors = {};
    errors.hasError = false;
    if(values.firstName === ""){
        errors.firstName= "First name is required!";
        errors.hasError = true;
    }else if(values.firstName.length < 3){
        errors.firstName="First name must be at least 3 characters!";
        errors.hasError = true;
    }

    if(values.lastName === ""){
        errors.lastName= "Last Name is required!";
        errors.hasError = true;
    }else if(values.lastName.length < 3){
        errors.lastName="Last name must be at least 3 characters!";
        errors.hasError = true;
    }

    if(values.birthday === ""){
        errors.birthday = "Date of Birth is required!";
        errors.hasError = true;
    }

    if(values.gender === ""){
        errors.gender = "Gender is required!";
        errors.hasError = true;
    }

    if(values.nif === ""){
        errors.nif = "Nif is required!";
        errors.hasError = true;
    }else if(values.nif.length < 9 || values.nif.length > 9){
        errors.nif = "Nif must have 9 characters!";
        errors.hasError = true;
    }else if(/[a-zA-Z]/.test(values.nif)){
        errors.nif = "Nif must have only numbers!";
        errors.hasError = true;

    }

    if(values.cellphone === ""){
        errors.cellphone = "Cellphone is required!";
        errors.hasError = true;

    }else if(/[a-zA-Z]/.test(values.cellphone)){
        errors.cellphone = "Cellphone must have only numbers!";
        errors.hasError = true;

    }else if(values.cellphone.length < 9 || values.cellphone.length > 9){
        errors.cellphone = "Cellphone must have 9 characters!";
        errors.hasError = true;
    }

    if(values.streetAddress === ""){
        errors.streetAddress = "Street Address is required!";
        errors.hasError = true;
    }

    if(values.zipcode === ""){
        errors.zipcode = "Zip Code is required!";
        errors.hasError = true;
    }else if(/[a-zA-Z]/.test(values.zipcode)){
        errors.zipcode = "Zip Code must have only numbers!";
        errors.hasError = true;
    }else if(values.zipcode.length < 8 || values.zipcode.length > 8){
        errors.zipcode = "Zip Code must have 8 characters!";
        errors.hasError = true;
    }

    let regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/; 
    if(values.email === ""){
        errors.email="Email is required!";
        errors.hasError = true;
    }else if (regexEmail.test(values.email) === false){
        errors.email="Email is invalid!"
        errors.hasError = true;
    }

    if(values.photo === ""){
        errors.photo = "Photo is required!";
        errors.hasError = true;
    }
    return errors;
};
export default validation;