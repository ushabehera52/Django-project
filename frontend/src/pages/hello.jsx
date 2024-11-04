import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './hello.module.css';

const HelloWorld = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/hello/'); 
                setMessage(response.data.message); // Correctly access the message from the response
            } catch (error) {
                console.error('Error fetching the message:', error);
            }
        };

        fetchMessage(); // Call the function to fetch the message
    }, []); // Empty dependency array means this effect runs once after the first render

    return (
        <div className={styles.hello}>
            <h2 className={styles.message}>{message}</h2> {/* Display the fetched message */}
        </div>
    );
};

export default HelloWorld;
