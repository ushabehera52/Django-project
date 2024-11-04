import React, { useState } from 'react';
import axios from 'axios';
import styles from './new_user.module.css'; // Import the CSS module

const CreateUserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    });
    const [message, setMessage] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/new_user/', formData)
            .then(response => {
                setMessage("User created successfully!");
                setFormData({ name: '', email: '', role: '' }); // Clear the form
            })
            .catch(error => {
                console.error("Error creating user:", error);
                setMessage("Error creating user. Please try again.");
            });
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Create New User</h2>
            {message && <p className={styles.message}>{message}</p>}
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Role:</label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>Create User</button>
            </form>
        </div>
    );
};

export default CreateUserForm;
