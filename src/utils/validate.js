

export const checkValidData = (email, password)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    //const isMobileValid = /^[6-9]\d{9}$/.test(mobile)

    if (!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    // if(!isNameValid) return "Name is not valid"
   // if(!isMobileValid) return "Mobile number is not valid"
    
    return null;

}