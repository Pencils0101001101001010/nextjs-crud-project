"use client"

import { useReducer } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import Success from "./success";


const formReducer = (state, event) => {
   return{
    ...state,
    [event.target.name]: event.target.value
   }
}




export default function AddUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.keys(formData).length === 0) return console.log("Empty Form submitted")
    console.log(formData)
  }

  if(Object.keys(formData).length>0) return <Success message={"Data Added"}/>


    return (
    <form
    onSubmit={handleSubmit}
    className="grid lg:grid-cols-2 w-4/6 gap-4"
    >
      <div className="input-type">
        <input
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="firstname"
          placeholder="First Name"
        />
      </div>
      <div className="input-type">
        <input
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="lastname"
          placeholder="Last Name"
        />
      </div>
      <div className="input-type">
        <input
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="salary"
          placeholder="Salary"
        />
      </div>
      <div className="input-type">
        <input
          className="border px-5 py-3 focus:outline-none rounded-md "
          type="date"
          onChange={setFormData}
          name="date"
          placeholder="Date"
        />
      </div>




      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            value="Active"
            id="radioDefault1"
            onChange={setFormData}
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
          />
          <label 
          htmlFor="radioDefault1"
          className="inline-block text-gray-800 "
          >
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value="inactive"
            id="radioDefault2"
            onChange={setFormData}
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
          />
          <label 
          htmlFor="radioDefault2"
          className="inline-block text-gray-800 "
          >
            inactive
          </label>
        </div>
      </div>
      <button
      className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 gap-2 border rounded-md hover:bg-gray-50 hover:text-green-500 hover:border-green-500"
      >Add<IoMdPersonAdd size={23} /> </button>
    </form>
  );
}
