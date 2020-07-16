import React from 'react';

function FooterNavMenu() {
  return (
    <section>
      <h5>Информация</h5>
      <ul className="nav flex-column">
        <li className="nav-item"><a href="/about" className="nav-link">О магазине</a></li>
        <li className="nav-item"><a href="/catalog" className="nav-link">Каталог</a></li>
        <li className="nav-item"><a href="/contacts" className="nav-link">Контакты</a></li>
      </ul>
    </section>
  );
}

export default FooterNavMenu;
