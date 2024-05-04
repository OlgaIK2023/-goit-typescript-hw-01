type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues:  Partial<User>): User {
    // Оновлення користувача
    const defaultUser: User = {
        surname: '',
        name: '',
        email: '',
        password: '',
      };
      return { ...defaultUser, ...initialValues };

  }
  
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });