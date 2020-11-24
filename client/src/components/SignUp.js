import React,{useRef,useState} from 'react'
import {Card, Button, Form,Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error,setError] = useState('')
    const[loading,setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        if(passwordRef.current.value.length < 6 ){
            return setError('Passwords must be more than 6 characters')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/home')
        }
        catch{
            setError('Failed to sign up')
        }
        setLoading(false)
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">SignUp</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">SignUp</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already Have an Account? <Link to="/">Login</Link>
            </div>
        </div>
    )
}
