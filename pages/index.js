import Nav from '../components/Nav';
import Landing from '../components/Landing';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import About from '../components/About.js'; 
import SocialMedia from '../components/SocialMedia';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Hope Insurance LLC</title>
      </Head>
      <div id="mainWrapper">
        <div id="contentWrapper">
          <Nav/>
          <Landing/>
          <Quote/>
          <About/>
          <SocialMedia/>
        </div>
      </div>
    </>
  )
}

export default Home;