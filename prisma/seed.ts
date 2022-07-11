import { PrismaClient } from "@prisma/client";
import { hash } from 'bcrypt';


const prisma = new PrismaClient();

async function main() {

  // Create Role
  await prisma.role.create({
    data: {
      name: 'Admim',
      description: 'Admin Profile'
      
    }
  })
  await prisma.role.create({
    data: {
      name: 'User',
      description: 'User Profile',
    }
  })  


  const role = await prisma.role.findMany({
    where: {
      name: 'Admim',
    },
    select: {
      id: true
    }
  })

  // Create User
  // Create password
  const passwordHash = await hash('admin', 12)
  await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin@admin.com',
      password: passwordHash,
      emailConfirmed: true,
      role_id: role[0].id
    }
  })

}

main().catch((e) =>{
  console.error(e);
  process.exit(1);
})
.finally(async () =>{
  await prisma.$disconnect();
});