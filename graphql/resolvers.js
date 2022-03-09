import { users, getById, getUsers, addUser, deleteUser } from "./db.js";
// query 를 resolve(해결) 하는 기능

const resolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, { id }) => getById(id),
  },
  Mutation: {
    addUser: (_, { name, age, gender }) => addUser(name, age, gender),
    deleteUser: (_, { id }) => deleteUser(id),
  },
};

export default resolvers;
