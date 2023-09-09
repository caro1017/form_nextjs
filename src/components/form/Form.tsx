"use client";
import { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { TextField, Card, CardContent, Typography } from "@mui/material";

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
  const [formSubmissions, setFormSubmissions] = useState<FormState[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormSubmissions((prevSubmissions) => [...prevSubmissions, formState]);
    setFormState({
      name: "",
      lastname: "",
      email: "",
    });
  };

  const handleDelete = (index: number) => {
    const deleteFormSubmissions = [...formSubmissions]; // Copiar formulario ingresado
    if (index >= 0 && deleteFormSubmissions.length) {
      deleteFormSubmissions.splice(index, 1); // Eliminar el elemento en el índice especificado
      setFormSubmissions(deleteFormSubmissions); // Actualizar el estado con el nuevo array
    }
  };

  return (
    <>
      <form
        className="flex flex-col items-center p-10 "
        onSubmit={handleSubmit}
      >
        <div className="m-3">
          <TextField
            label="Nombre"
            variant="outlined"
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-3">
          <TextField
            label="Apellido"
            variant="outlined"
            type="text"
            name="lastname"
            value={formState.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-4">
          <TextField
            label="Email"
            variant="outlined"
            type="text"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          size="large"
          variant="outlined"
          type="submit"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>

      <div className="flex flex-wrap w-screen px-10">
        {formSubmissions.map((user, index) => (
          <div key={index} className="p-2 px-1 w-1/3.5">
            <Card sx={{ maxWidth: 350 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Usuario {index + 1}
                </Typography>

                <Typography component="p" color="text.secondary">
                  Nombre: {user.name}
                </Typography>

                <Typography component="p" color="text.secondary">
                  Apellido: {user.lastname}
                </Typography>

                <Typography component="p" color="text.secondary">
                  Correo Electrónico: {user.email}
                </Typography>

                <IconButton color="primary">
                  <DeleteIcon
                    onClick={() => {
                      handleDelete(index);
                    }}
                  />
                </IconButton>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
