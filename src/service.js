import data from './data/posts.json';

const getUsers = () => {
  let usersData = [];
  data.forEach((country) => country.state.forEach((state) => {
      state.users.forEach((user) => {
        const u = {
          fullName: user.fullName,
          balance: user.balance,
          isActive: user.isActive,
          registered: user.registered,
          state: state.name,
          country: country.country,
        }
        usersData.push(u);
    });
  }));
  return usersData
}

export {getUsers}