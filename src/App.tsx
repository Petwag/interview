import { BaseSyntheticEvent, useState } from "react";

type User = {
  name: string;
  age: number;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}, {user.age}
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e: BaseSyntheticEvent) => {
          const name = e.target.elements.name.value;
          const age = e.target.elements.age.value;
          addUser({ name, age });
          e.target.reset();
        }}
      >
        <label htmlFor="name">name: </label>
        <input type="text" name="name" />
        <br></br>
        <label htmlFor="age">age: </label>
        <input type="number" name="age" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default App;
