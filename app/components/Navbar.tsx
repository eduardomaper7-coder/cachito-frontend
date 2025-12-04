"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        flex justify-between items-center px-6 py-4
        ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      {/* LOGO */}
      <h1 className="text-white text-xl font-semibold tracking-wide">
        Órdago Getafe
      </h1>

      {/* MENÚ DESKTOP CENTRADO */}
      <ul className="hidden md:flex gap-10 text-white text-lg mx-auto">
        <li><a href="#carta" className="hover:opacity-70">Carta</a></li>
        <li><a href="#favoritos" className="hover:opacity-70">Favoritos del chef</a></li>
        <li><a href="#contacto" className="hover:opacity-70">Contacto y reservas</a></li>
        <li><a href="#novedades" className="hover:opacity-70">Novedades</a></li>
        <li><a href="#conocenos" className="hover:opacity-70">Conócenos</a></li>
      </ul>

      {/* BOTÓN HAMBURGUESA (solo móvil) */}
      <button
        className="space-y-1.5 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-7 h-0.5 bg-white"></span>
        <span className="block w-7 h-0.5 bg-white"></span>
        <span className="block w-7 h-0.5 bg-white"></span>
      </button>

      {/* MENÚ MÓVIL CENTRADO */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 text-white py-6 md:hidden">
          <ul className="flex flex-col gap-6 text-xl text-center">
            <li><a href="#carta" onClick={() => setMenuOpen(false)}>Carta</a></li>
            <li><a href="#favoritos" onClick={() => setMenuOpen(false)}>Favoritos del chef</a></li>
            <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto y reservas</a></li>
            <li><a href="#novedades" onClick={() => setMenuOpen(false)}>Novedades</a></li>
            <li><a href="#conocenos" onClick={() => setMenuOpen(false)}>Conócenos</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
