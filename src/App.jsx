import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CapsuleForm from "./components/CapsuleForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <CapsuleForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
