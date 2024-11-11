import React from 'react';
import { contact } from '../../data/contants';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <div>
        <a href={contact.links.facebook}>Facebook</a>
      </div>
      <div><a href={contact.links.twitter}>Twitter</a>
      </div>
      <div><a href={contact.links.Github}>Github</a></div>
    </section>
  );
};

export default Contact;
