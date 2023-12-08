
import './App.css';

import HeaderTitleNav from './components/HeaderTitleNav';
import AboutMe from './components/AboutMe';
import CustomersSay from './components/CustomersSay';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <HeaderTitleNav />

      {/* Main Section */}
      <main className="main">
        <AboutMe id="about" />
        <CustomersSay id="customers-say" />
        <Contact id="contact" />
      </main>
    </div>
  );
}

export default App;
