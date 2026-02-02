import { useState } from "react";
const Example2 = () => {
  const [friends, setFriends] = useState(["Ashif", "Vikash"]);
  const AddFriend = () => {
    setFriends([...friends, "Ram"]);
  };
  const RemoveFriend = () => {
    setFriends(friends.filter((f) => f !== "Vikash"));
  };
  const UpdateFriend = () => {
    setFriends(
      friends.map((f) => (f === "Vikash" ? "Vikash Kumar Sharma" : f)),
    );
  };
  return (
    <section>
      {friends.map((f, index) => (
        <li key={index}> {f}</li>
      ))}
      <br />

      <button onClick={AddFriend}>Add new Friend</button>
      <button onClick={RemoveFriend}>Remove Friend</button>
      <button onClick={UpdateFriend}>Update Friend</button>
    </section>
  );
};
export default Example2;
