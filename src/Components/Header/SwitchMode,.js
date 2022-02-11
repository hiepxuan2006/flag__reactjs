import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../App";
import "./SwitchStyle.scss";

function SwitchMode() {
  const themeContext = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(false);
  // useEffect(() => {
  //   refInput.current.checked = isDark;
  // }, [isDark]);
  const refInput = useRef();
  const refCircle = useRef();
  const refTongle = useRef();
  const handleTongle = () => {
    refInput.current.checked = !refInput.current.checked;
    setIsDark(refInput.current.checked);
    themeContext.valueTheme.tongleTheme();
  };
  useEffect(() => {
    const changeBackground = () => {
      if (isDark) {
        refCircle.current.style.background = "#222";
        refTongle.current.style.background = "#fff";
      } else {
        refCircle.current.style.background = "#fff";
        refTongle.current.style.background = 'var(--backgroundButton)';
      }
    };
    changeBackground();
    document.addEventListener("resize", changeBackground);
    return () => {
      document.removeEventListener("resize", changeBackground);
    };
  }, [isDark]);
  return (
    <div className="header__right" ref={refTongle} onClick={handleTongle}>
      <input className="input" type="checkbox" ref={refInput} />
      <div className="icon">
        {isDark ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </div>
      <div ref={refCircle} className="circle"></div>
    </div>
  );
}

export default SwitchMode;
