import { Users } from "../interfaces/user";

const usersData: Users[] = [
    { id: 1, name: 'Usuário 1' },
    { id: 2, name: 'Usuário 2' },
    { id: 3, name: 'Usuário 3' },
  ];
  
  export const getUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(usersData);
      }, 1000); 
    });
  };
  