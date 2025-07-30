import "./App.css";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <>
      <UserCard name="sinjwu" job="Programmer" imageSrc="avatar.webp" />
      <UserCard name="신정욱" job="자택경비원" imageSrc="avatar2.webp" />
    </>
  );
};

export default App;
