import { atom } from "recoil";

export const newProductAtom = atom({
  key: "newProductAtom",
  default: {
    name: "",
    title: "Title goes here",
    message: "Your custom message goes here",
  },
});
