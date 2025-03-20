"use client"

import { useEffect, useState } from 'react';
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import styles from "./navbar.module.css"
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const routes = [
    {
      href: "/#onas",
      label: "O nas",
    },
    {
      href: '/#przykladowerealizacje',
      label: 'Przykładowe realizacje'
    },
    {
      href: '/#galeria',
      label: 'Galeria'
    },
    {
      href: '/#oferta',
      label: 'Oferta'
    },
    {
      href: "/#kontakt",
      label: "Kontakt",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        setIsScrolled(window.scrollY > 0)
      } else {
        setIsScrolled(true)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return (
    <header className={styles.header} style={{ backgroundColor: isScrolled ? "rgb(255, 255, 255)" : "transparent", backdropFilter: isScrolled ? "blur(2px)" : "blur(0px)", boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none" }}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink} onClick={closeMenu}>
            {/* <Image className={styles.mainImg} src={'/images/logo.jpeg'}
            width={130}
            height={50}
              alt='zwierzęta'
              style={{ objectFit: 'cover', borderRadius: 3 }} /> */}
            <span className={styles.brandText}><Image src={'/images/logo.jpeg'} width={200} height={100} alt='QbkoveLove - Kubki'/></span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={`${styles.navLink} ${pathname === route.href ? styles.activeLink : ""}`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.navActions}>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className={styles.mobileActions}>
          <div
            onClick={toggleMenu}
          >
            {isOpen ? <X className={styles.icon} /> : <Menu className={styles.icon} />}
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className={styles.mobileContainer}>
          <nav className={styles.mobileNav}>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`${styles.mobileNavLink} ${pathname === route.href ? styles.activeLink : ""}`}
                onClick={closeMenu}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

