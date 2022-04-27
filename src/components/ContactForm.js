import React from "react";
import { useForm } from "react-hook-form";
import api from "@/lib/api";
import Routes from "../constants/routes";
import { Grid, TextField, Typography, Button } from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import translateMessage from "../constants/messages";
import { useSnackbar } from "notistack";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Mínimo 4 caracteres")
    .max(100, "Máximo 100 caracteres")
    .required("Ingrese su nombre"),
  email: Yup.string()
    .email("Ingrese un correo electrónico válido")
    .max(255, "Máximo 255 caracteres")
    .required("Ingrese su correo electrónico"),
  phone: Yup.string()
    .min(10, "Mínimo 10 caracteres numéricos")
    .matches(/^[0-9]+$/, "Ingrese solo números")
    .max(12, "Máximo 12 caracteres numéricos")
    .required("Ingrese su número de celular"),
  description: Yup.string()
    .min(10, "Mínimo 10 caracteres")
    .required("Ingrese su mensaje."),
});
const ContactForm = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (message, variant) => {
    enqueueSnackbar(message, {
      variant: variant,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await api.post(`/contacts`, data);
      console.log("Response:", response);
      handleClick(
        "Mensaje enviado con éxito. Gracias por su consulta",
        "success"
      );
      reset({ name: "", email: "", phone: "", description: "" });
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data.errors);
        Error(error.response.data.errors);
        return Promise.reject(error.response);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
      handleClick("Algo ha ocurrido, vuelva a intentarlo", "error");
      handleClick(
        "Si tiene problemas, puede contactarnos por Whatsapp",
        "info"
      );
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item m={1} xs={12} sm={12} md={5}>
            <TextField
              color="secondary"
              id="name"
              name="name"
              label="Nombre *"
              fullWidth
              margin="dense"
              {...register("name")}
              error={errors.name ? true : false}
            />
            <Typography variant="body2" color="error">
              {errors.name?.message}
            </Typography>
          </Grid>
          <Grid item m={1} xs={12} sm={12} md={6}>
            <TextField
              color="secondary"
              id="email"
              name="email"
              label="Email *"
              fullWidth
              margin="dense"
              {...register("email")}
              error={errors.email ? true : false}
            />
            <Typography variant="body2" color="error">
              {errors.email?.message}
            </Typography>
          </Grid>
          <Grid item m={1} xs={12} sm={12} md={5}>
            <TextField
              color="secondary"
              id="phone"
              name="phone"
              label="Celular *"
              fullWidth
              margin="dense"
              {...register("phone")}
              error={errors.phone ? true : false}
            />
            <Typography variant="body2" color="error">
              {errors.phone?.message}
            </Typography>
          </Grid>

          <Grid item m={1} xs={12} sm={12} md={12}>
            <TextField
              color="secondary"
              id="description"
              multiline
              name="description"
              rows={4}
              label="Mensaje *"
              fullWidth
              margin="dense"
              {...register("description")}
              error={errors.description ? true : false}
            />
            <Typography variant="body2" color="error">
              {errors.description?.message}
            </Typography>
          </Grid>
          <Grid item m={2} xs={12} sm={12} md={12}>
            <Button variant="contained" color="secondary" type="submit">
              Enviar Mensaje
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ContactForm;
