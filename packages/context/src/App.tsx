import { createContext, useState } from "react";
import Container from "./components/Container";

export interface IUserContext {
  user?: IUserInfo;
  setUser?: React.Dispatch<React.SetStateAction<IUserInfo>>;
}

interface IUserInfo {
  name?: string;
  age?: number;
  major?: string;
}

export const userInfoContext = createContext({});

export default function App() {
  const [user, setUser] = useState<IUserInfo>({
    name: "jinheon",
    age: 16,
    major: "front-end",
  });

  return (
    <userInfoContext.Provider value={{ user, setUser }}>
      <Container />
    </userInfoContext.Provider>
  );
}

// App (contextAPI)

// - Container

// -- Box
// --- Information // name, age rendering

// -- Fotter // major rendering
// --- ButtonBox // modifiy context
