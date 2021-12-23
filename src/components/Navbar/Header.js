import React, { useState, useEffect } from 'react';
import { NavLink as Link, useHistory } from 'react-router-dom';
import classes from './Header.module.scss';
import { RiMenu4Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

function Header() {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6435b5110195189.5fe7f7e488ef3.png"
            alt="Icon Illustrator portrait" className={classes.header__content__logo} />
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/" onClick={menuToggleHandler}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={menuToggleHandler}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" onClick={menuToggleHandler}>
                                Work
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <RiMenu4Fill onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>

    // <header className={classes.header}>
    //   <div className={classes.header__content}>
    //     <Link to="/" className={classes.header__content__logo}>
    //       <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6435b5110195189.5fe7f7e488ef3.png"
    //         alt="Icon Illustrator portrait" className={classes.header__content__logo} />
    //     </Link>
    //     <nav
    //       className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""
    //         }`}
    //     >
    //       <ul>
    //         <li>
    //           <Link to="/about" onClick={menuToggleHandler}>
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/contact" onClick={menuToggleHandler}>
    //             Contact
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/work" onClick={menuToggleHandler}>
    //             Work
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <div className={classes.header__content__toggle}>
    //       {!menuOpen ? (
    //         <RiMenu4Fill onClick={menuToggleHandler} />
    //       ) : (
    //         <AiOutlineClose onClick={menuToggleHandler} />
    //       )}
    //     </div>
    //   </div>
    // </header>
  )




  // const [menuOpen, setMenuOpen] = useState(true);

  // const menuToggleHandler = () => {
  //   setMenuOpen((p) => !p);
  // }

  // return (
  //   <header className={classes.header}>
  //     <div className={classes.header__content}>
  //       <Link to="/">
  //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6435b5110195189.5fe7f7e488ef3.png"
  //           alt="Icon Illustrator portrait" className={classes.header__content__logo} />
  //       </Link>
  //     </div>
  //     <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
  //       <ul>
  //         <li><Link className={classes.header__content__nav__under} to="/" activeStyle>About</Link></li>
  //         <li><Link className={classes.header__content__nav__under} to="/contact">Contact</Link></li>
  //         <li><Link className={classes.header__content__nav__under} to="/work">Work</Link></li>
  //       </ul>
  //     </nav>
  //     <div>
  //       {!menuOpen ? (<RiMenu4Fill onClick={menuToggleHandler} className={classes.header__content__toggle} />
  //       ) : (
  //         <AiOutlineClose onClick={menuToggleHandler} className={classes.header__content__toggle} />)}
  //     </div>
  //   </header>
  // )
}

export default Header
