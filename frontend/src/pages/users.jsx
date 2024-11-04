import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './users.module.css'; // Import the CSS module

const UsersTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from the API endpoint
        axios.get('http://localhost:8000/users/')
            .then(response => {
                setUsers(response.data.user); // Assuming response.data.user holds the user list
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    return (
        <div className={styles.tableContainer}>
            <h2 className={styles.title}>Users List</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
