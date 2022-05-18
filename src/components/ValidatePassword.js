export default function ValidatePassword(password)
{
  console.log('Email: ',password);
  const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

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