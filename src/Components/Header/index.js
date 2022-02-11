import "./Header.scss";
import SwitchMode from "./SwitchMode,";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={themeContext.valueTheme.theme}>
      <div className="header">
        <Link to={`/`}>
          <span>Where is the word ?</span>
        </Link>
        <SwitchMode />
      </div>
    </div>
  );
}
export default Header;
