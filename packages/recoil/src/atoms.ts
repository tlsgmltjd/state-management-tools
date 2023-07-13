import { atom, selector } from "recoil";

export interface ITextItem {
  text: string;
  category: "ONE" | "TWO" | "THREE";
  id: number;
}

export const textListState = atom<ITextItem[]>({
  key: "numberListState",
  default: [
    { id: 13, text: "Asd", category: "ONE" },
    { id: 323, text: "Asd", category: "ONE" },
    { id: 423, text: "Asd", category: "ONE" },
    { id: 623, text: "Asd", category: "THREE" },
    { id: 723, text: "Asd", category: "THREE" },
  ],
});

export const categoryState = atom<"ONE" | "TWO" | "THREE">({
  key: "categoryState",
  default: "ONE",
});

export const textListSelector = selector({
  key: "numberSelector",
  get: ({ get }) => {
    const textList = get(textListState);
    const category = get(categoryState);

    return textList.filter((item) => item.category === category);
  },
});
