function ValidatePassword(password)
{
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  
  if (!strongRegex.test(password))
  {
        return false;
    } 
    else if (password.length < 8)
    {
        return false;
    }
    else
    {
      return true;
    }
}

export default ValidatePassword;