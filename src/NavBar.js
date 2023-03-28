// import {Link} from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

export default function NavBar(){

return (<>
<Navbar dark expand="md">
<Nav className="mr-auto" navbar>
            <NavItem>
  <NavLink href={process.env.PUBLIC_URL +'/draws'}>Readings</NavLink>
  </NavItem>
  <NavItem>
  <NavLink href={process.env.PUBLIC_URL +"/draws/new"}>New Draw</NavLink>
  </NavItem>
  <NavItem>
  <NavLink href={process.env.PUBLIC_URL +"/cards"}>Random Card</NavLink>
  </NavItem>
  <NavItem>
  <NavLink href={process.env.PUBLIC_URL +"/majorarcana"}>Major Arcana</NavLink>
  </NavItem>
  <NavItem >
  <NavLink  href={process.env.PUBLIC_URL +"/minorarcana"}>Minor Arcana</NavLink>
  </NavItem>
  </Nav>
  {/* <Link to="/draws" className="NavLink">Readings</Link>
  <Link to="/draws/new" className="NavLink">New Draw</Link>
  <Link to="/cards" className="NavLink">Random Card</Link>
  <Link to="/majorarcana" className="NavLink">MajorArcana</Link>
  <Link to="/minorarcana" className="NavLink">MinorArcana</Link> */}
</Navbar>
</>)
}