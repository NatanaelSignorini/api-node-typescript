import prismaClient from '../../database/prisma'

class GetAllUsersService {
  async execute() {
    const Roles = await prismaClient.user.findMany()
    return Roles;
  }
  
}
export { GetAllUsersService }