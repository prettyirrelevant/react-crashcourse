import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <Link to="/" className="font-bold">
        React CrashCourse
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
