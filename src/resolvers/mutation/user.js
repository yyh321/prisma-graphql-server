export default {
  // 创建用户
  createUser: (root, args, { prisma }) => {
    return prisma.createUser(args)
  }
}
