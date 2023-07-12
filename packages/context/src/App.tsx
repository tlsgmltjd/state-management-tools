import { createContext, useState } from "react";

interface IUserInfo {
  name?: string;
  age?: number;
}

const userInfoContext = createContext({});

function App() {
  const [user, setUser] = useState<IUserInfo>({});

  return (
    <userInfoContext.Provider
      value={{ user, setUser }}
    ></userInfoContext.Provider>
  );
}

export default App;
