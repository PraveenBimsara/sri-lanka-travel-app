import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/sri-lanka.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust the threshold value to suit your needs
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId); // Set the active section on click
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' />
      <ul className='navbar-menu'>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
        </li>
        <li className={activeSection === 'about-us' ? 'active' : ''}>
          <a href="#about-us" onClick={(e) => handleScroll(e, 'about-us')}>About Us</a>
        </li>
        <li className={activeSection === 'explore-stories' ? 'active' : ''}>
          <a href="#explore-stories" onClick={(e) => handleScroll(e, 'explore-stories')}>Explore Stories</a>
        </li>
        <li className={activeSection === 'what-to-do' ? 'active' : ''}>
          <a href="#what-to-do" onClick={(e) => handleScroll(e, 'what-to-do')}>What To Do</a>
        </li>
        <li className={activeSection === 'new-products' ? 'active' : ''}>
          <a href="#new-products" onClick={(e) => handleScroll(e, 'new-products')}>New Products</a>
        </li>
        <li className={activeSection === 'contact-us' ? 'active' : ''}>
          <a href="#contact-us" onClick={(e) => handleScroll(e, 'contact-us')}>Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
