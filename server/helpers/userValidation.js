const userValidation = {};

userValidation.validate = (username, password) => {
    if(username.length < 3) {
        return "Username has to be at least 3 characters.";
    } else if (password.length < 5) {
        return "Password has to be at least 5 characters.";
    } 
    return true;
} 


export default userValidation;
