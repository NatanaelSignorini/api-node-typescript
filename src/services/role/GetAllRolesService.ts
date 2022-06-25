import prismaClient from '../../database/prisma'

class GetAllRolesService {
  async execute() {
    const Roles = await prismaClient.role.findMany()
    return Roles;
  }
  
}
export { GetAllRolesService }