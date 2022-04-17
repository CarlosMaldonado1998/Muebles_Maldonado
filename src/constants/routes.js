const publicRoutes = {
  HOME: "/",
  ABOUT: "/acerca-de",
  CONTACT: "/contacto",
  PRODUCTS: "/productos",
  GALLERY: "/galeria",
  CUSTOMERSERVICE: "/servicio-al-cliente",
  DELIVERYMETHOD: "/servicio-al-cliente/formas-de-entrega",
  STEPSTOBUY: "/servicio-al-cliente/pasos-para-comprar",
  QUESTIONS: "/servicio-al-cliente/preguntas-frecuentes",
  LOGIN: "/iniciar-sesion",
  RECOVER: "/recuperar-contraseña",
};

const privateRoutes = {
  USER: "/mi-cuenta",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};

export default Routes;
