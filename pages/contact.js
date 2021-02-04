import Nav from '../components/Nav';
import Header from '../components/Header';
import formStyles from '../styles/Quote.module.css';
import Head from 'next/head';

const contact = () => {

  return (
    <>
      <Head>
        <title>Contact Us | Hope Insurance LLC</title>
      </Head>
      <div>
        <Nav/>
        <Header title="Contact Us" tagline="Have a question or just want to get in touch with us? Send us a message by filling out the form below!"/>
        <div className="container">
          <h1 className="heading">Contact</h1>
          <form id={formStyles.messageForm} action="https://formspree.io/f/mwkwzqnb" method="POST">
            <input type="text" name="name" placeholder="Full Name"/><br/>
            <input type="text" name="from" placeholder="Email"/><br/>
            <textarea name="message" id={formStyles.msgBox} placeholder="Message"/><br/>
            <input id={formStyles.submitBtn} type="submit" value="send"/>
          </form>
        </div>
        <div style={{padding: "75px"}}></div>
      </div>
    </>
  )
}

export default contact;