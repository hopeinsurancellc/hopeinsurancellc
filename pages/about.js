import Nav from '../components/Nav';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';

const about = () => {
  return (
    <>
      <Head>
        <title>About Us | Hope Insurance LLC</title>
      </Head>
      <div>
        <Nav/>
        <Header title="About Us"/>
        <About/>
        <div style={{padding: "75px"}}></div>
      </div>
    </>
  )
}

export default about;