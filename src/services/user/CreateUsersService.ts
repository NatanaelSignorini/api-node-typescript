import { hash } from 'bcrypt';
import prismaClient from '../../database/prisma'

interface UserRequest{
  name: string;
  email: string;
  password: string;
  role_id: string;
}

class CreateUsersService {
  async execute({ name, email, password, role_id }: UserRequest){
    
    if(!name){
      throw new Error("User name incorrect")
    }
    if(!email){
      throw new Error("User email incorrect")
    }
    if(!password){
      throw new Error("User password incorrect")
    }
    if(!role_id){
      throw new Error("User role incorrect")
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email:email
      }
    }) 

    if(userAlreadyExists){
      throw new Error("User email already exists")
    }  
    
    const passwordHash = await hash(password, 12)
    
    const user = await prismaClient.user.create({
      data:{
        role_id: role_id,
        name:name,
        email:email,
        password:passwordHash

      }
    })


    return user;
  }
}
export { CreateUsersService }