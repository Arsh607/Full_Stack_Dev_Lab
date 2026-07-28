import { NavLink } from "react-router-dom";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/employees">Employees</NavLink>
        <NavLink to="/organization">Organization</NavLink>
      </div>

      <div className="auth-links">
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button type="button">Log In</button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button type="button">Register</button>
          </SignUpButton>
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}

export default Navbar;