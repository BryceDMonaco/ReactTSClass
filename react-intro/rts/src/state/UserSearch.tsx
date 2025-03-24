import { useState } from "react";

const users = [
  { name: "Samus", armor: "Varia" },
  { name: "Master Chief", armor: "Mk VI" },
  { name: "Isaac", armor: "Engineer Rig" },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<
    { name: string; armor: string } | undefined
  >();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name} wears {user && user.armor}
      </div>
    </div>
  );
};

export default UserSearch;
