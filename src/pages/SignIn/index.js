import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Box, Grid, TextField, Typography, Button, Link, FormHelperText } from '@material-ui/core'
import  LockOutlinedIcon  from '@material-ui/icons/LockOutlined'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import  { signIn } from '../../actions/accountActions'
const useStyles = makeStyles( (theme) => (
    {
        root: {
            height: '100vh'
        },
        image : {
            backgroundImage: 'url(/images/background.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            textAlign: "center",
            padding: theme.spacing(2)
        },
        avatar: {
            background: theme.palette.primary.main
        },
        button: {
            marginTop: theme.spacing(2)
        },
        form: {
            margin: theme.spacing(2,4),
        }
    }
))

function Copyright() {
    return (
        <Typography variant="body2"  align="center" style={{msJustifySelf: 'flex-end', marginTop: 'auto'}}>
            {`Copyright `}
            <a color="inherit" href="https://www.youtube.com/watch?v=LGf2KJg20lg&t=21009s">Felipe Jhordan</a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}
function SignIn() {
    const classes = useStyles()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()

    const account = useSelector( state => state )

    async function handleSignIn() {
        try {
            await dispatch(signIn(email, password))
            navigate('/')
        } catch(e) {
            console.log("eai")
            setErrorMessage(e.response.data.message)
        }
    }

    return (
        <Grid  container  className={classes.root}>
            <Grid item container direction="column" justifyContent="center" alignItems="center" sm={7} className={classes.image}>
                <Typography style={{ color: '#FFF', fontSize: 35, lineHeight: '45px' }}>
                  <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
              </Typography>
              <Typography style={{color: 'rgb(255,255,255,0.7', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                  Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
              </Typography>
            </Grid>
            <Grid item sm={5}>
                <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">
                        Acesso
                    </Typography>
                    <form action="" className={classes.form}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="E-mail"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          onChange={(event) => setEmail(event.target.value)}
                          value={email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                        />
                        <Button fullWidth 
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={() => handleSignIn()}>
                            Entrar
                        </Button>
                        {
                            errorMessage &&
                            <FormHelperText error>
                                {errorMessage}
                            </FormHelperText>
                        }
                        <Grid container justifyContent="space-around">
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid>
                                <Link>Não tem uma conta? Registre-se</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignIn