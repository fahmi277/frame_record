

// import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Field, Form, Formik } from 'formik';
const inter = Inter({ subsets: ['latin'] })
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

export default function alert(props) {
    return (
        <>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Your browser is outdated! {props.data}</AlertTitle>
                <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
            </Alert>
        </>
    )
}

