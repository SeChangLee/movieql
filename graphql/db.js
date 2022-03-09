export let users = [
  {
    id: 1,
    name: "Thomas",
    age: 22,
    gender: "female",
  },
  {
    id: 2,
    name: "Test",
    age: 23,
    gender: "male",
  },
  {
    id: 3,
    name: "Ohmy",
    age: 20,
    gender: "female",
  },
  {
    id: 4,
    name: "Leave",
    age: 20,
    gender: "female",
  },
  {
    id: 5,
    name: "Summuy",
    age: 18,
    gender: "male",
  },
  {
    id: 6,
    name: "Kimpong",
    age: 22,
    gender: "male",
  },
  {
    id: 7,
    name: "Leeyo",
    age: 22,
    gender: "female",
  },
];

export const getUsers = () => users;

export const getById = (id) => {
  const filterUser = users.filter((user) => user.id === id);
  return filterUser[0];
};

export const deleteUser = (id) => {
  const cleanedUsers = users.filter((user) => user.id !== id);
  if (users.length > cleanedUsers.length) {
    users = cleanedUsers;
    return true;
  }
  return false;
};

export const addUser = (name, age, gender) => {
  const newUser = {
    id: users.length + 1,
    name,
    age,
    gender,
  };
  users.push(newUser);
  return newUser;
};
