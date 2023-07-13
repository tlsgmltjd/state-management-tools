import { atom, selector } from "recoil";

type categoryType = "ONE" | "TWO" | "THREE";

export interface ITextItem {
  text: string;
  category: categoryType;
  id: number;
}

export const textListState = atom<ITextItem[]>({
  key: "numberListState",
  default: [],
});

export const categoryState = atom<categoryType>({
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
