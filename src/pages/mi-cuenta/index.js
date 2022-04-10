import React from 'react'
import withAuth from "@/hocs/withAuth";
import Routes from 'src/constants/routes';
import enqueueSnackbar from 'notistack';
import { useAuth } from '@/lib/auth';
import { Button, Box } from '@mui/material';
import { useRouter } from 'next/router';

const HomeUser = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    try {
    await logout().then(router.push(Routes.HOME));  
    } catch (e) {
      
    }
    
  };

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.lastname}</p>
      <p>{user.email}</p>
      <p>{user.city}</p>
      <p>{user.cellphone}</p>
      
        <Box mt={3} alignItems={"center"}>
          <Button variant="contained" color="primary" onClick={onLogout}>
            Cerrar sesión
          </Button>
        </Box>
      
    </div>
  );
}

export default withAuth(HomeUser);