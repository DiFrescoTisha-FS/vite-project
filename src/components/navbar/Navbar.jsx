import { useEffect, useState } from 'react';
import logo from '../../images/LOGO.png';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
  Nav, 
  NavbarContainer,
  NavLogo, 
  NavIcon,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavBtn,
  NavLinks,
  NavBtnLink 
} from './NavbarElements';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >+ 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

const toggleHome = () => {
  scroll.scrollToTop();
};

  return (
    <>
    <IconContext.Provider value={{ color: '#e1affd' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'>
                  <NavIcon src={logo} onClick={toggleHome} />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks 
                      to='bio'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80} 
                    >
                      Bio</NavLinks>
                  </NavItem>
                  <NavItem>
                  <NavLinks 
                      to='music'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80} 
                    >
                      Music</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to='new'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    New</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to='thoughts'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                      Thoughts</NavLinks>
              </NavItem>
  
              <NavItem>
                    <NavLinks 
                    to='comments'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                      Comments</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/quote" onClick={toggle}>Log In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;