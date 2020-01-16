export default {
  userSubscribe: {
    subscribe: (root, args, { prisma }) => {
      return prisma.$subscribe
        .user({
          mutation_in: ["CREATED", "DELETED", "UPDATED"]
        })
        .node()
    },
    resolve: payload => {
      return payload
    }
  }
}
