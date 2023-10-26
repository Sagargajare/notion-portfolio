import React, { useState } from "react";
import * as types from 'notion-types';
import { parsePageId } from "notion-utils";
export interface TableOfContentsEntry {
  id: types.ID;
  type: types.BlockType;
  text: string;
  indentLevel: number;
}
const Navbar = ({ navItems }: { navItems: TableOfContentsEntry[] }) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className="navbar"
      style={{
        height: showLinks ? "100%" : "auto",
      }}
    >
      <div className="container">
        <div className="logo-con">
          <div className="logo">Saga</div>
          <div className="hamburger" onClick={toggleNavLinks}>
            {showLinks ? (
              <div className="cross"></div>
            ) : (
              <>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </>
            )}
          </div>
        </div>
        <div className={`nav-links ${showLinks ? "active" : ""}`}>
          {navItems.map((dt,idx) => (
            <a key={idx} href={`/#`+dt.id.replaceAll("-","")}>
              {dt.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
