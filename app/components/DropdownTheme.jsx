"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const DropdownTheme = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn m-1 btn-sm">
        Temas
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-1 shadow-2xl bg-base-300 rounded-box"
      >
        <li>
          <button
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            onClick={() => changeTheme('light')}
            value="default">Light</button>
        </li>
        <li>
          <button
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            onClick={() => changeTheme('dark')}
            value="dark">Dark</button>
        </li>
        <li>
          <button
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dracula"
            value="dracula"
            onClick={() => changeTheme('dracula')}
          >Dracula</button>
        </li>
        <li>
          <button
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
            onClick={() => changeTheme('retro')}
          >Retro</button>
        </li>
        <li>
          <button
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            onClick={() => changeTheme('cyberpunk')}
          >Cyberpunk</button>
        </li>
        <li>
          <button
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Valentine"
            value="valentine"
            onClick={() => changeTheme('valentine')}
          >Valentine</button>
        </li>
        <li>
          <button
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Aqua"
            value="aqua"
            onClick={() => changeTheme('aqua')}
          >Aqua</button>
        </li>
      </ul>
    </div>
  );
};
