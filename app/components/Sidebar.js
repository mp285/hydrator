import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Sidebar.css';


export default class Sidebar extends Component {
  render() {
    return (
      <ul className={styles.container}>
        <li><Link className="navLink" to="/counter" activeClassName="active">to Counter</Link></li>
        <li><Link className="navLink" to="/add" activeClassName="active">Add Dataset</Link></li>
      </ul>
    );
  }
}
