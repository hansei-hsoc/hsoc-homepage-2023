import { PrismaClient } from '@prisma/client';

// let prisma: PrismaClient | null = null;

// if (typeof window === 'undefined') {
//   if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient();
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient();
//     }

//     prisma = global.prisma;
//   }
// }

// export default prisma;


const prisma = new PrismaClient();

export default prisma;

export const student = prisma?.student;
