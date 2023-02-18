import { ReactNode } from "react";

export function Button(props: { children: ReactNode }) {
  function handleClick() {
    console.info("Button is clicked by");
  }

  return (
    <button
      onClick={handleClick}
      className="rounded bg-teal-500 px-3 py-2 text-white hover:bg-teal-600"
    >
      {props.children}
    </button>
  );
}
