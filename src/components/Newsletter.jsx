/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

import Axios from 'axios';

function Newsletter() {
  const [isChecked, setIsChecked] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [town, setTown] = useState('');
  const [postcode, setPostcode] = useState('');

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    const missingFields = [];
    if (!userName) missingFields.push('Name');
    if (!email) missingFields.push('Email');
    if (!town) missingFields.push('Town');
    if (!postcode) missingFields.push('Postcode');

    if (isChecked && missingFields.length === 0) {
      Axios.post('https://grassrootsforumsbackend.onrender.com/api/insert', {
        username: userName,
        email: email,
        town: town,
        postcode: postcode,
      })
        .then(() => {
          alert('Success!');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      const errorMessage = missingFields.length > 0
        ? `Please fill in the following fields: ${missingFields.join(', ')} and accept the consent.`
        : 'Please accept the consent.';

      alert(errorMessage);
    }
  };

  return (
    <div className="w-full py-16 text-white px-4 border-b-4 border-white" id="Contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-4xl md:text-5xl font-bold py-[40px] text-center lg:mr-[120px]">Contact Form</h1>
          <p className="lg:mr-[120px] text-center">
            Stay connected with Grassroots Forum. Complete this form to receive updates, event invitations, and join our
            community in shaping a better future together.
          </p>
        </div>
        <div>
          <form className="my-4 grid grid-cols-2 gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <input
              className="p-3 text-lg text-black rounded-md w-full"
              type="text"
              placeholder="Name"
              name="username"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="p-3 text-lg text-black rounded-md w-full"
              type="text"
              placeholder="Town"
              name="town"
              value={town}
              required
              onChange={(e) => setTown(e.target.value)}
            />
            <input
              className="p-3 text-lg text-black rounded-md w-full"
              type="text"
              placeholder="Postcode"
              name="postcode"
              value={postcode}
              required
              onChange={(e) => setPostcode(e.target.value)}
            />
            <input
              className="p-3 text-lg text-black rounded-md w-full"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="col-span-2 flex justify-center items-center">
              <label className="flex items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span>I consent to being contacted about future events, initiatives, and updates related to Grassroots Forum.</span>
              </label>
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <button
                className="w-64 py-3 my-6 text-white bg-[orange] rounded-md font-medium"
                type="submit"
              >
                Notify Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
