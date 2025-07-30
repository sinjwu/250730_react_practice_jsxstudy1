import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    name: "sinjwu",
    job: "Programmer",
    imageSrc: "avatar.webp",
  },
  {
    name: "신정욱",
    job: "자택경비원",
    imageSrc: "avatar2.webp",
  },
  {
    name: "월문",
    job: "반수생",
    imageSrc: "avatar3.jpeg",
  },
];

const App = () => {
  return (
    <>
      <UserCard
        name={userData[0].name}
        job={userData[0].job}
        imageSrcame={userData[0].imageSrc}
      />
      <UserCard
        name={userData[1].name}
        job={userData[1].job}
        imageSrcame={userData[1].imageSrc}
      />
      <UserCard
        name={userData[2].name}
        job={userData[2].job}
        imageSrcame={userData[2].imageSrc}
      />
    </>
  );
};

export default App;
