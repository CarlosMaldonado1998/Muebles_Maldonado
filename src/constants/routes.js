const publicRoutes = {
    HOME: "/",
    ABOUT: "/acerca-de",
    CONTACT: "/contacto",
    PRODUCTS : "/productos",
    SHIPMENT: "/envios",
    SERVICES: "/servicios",
    LOGIN: "/iniciar-sesion",
    RECOVER: "/recuperar-contraseña"
}

const privateRoutes = {
    USER: "/mi-cuenta",
}

const Routes = {
    ...publicRoutes, 
    ...privateRoutes,
}

export default Routes;