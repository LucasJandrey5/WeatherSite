import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/home";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center">
        <Header />
        <Home />
        <div className="flex flex-wrap justify-center">
          <Card location="London" />
          <Card location="Brasilia" />
          <Card location="Peru" />
          <Card location="China" />
        </div>
        <footer className="text-center my-8">
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
              href="https://github.com/LucasJandrey5"
              className="font-semibold underline"
              target={"_blank"}
              rel="noreferrer"
            >
              Lucas Jandrey
            </a>
          </pre>
        </footer>
      </div>
    </div>
  );
}

export default App;
