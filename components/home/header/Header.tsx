import React, { useState } from "react";
import Link from "next/link";
import { Menu, Close } from "@mui/icons-material";
import styles from "./Header.module.scss";
import Image from "next/image";

interface HeaderProps {
  onNavItemClick: (item: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavItemClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Services");

  const menuItems = ["Services", "Products", "Development", "Payment", "Contact"];

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    onNavItemClick(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Left Side - Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="https://www.thebasics.co.in/images/logo.png"
            alt="The Basics Logo"
            width={150}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <Link
            key={item}
            href=""
            className={`${styles.navItem} ${activeItem === item ? styles.activeNavItem : ""}`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className={styles.menuIcon}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? <Close /> : <Menu />}
      </button>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.showMobileNav : ""}`}>
        {menuItems.map((item) => (
          <Link
            key={item}
            href=""
            className={`${styles.navItem} ${activeItem === item ? styles.activeNavItem : ""}`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
};
