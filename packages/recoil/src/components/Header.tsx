import { useRecoilState } from "recoil";
import { ITextItem, categoryState } from "../atoms";
import React from "react";

export default function Header() {
  const [category, setCategory] = useRecoilState(categoryState);

  return (
    <div>
      <h2>Header</h2>
      <select
        value={category}
        onChange={(e: React.FormEvent<HTMLSelectElement>) => {
          return setCategory(e.currentTarget.value as ITextItem["category"]);
        }}
      >
        <option value="ONE">ONE</option>
        <option value="TWO">TWO</option>
        <option value="THREE">THREE</option>
      </select>
    </div>
  );
}
