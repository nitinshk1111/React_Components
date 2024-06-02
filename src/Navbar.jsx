import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="h-[60px] bg-slate-600 flex items-center px-4">
        <ul className="flex gap-6">
          <li>
            <Link to="/file">File</Link>
          </li>
          <li>
            <Link to="/board">Tic Tac toe</Link>
          </li>
          <li>
            <Link to="/progressBar">Progreess Bar</Link>
          </li>
          <li>
            <Link to="/autocomplete">AutoComplete</Link>
          </li>
        </ul>
      </nav>
      <div className="m-8">
        <Outlet className />
      </div>
    </div>
  );
};

export default Navbar;
