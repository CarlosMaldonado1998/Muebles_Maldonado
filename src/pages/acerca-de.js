import React from 'react';
import NextLink from 'next/link';
import Button from '@mui/material/Button';

const AcercaDe = () => {
  return (
    <>
      <div>acerca-de</div>
      <NextLink href="/" passHref>
        <Button >Your Link</Button>
      </NextLink>
    </>
  
  )
}

export default AcercaDe