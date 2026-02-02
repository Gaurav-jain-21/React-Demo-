const EventHandler = () => {
  const handleClick = () => console.log("you clicked me");
  return <button onClick={handleClick}>Click</button>;
};
export default EventHandler;
