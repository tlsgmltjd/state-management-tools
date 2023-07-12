import { useContext } from "react";
import { IUserContext, userInfoContext } from "../App";

export default function Information() {
  const { user }: IUserContext = useContext(userInfoContext);

  return (
    <div>
      <h1>--- Information</h1>
      <h2>
        name : {user?.name}, age : {user?.age}
      </h2>
    </div>
  );
}
