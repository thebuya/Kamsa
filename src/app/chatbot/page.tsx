"use client";

import React, { useState } from 'react';
//import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from "next";


const API_URL = '/api/chat'; // Replace with your actual API endpoint

type Data = {
  response: string
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({response: 'Hillary Bukunda'})
}




export default async function ChatbotPage  () {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('Ask me anything ...');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('eat shit');

    //const response = await handler
    const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input,
    }),
   });

   const data = await response.json();
   //const data = await  handler
   //setOutput(response);
   setOutput(data.response);
   console.log(output);
  
  }

  return (
    <div className="kamsa-container about-container">
      <header className="contentheader">
        <h3 className="lg-subheader">Deployment of ChatBot In Progress</h3>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="input" className="block mb-2 font-medium">
            Input:
          </label>
          <textarea
            name="input"
            id="input"
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 text-white"
          />
        </div>

        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
          Submit
        </button>
      </form>

      {output && (
        <div>
          <h2 className="text-xl font-bold">Interview Questions:</h2>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
};

