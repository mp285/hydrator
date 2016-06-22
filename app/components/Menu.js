import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Menu.css';


export default class Menu extends Component {
  render() {
    return (
      <ul className={styles.container}>
        <li><Link className="navLink" to="/datasets" activeClassName={styles.active}>*</Link></li>
        <li><Link className="navLink" to="/add" activeClassName={styles.active}>+</Link></li>
      </ul>
    );
  }
}
