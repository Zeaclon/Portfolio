import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen" style={{
            backgroundColor: "var(--color-background)",
            color: "var(--color-text)"
        }}>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
        </div>

    );
};

export default Home;