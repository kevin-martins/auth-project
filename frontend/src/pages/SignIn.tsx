import axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { UserProps } from '../models/user';

const SignIn = ({ setUser }: { setUser: Dispatch<SetStateAction<UserProps | null>> }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (form.password !== form.passwordConfirmation) {
      return setError('Invalid password confirmation');
    }
    
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', form);
      console.log(response.data);
      setError("");
    } catch (error) {
      console.error('Error logging in', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="passwordConfirmation" className="block text-gray-700">Password confirmation</label>
            <input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={form.passwordConfirmation}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
