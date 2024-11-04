import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './users_id.module.css'; // Import the CSS module

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/${id}/`);
        setUser(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user detail:", error);
        setError("User not found");
      }
    };

    fetchUserDetail();
  }, [id]);

  return (
    <div className={styles.container}>
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : user ? (
        <div className={styles.userDetail}>
          <h2 className={styles.title}>User Details</h2>
          <p><span className={styles.label}>ID:</span> {user.id}</p>
          <p><span className={styles.label}>Name:</span> {user.name}</p>
          <p><span className={styles.label}>Email:</span> {user.email}</p>
          <p><span className={styles.label}>Role:</span> {user.role}</p>
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
