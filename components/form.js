import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Field, Form, Formik } from 'formik';
const inter = Inter({ subsets: ['latin'] })
import {
    FormControl,
    Input,
    FormLabel, Box,
    FormErrorMessage,
    FormHelperText, Badge, Stack, Center
} from '@chakra-ui/react'

export default function FormData(props) {

    return (
        <>
    <Center>
        <Box m={10}>
            <Stack direction='row'>
                <Box >   <FormControl >
                    <FormLabel>Masukkan Nama sdgfdg </FormLabel>
                    <Input 
                    placeholder='Nama Anda' 
                    type='text' 
                    value={props.inputValue} 
                    onChange = {(e)=> props.onInputValueChange(e.target.value)}
                    borderRadius="16px" />
                </FormControl></Box>
                {/* <Box>  <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder='First name' />
                </FormControl></Box> */}
            </Stack>
        </Box>
    </Center>
    </>
    )

}