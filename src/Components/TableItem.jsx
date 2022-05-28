import React from 'react'
import styles from "./Form.module.css"

const TableItem = ({data}) => {
  return (
    <>
     {data.map((el, ind)=>(
             <tr key={ind}>
                <td className={styles.bodyrow}>{el.username}</td>
                <td className={styles.bodyrow}>{el.age}</td>
                <td className={`${styles.bodyrow} ${styles.address}`}>{el.address}</td>
                <td className={styles.bodyrow}>{el.department}</td>
                <td className={styles.bodyrow}>{el.salary}</td>
                <td className={styles.bodyrow}>{el.maritalStatus?"Married" : "Single"}</td>
                <td className={styles.bodyrow}>{el.resume}</td>
            </tr>
     ))}
    </>
  )
}

export default TableItem