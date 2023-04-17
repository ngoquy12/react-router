import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ContactUser from "./Components/ContactUser";
import ContactItem from "./Components/ContactItem";
import ContactIndex from "./Components/ContactIndex";
import NotFound from "./Components/NotFound";
import Product from "./Components/Product";

function App() {
  const navLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#bd1825" : "#c8c8c8",
    color: isActive ? "#c8c8c8" : "#bd1825",
  });

  const navLinkStyleChil = ({ isActive }) => ({
    backgroundColor: isActive ? "red" : "black",
    color: isActive ? "black" : "red",
  });
  return (
    <div>
      {/* Sử dụng Link */}
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            <ul>
              <li>
                <Link to="/contact/contactUser">Contact User</Link>
              </li>
              <li>
                <Link to="/contact/contactItem">Contact Item</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}

      {/* Sử dụng navLink */}
      <div>
        <ul>
          <li>
            <NavLink to="/" style={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={navLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={navLinkStyle}>
              Contact
            </NavLink>
            <ul>
              <li>
                <NavLink to="/contact/contactUser" style={navLinkStyleChil}>
                  Contact User
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact/contactItem" style={navLinkStyleChil}>
                  Contact Item
                </NavLink>
              </li>
            </ul>
          </li>

          {/* <li>
            <NavLink to="/product">Product</NavLink>
          </li> */}
          <Product />
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}>
          {/* Index Router */}
          <Route index element={<ContactIndex />}></Route>
          {/* Nested Router */}
          <Route path="contactUser" element={<ContactUser />}></Route>
          <Route path="contactItem" element={<ContactItem />}></Route>
        </Route>

        {/* <Route path="/product" element={<Product />}></Route> */}

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
