import React, { useState } from "react";

function Details() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    age: "",
    gender: "",
    phone: "",
    country: ""
  });

  const handleChange = (e) => {const { name, value } = e.target;
    setFormData((data) => ({...data,[name]: value}));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Live Form Update</h2>
      <form>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Phone Number:</label><br />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div>
          <label>Age:</label><br />
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>

        <div>
          <label>Gender:</label><br />
          <input type="radio"name="gender"value="Male" checked={formData.gender === "Male"} onChange={handleChange}/> <span>Male</span>
          <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange}/> <span>Female</span> 
          <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange}/> <span> Other</span>
        </div>

        <div>
          <label>Country:</label><br />
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select a country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div>
          <label>Message:</label><br />
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
      </form>

      <hr />

      <h3>Live Preview:</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>Message:</strong> {formData.message}</p>
    </div>
  );
}

export default Details;
