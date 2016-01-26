var React = require('react');

import { Header } from './Header';
import { Footer } from './Footer';
import { MainSection } from './MainSection';

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
