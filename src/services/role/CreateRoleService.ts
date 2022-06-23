import prismaClient from '../../database/prisma'

interface RoleRequest{
  name: string;
}

class CreateRoleService {
  async execute({ name }: RoleRequest){
    
    if(!name){
      throw new Error("Role name incorrect")
    }
    const roleAlreadyExists = await prismaClient.role.findFirst({
      where:{
        name:name
      }
    }) 

    if(roleAlreadyExists){
      throw new Error("Role name already exists")
    }  
    
    const role = await prismaClient.role.create({
      data:{
        name:name
      }
    })


    return role;
  }
}
export { CreateRoleService }