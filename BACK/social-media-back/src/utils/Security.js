const bcrypt = require("bcrypt");

module.exports = {
hashPassword: async (password, saltRounds ) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (error) {
      console.log(error.message);
    return null
  }

} , 

checkPassword : async (passwordUser , password )=>{

  const isMatch = await bcrypt.compare(passwordUser , password)
  console.log(isMatch);
  return isMatch

}

} 