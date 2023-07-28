import React from "react";

function Footer() {
  return (
    <footer className="text-center py-8 dark:bg-gray-900 dark:text-white">
      <p>
        {"Inspired by "}
        <a
          href="https://www.figma.com/@theyshshrma"
          target={"_blank"}
          rel="noreferrer"
          className="font-semibold underline"
        >
          {" Yash's "}
        </a>
        design
      </p>

      <pre className="flex flex-row justify-center">
        Dev with{" "}
        <svg
          class="w-6 h-6"
          fill="red"
          stroke="red"
          viewBox="0 0 24 24"
          xmlns="htt://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
        {" by "}
        <a
          href="https://www.lucasjandrey.com/"
          className="font-semibold underline"
          target={"_blank"}
          rel="noreferrer"
        >
          Lucas Jandrey
        </a>
      </pre>
    </footer>
  );
}

export default Footer;
