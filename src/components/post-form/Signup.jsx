import React from 'react'
import authService from '../../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import React, {useState} from 'react'
import Button from '../Button'
import Input from '../Input'
import Logo from '../Logo'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'




function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState('');
  const dispatch = useDispatch()
  const {register, handleSubmit } = useForm();
  return (
    <div>Signup</div>
  )
}

export default Signup