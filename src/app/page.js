"use client"

import { BiUserPlus } from "react-icons/bi";
import Table from "../components/table";
import Form from "../components/form";
import { useState } from "react";

export default function Home() {

   const [visible, setVisible] = useState(false)


   const handler = () => {
     setVisible(!visible)
   }


  return (
    <section>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3 ">
            <button className="flex bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-gray-800 hover:border-indigo-500 hover:text-gray-50 gap-1"
            onClick={handler}
            >
              Add Employee
              <BiUserPlus size={23} />
            </button>
          </div>
        </div>
       
       
         {visible ? <Form /> : <></>}
       
       

        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}
