import React, { useContext, useState } from "react";
import { IUserContext, userInfoContext } from "../App";

export default function ButtonBox() {
  const { setUser }: IUserContext = useContext(userInfoContext);
  const [major, setMajor] = useState("front-end");

  const onClick = () => {
    if (setUser) setUser((preUser) => ({ ...preUser, major: major }));
  };

  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setMajor(e.currentTarget.value);
  };

  return (
    <div>
      <h1>--- ButtonBox</h1>
      <select value={major} onInput={onInput}>
        <option value="front-end">front-end</option>
        <option value="back-end">back-end</option>
        <option value="design">design</option>
      </select>
      <button onClick={onClick}>motify name</button>
    </div>
  );
}
