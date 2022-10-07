import { useRouter } from "next/router";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Styles from "../styles/Navbar.module.scss";
import Image from "next/image";
export default function TopNavbar() {
  const router = useRouter();
  const activeTab = (path) => {
    if (router.asPath === path) {
      return { color: "#2EE48D" };
    }
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={Styles.navcontainer}
        variant="dark"
        fixed="top"
      >
        <Container >
        
        <Link href="/" >
          <a>
          <div className="logocontainer">
            <Image
              src="/programmingster-nav-logo.png"
              alt="programmingster logo"
              width="275"
              height="51"
              priority={true}
            />
          </div>
          </a>
        </Link>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className={Styles.navitemscontainer}>
            <Nav >
               {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Nav.Item className={Styles.navitem}>
                <Link href="/" >
                  <a style={activeTab("/")}>Home</a>
                </Link>
              </Nav.Item>
              <Nav.Item className={Styles.navitem}>
                <Link href="/#categories">
                  <a style={activeTab("/#categories")}>Categories</a>
                </Link>
              </Nav.Item>
              <Nav.Item className={Styles.navitem}>
                <Link href="/about">
                  <a style={activeTab("/about")}>About</a>
                </Link>
              </Nav.Item>
              <Nav.Item className={Styles.navitem}>
                <Link href="/contact">
                  <a style={activeTab("/contact")}>Contact</a>
                </Link>
              </Nav.Item>
              <Nav.Item className={Styles.navitem}>
                <Link href="/privacypolicy" >
                  <a style={activeTab("/privacypolicy")}>Privacy Policy</a>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}
