import prismaClient from '../../database/prisma'

interface UserRequest{
  user_id: string;
  name: string;
  email:string;
  password:string;
  role_id:string;
}

class UpdateUsersService {
  async execute({user_id, name, email, password, role_id }: UserRequest) {

    if(!user_id){
      throw new Error("User incorrect")
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        id:user_id
      }
    }) 

    if(!userAlreadyExists){
      throw new Error("User not exists")
    }  

    const updateUser = await prismaClient.user.update({
      where: {
        id: user_id,
      },
      data: {
        name: name,
        email: email,
        password: password,
        role_id: role_id
      },
    })

    return updateUser;
  }
}
export { UpdateUsersService }