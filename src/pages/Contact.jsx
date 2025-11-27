import React from 'react'
import { useState } from "react";

function Contact() {

   const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted!");
  };

  
  return (
     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Form</h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>


  )
}

export default Contact
