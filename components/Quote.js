
import styles from '../styles/Quote.module.css';

const Quote = () => {

  const submitQuote = () => {
    return;
  }

  return (
    <div className="container">
      <h1 className="heading">Get Your Free Quote Today</h1>
      <form id={styles.messageForm} action="https://formspree.io/f/mwkwzqnb" method="POST">
        <input type="text" name="name" placeholder="Full Name"/><br/>
        <input type="email" name="from" placeholder="Email"/><br/>
        <select name="insurance-type" id="insurance-type">
          <option>Insurance type:</option>
          <option>Car</option>
          <option>Health</option>
          <option>Liability</option>
          <option>Life</option>
          <option>House</option>
          <option>Business</option>
          <option>School</option>
          <option>Personal Property</option>
        </select><br/>
        <textarea name="message" id={styles.msgBox} placeholder="Message"/><br/>
        <input id={styles.submitBtn} type="submit" value="send"/>
      </form>
    </div>
  );
}

export default Quote;