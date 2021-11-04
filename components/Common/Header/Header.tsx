import React from "react";
import Link from "next/link";

export const Header = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.node.id}>
            <Link href={item.node.path}>
              <a>{item.node.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
