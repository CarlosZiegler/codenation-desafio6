import React from 'react';

import './style.scss'

class Contact extends React.Component {

  render() {
    if (this.props.tableHeader) {
      return (
        <article data-testid="contact" className="contact">
          <span className="contact__avatar" >
          </span>
          {this.props.tableHeader.map((item, index) => <span className="contact__data" key={index}>{item}</span>)}
        </article>)
    }
    if (this.props.data) {
      const { avatar, name, phone, country, admissionDate, company, department } = this.props.data
      return (
        <article data-testid="contact" className="contact">
          <span className="contact__avatar" >
            <img src={avatar} alt="Daniela Terry" />
          </span>
          <span className="contact__data">{name}</span>
          <span className="contact__data">{phone}</span>
          <span className="contact__data">{country}</span>
          <span className="contact__data">{admissionDate}</span>
          <span className="contact__data">{company}</span>
          <span className="contact__data">{department}</span>
        </article>)
    }
    return (null)

  }
}

export default Contact;
