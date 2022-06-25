import prismaClient from '../../database/prisma'

interface RoleRequest{
  role_id: string;
}

class DeleteRolesService {
  async execute({ role_id }: RoleRequest) {

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

    const deleteRole = await prismaClient.role.delete({
      where: {
        id: role_id,
      },
    })

    return deleteRole;

  }
}
export { DeleteRolesService }