import { Moon, Settings, Sun } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title = "", subtitle = "" }) => {
  const [isDark, setIsDark] = React.useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));

  const handleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  React.useEffect(() => {
    function setThemeColor() {
      const html = document.querySelector("html");
      html.setAttribute("class", "");
      html.classList.add(theme);
      setTheme(localStorage.getItem("theme"));
    }

    setThemeColor();
  }, [theme]);

  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <div className="[&>*]:mb-0 ">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>

        <div className="flex items-center gap-6">
          <span>
            <button
              className="h-[20px] w-[45px] bg-primary rounded-2xl border border-line px-[2px] transition-all duration-500"
              onClick={handleTheme}
            >
              <span
                className={`${
                  isDark ? "" : "translate-x-6"
                } size-[16px] rounded-full bg-secondary grid place-content-center transition-all`}
              >
                {isDark ? (
                  <Sun size={14} stroke={"white"} />
                ) : (
                  <Moon size={14} stroke={"black"} />
                )}
              </span>
            </button>
          </span>
          <Link to="/admin/settings">
            <Settings />
          </Link>
          <button className="size-[30px] rounded-full bg-accent grid place-content-center text-white">
            ZM
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;