
import './App.css';

import HeaderTitleNav from './components/HeaderTitleNav';
import AboutMe from './components/AboutMe';
import CustomersSay from './components/CustomersSay';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <HeaderTitleNav />

      {/* Main Section */}
      <main className="main">
        <AboutMe />
        <CustomersSay />
        <section id="contact">Contact</section>
      </main>
    </div>
  );
}

export default App;
