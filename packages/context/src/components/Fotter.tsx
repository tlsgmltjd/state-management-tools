import { useContext } from "react";
import ButtonBox from "./ButtonBox";
import { IUserContext, userInfoContext } from "../App";

export default function Fotter() {
  const { user }: IUserContext = useContext(userInfoContext);

  return (
    <div>
      <h1>-- Fotter</h1>
      <h3>major : {user?.major}</h3>
      <ButtonBox />
    </div>
  );
}
