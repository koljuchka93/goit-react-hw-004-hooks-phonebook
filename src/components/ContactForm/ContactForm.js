import PropTypes from "prop-types";
import styles from './contactForm.module.css';
import { useState } from 'react';

const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
    };
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, number);
            setName('');
            setNumber('');
    };
    
        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>Name
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Andrii Hrytsai" />
                </label>
                <label className={styles.label}>Number
                    <input
                        className={styles.input}
                        type="text"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        placeholder="099-99-99" />
                </label>
                <button className={styles.btn} type="submit">
                        Add contact
                    </button>
            </form>
        )
    }


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;