import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>
          Number:
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;