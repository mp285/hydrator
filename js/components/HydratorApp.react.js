var React = require('react');

import { Header } from './Header.react';
import { Footer } from './Footer.react';
import { MainSection } from './MainSection.react';

class HydratorApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export { HydratorApp };
