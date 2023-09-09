"use client";
import { ChangeEvent, useState } from "react";

interface FormState {
  name: string;
  lastname: string;
  email: string;
}

export const Form = () => {
  const [formState, setFormState] = useState<FormState>(() => ({
    name: "",
    lastname: "",
    email: "",
  }));

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Ok Enviado");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formState.name}
            onChange={handleChange}
            required
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Apellido
          </label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formState.lastname}
            onChange={handleChange}
            required
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Enviar
          </button>
        </div>
      </form>
      {submitted && (
        <div>
          <p>Nombre: {formState.name}</p>
          <p>Apellido: {formState.lastname}</p>
          <p>Email: {formState.email}</p>
        </div>
      )}
    </>
  );
};
