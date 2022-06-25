import prismaClient from '../../database/prisma'

interface RoleRequest{
  role_id: string;
  name: string;
  description: string;
}

class UpdateRolesService {
  async execute({role_id, name, description }: RoleRequest) {

    if(!role_id){
      throw new Error("Role role_id incorrect")
    }

    const roleAlreadyExists = await prismaClient.role.findFirst({
      where:{
        id:role_id
      }
    }) 

    if(!roleAlreadyExists){
      throw new Error("Role not exists")
    }  

    const updateRole = await prismaClient.role.update({
      where: {
        id: role_id,
      },
      data: {
        name: name,
        description:description,
      },
    })

    return updateRole;
  }
}
export { UpdateRolesService }