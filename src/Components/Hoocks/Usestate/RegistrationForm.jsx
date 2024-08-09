import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    address: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkData = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={checkData}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
