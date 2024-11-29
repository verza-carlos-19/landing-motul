import React, { useState } from "react";
import { Form, Label, Input, Select, Error, Buttonn } from "./FormUpdateProductStyles";

function UpdateProductForm({ product, onSubmit }) {
  const [formData, setFormData] = useState({
    name: product.name || "",
    Image: product.img || "",
    price: product.price || "",
    category: product.category || "aerosol", // Default value
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (typeof formData.name !== "string" || formData.name.trim() === "") {
      newErrors.name = "El nombre debe ser un texto válido.";
    }
    if (typeof formData.img !== "string" || formData.img.trim() === "") {
      newErrors.img = "La URL debe ser un texto válido.";
    }
    if (isNaN(formData.price) || formData.price <= 0) {
      newErrors.price = "El precio debe ser un número válido.";
    }
    if (!["aerosol", "aceite", "refrigerante"].includes(formData.category)) {
      newErrors.category = "Debe seleccionar una categoría válida.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit(formData); // Llama a la función onSubmit con los datos validados
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Nombre</Label>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <Error>{errors.name}</Error>}

      <Label>URL de Imagen</Label>
      <Input
        type="text"
        name="img"
        value={formData.url}
        onChange={handleChange}
      />
      {errors.url && <Error>{errors.url}</Error>}

      <Label>Precio</Label>
      <Input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      {errors.price && <Error>{errors.price}</Error>}

      <Label>Categoría</Label>
      <Select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="aceite">Aceite</option>
        <option value="aerosol">Aerosol</option>
        <option value="refrigerante">Refrigerante</option>
      </Select>
      {errors.category && <Error>{errors.category}</Error>}

      <Buttonn type="submit">Actualizar Producto</Buttonn>
    </Form>
  );
}

export default UpdateProductForm;
