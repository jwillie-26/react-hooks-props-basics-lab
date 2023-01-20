
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
function App() {
    <div>
      <NavBar />
      <Home />
      <About />
      <About bio={user.bio} linkedIn={user.links.linkedin} github={user.links.github} />
      <User name={user.name} color={user.color} city={user.city} />
    </div>
  ;
}