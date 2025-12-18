export const validateForm  = (email, password)=>{

    const isEmailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = true

    if(!isEmailvalid) return "EmailId is not valid" ;
    if(!isValidPassword) return "Password is not valid";

    return null;

}       