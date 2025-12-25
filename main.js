const users = [
    {
      name: 'Moore Hensley',
      friends: ['Sharron Pace'],
      balance: 2811,
      skills: ['ipsum', 'lorem'],
    },
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Sharron Pace'],
      balance: 3821,
      skills: ['tempor', 'mollit', 'non'],
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry', 'Sharron Pace'],
      balance: 2278,
      skills: ['adipisicing', 'amet', 'anim'],
    },
    {
      name: 'Carey Barr',
      friends: ['Goldie Gentry', 'Briana Decker'],
      balance: 3951,
      skills: ['commodo', 'culpa', 'elit'],
    },
    {
      name: 'Blackburn Dotson',
      friends: ['Elma Head', 'Carey Barr'],
      balance: 1498,
      skills: ['ex', 'ipsum', 'lorem'],
    },
    {
      name: 'Sheree Anthony',
      friends: ['Briana Decker', 'Goldie Gentry'],
      balance: 2764,
      skills: ['irure', 'laborum', 'lorem'],
    },
    {
      name: 'Ross Vazquez',
      friends: ['Sharlene Bush', 'Elma Head'],
      balance: 3793,
      skills: ['nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam'],
    },
  ];
  





const calculateTotalBalance = users => {
    return users.reduce((sum, user) => sum + user.balance, 0);
  };
  
  console.log(calculateTotalBalance(users)); // 20916
  
  
  
  const getUsersWithFriend = (users, friendName) => {
    return users
      .filter(user => user.friends.includes(friendName))
      .map(user => user.name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker'));
  // [ 'Sharlene Bush', 'Sheree Anthony' ]
  
  console.log(getUsersWithFriend(users, 'Goldie Gentry'));
  // [ 'Elma Head', 'Sheree Anthony' ]
  
  
  
  const getNamesSortedByFriendsCount = users => {
    return [...users]
      .sort((a, b) => a.friends.length - b.friends.length)
      .map(user => user.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr',
  //   'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
  
  
  const getSortedUniqueSkills = users => {
    return users
      .flatMap(user => user.skills)
      .filter((skill, index, arr) => arr.indexOf(skill) === index)
      .sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit',
  //   'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit',
  //   'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
  