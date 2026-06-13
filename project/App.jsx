function App() {
  return (
    <div className="bg-white">
      <Nav/>
      <main>
        <Hero/>
        <Marquee/>
        <SeenOnLinkedIn/>
        <Stats/>
        <HowItWorks/>
        <UseCases/>
        <Founder/>
        <Different/>
        <Testimonials/>
        <FAQ/>
        <FinalCTA/>
      </main>
      <Footer/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
