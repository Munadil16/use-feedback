"use client";

import { useSetRecoilState } from "recoil";
import { ratingAtom } from "@/store/atoms/rating";

export const StarNotFilledSVG = ({ index }: { index: number }) => {
  const setRating = useSetRecoilState(ratingAtom);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width="30px"
      height="30px"
      viewBox="0 0 32 32"
      version="1.1"
      className="cursor-pointer dark:invert"
      onClick={() => setRating(index)}
    >
      <g id="icomoon-ignore"></g>
      <path
        d="M19.38 12.803l-3.38-10.398-3.381 10.398h-11.013l8.925 6.397-3.427 10.395 8.896-6.448 8.895 6.448-3.426-10.395 8.925-6.397h-11.014zM20.457 19.534l2.394 7.261-6.85-4.965-6.851 4.965 2.64-8.005-0.637-0.456-6.228-4.464h8.471l2.606-8.016 2.605 8.016h8.471l-6.864 4.92 0.245 0.744z"
        fill="#000000"
      ></path>
    </svg>
  );
};
