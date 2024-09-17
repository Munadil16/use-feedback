"use client";

import { HashLoader } from "react-spinners";

export default function Loader() {
  return (
    <HashLoader
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
      speedMultiplier={2}
    />
  );
}
