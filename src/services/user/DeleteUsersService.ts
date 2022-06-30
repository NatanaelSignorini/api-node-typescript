import prismaClient from '../../database/prisma'

interface UserRequest{
  id: string;
}

class DeleteUsersService {
  async execute({ id }: UserRequest) {
    if(!id){
      throw new Error("User incorrect")
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        id:id
      }
    }) 

    if(!userAlreadyExists){
      throw new Error("user not exists")
    }  

    const deleteUser = await prismaClient.user.delete({
      where: {
        id: id,
      },
    })

    return deleteUser;

  }
}
export { DeleteUsersService }