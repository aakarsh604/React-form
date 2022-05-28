import React from "react";
import TableItem from "./TableItem";
import styles from "../Components/Form.module.css";

const Table = ({ data }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headrow}>Name</th>
            <th className={styles.headrow}>Age</th>
            <th className={`${styles.headrow} ${styles.address}`}>Address</th>
            <th className={styles.headrow}>Department</th>
            <th className={styles.headrow}>Salary</th>
            <th className={styles.headrow}>Marital Status</th>
            <th className={styles.headrow}>Profile Picture</th>
          </tr>
        </thead>
        <tbody>
          <TableItem data={data} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
