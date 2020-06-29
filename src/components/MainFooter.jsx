import React from 'react';
import FooterNavMenu from './FooterNavMenu';
import PaymentIcons from './PaymentIcons';
import FooterCopiright from './FooterCopiright';
import FooterContacts from './FooterContacts';

function MainFooter() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <FooterNavMenu />
        </div>
        <div className="col">
          <PaymentIcons />
          <FooterCopiright />
        </div>
        <div className="col text-right">
          <FooterContacts />
        </div>
      </div>

    </footer>
  );
}

export default MainFooter;
