import React , {useRef, useState} from "react";
import axios from "axios";
import { useEffect } from "react";

const Forms = ({setdata, data, setpage, page, settotal, total}) => {
  const [form, setForm] = useState({});

  const nameref = useRef()

  const onChange = (e) => {
    let { name, value, type, checked, files } = e.target;
    console.log(e)
    if ( type === "checkbox"){
        setForm({
            ...form,
            [name]: checked,
          });
    } else  if ( type === "files"){
        setForm({
            ...form,
            [name]: files,
          });
    } else {
        setForm({
            ...form,
            [name]: value,
          });
    }
  };

  const saveData = async (form) => {
    const res = await axios.post("http://localhost:8080/forms", form);
    setdata([...data, res.data]);
  }

  const handleOnSubmit = (e) => {
      e.preventDefault();
      saveData(form);
  }

  useEffect( ()=> {
    const getData = async () => {
        const res = await axios(`http://localhost:8080/forms?_page=${page}&_limit=5`);
        setdata(res.data)
        settotal(res.headers["x-total-count"]);
    }
    getData();
  }, [page]);

  return (
    <div>
     <h1>EMPLOYEE FORM</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name : </label>
          <input
            ref={nameref}
            type="text"
            name="username"
            placeholder="Enter Name"
            value={form.name}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Age : </label>
          <input placeholder="Enter Age" type="number" name="age" value={form.age} onChange={onChange} />
        </div>
        <div>
          <label>Adress : </label>
          <input
            type="text"
            name="address"
            placeholder="Enter Adress"
            value={form.address}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Department : </label>
            <select name="department" onChange={onChange} value={form.department}>
                <option value="H.R">H.R</option>
                <option value="Software Development">Software Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Sales and Marketing">Sales and Marketing</option>
            </select>
        </div>
        <div>
          <label>Salary/annum : </label>
          <input
            type="number"
            name="salary"
            placeholder="Enter Salary"
            value={form.salary}
            onChange={onChange}
          />
        </div>
        <div>
            <label>Marital Status :  </label>
          <input
            type="checkbox"
            name="maritalStatus"
            checked={form.maritalStatus}
            onChange={onChange}
            />
        </div>
        <div>
          <label>Profile Photo : </label>
          <input
            type="file"
            accept="image/png, image/jpeg, application/pdf"
            name="resume"
            files={form.resume}
            onChange={onChange}
          />
        </div>
      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
