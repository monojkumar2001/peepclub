import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  return (
    // <!-- =====================Navigation=========== -->
    <header className="header">
        <nav className="navigation">
          <div className="logo logo-nav">
            <Link to='/' className="logo-link">
            <img src="/images/logo.png" alt="" />
            </Link>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
             <img src="./images/close.svg" alt="" />
            </div>
            <ul className="menu-nav-ul">
              <li className="nav-list" >
                <HashLink to="/">
                  <a href="" className="nav-link" onClick={_toggleSidebar}>
                    <img src="/images/twitter.svg" alt="" />
                  </a>
                </HashLink>
              </li>
              <li className="nav-list" >
                <HashLink to="/faq">
                  <a href="/faq" className="nav-link" onClick={_toggleSidebar}>
                   FAQ
                  </a>
                </HashLink>
              </li>
       <li>
       <Link to='' onClick={_toggleSidebar}>
              <a href="" className="custom-btn connect-wallet-btn">
                  <span>Connect Wallet</span>
                  <img src="./images/arrow-right.svg" alt="" />
              </a>
           </Link>
       </li>
            </ul>
         
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <img src="./images/menu.svg" alt="" />
          </div>
        </nav>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
