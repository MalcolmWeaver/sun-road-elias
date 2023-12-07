
import './App.css';

import HeaderTitleNav from './components/HeaderTitleNav';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <HeaderTitleNav />

      {/* Main Section */}
      <main className="main">
        <section id="about">About Me</section>
        <section id="customers-say">What Customers Say</section>
        <section id="contact">Contact</section>
      </main>
    </div>
  );
}

export default App;
