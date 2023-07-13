import { textListSelector } from "../atoms";
import { useRecoilValue } from "recoil";

export default function ListBox() {
  const textList = useRecoilValue(textListSelector);

  return (
    <div>
      <h3>ListBox</h3>
      {textList[0] ? (
        <ul>
          {textList.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      ) : (
        <div>아직 작성된 자료가 없어요!</div>
      )}
    </div>
  );
}
