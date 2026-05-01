

import User from '../Models/ProjectInquiry.js';





export const submitInquiry = async (req, res) => {
  
   const { fullName, email, phoneNumber, services, projectBudget, message } = req.body;

  try {
      
   

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'This email has already submitted an inquiry' });
    }

    const user = await User.create({ fullName, email, phoneNumber, services, projectBudget, message });

    // Notify admin & confirm to client
      const Make_API="https://hook.us2.make.com/o5ljbfkm8mjmwoy81q91lkmh9t6ffium"
      const MakaData={
         fullName:user.fullName,
         email:user.email,
         phoneNumber:user.phoneNumber,
         services:user.services,
         projectBudget:user.projectBudget,
         message:user.message
      }

    const response=await fetch(Make_API,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(MakaData)




    })
    const data=await response.json()
    
    if(!response.ok){
      throw Error("failed to post data")
    }
    console.log(data)

  
     

    res.status(201).json({ message: 'Inquiry submitted successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};