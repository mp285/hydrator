var React = require('react');
var Header = require('./Header.react');
var Footer = require('./Footer.react');
var MainSection = require('./MainSection.react');

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
