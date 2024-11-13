import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles.contact}>
    <span className={styles.contactInfo}>
      <span className={styles.name}>{name}</span>: <span className={styles.number}>{number}</span>
    </span>
    <button onClick={() => onDelete(id)} className={styles.deleteButton}>Delete</button>
  </li>
);

export default Contact;