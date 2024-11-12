import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => (
/* <li className={styles.contact}>
  <div className="contactInfo">
    <span className="name">{name}</span>
    <span className="number">{number}</span>
  </div>
  <button onClick={() => onDelete(id)}>Delete</button>
</li> */



  <li className={styles.contact}>
    <span>{name}: {number}</span>
    <button onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default Contact;