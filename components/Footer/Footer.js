import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Box className="w-full rounded-xl bg-white h-12  p-2 flex items-center justify-between">
        <Box className="ml-3"><Typography className='text-xs text-gray-400' variant='caption'>Made by Talabat Menu ©2023</Typography></Box>
        <Box><img src="/images/social.png" alt="" /></Box>
    </Box>
  )
}

export default Footer