import React from 'react'
import { Container, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function ScrumBot() {
    const bull = (
        <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
            •
        </Box>
    )

    const card = (
        <>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant='h5' component='div'>
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    adjective
                </Typography>
                <Typography variant='body2'>
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </>
    )

    return (
        <>
            <Container maxWidth='lg' sx={{ mt: 10 }}>
                <div style={{ marginBottom: '20px' }}>
                    <TextField type='search' id='search' label='Search' sx={{ width: 600 }} />
                    <Button variant='contained' color='success'>
                        Submit
                    </Button>
                </div>
                <Card variant='outlined'>{card}</Card>
            </Container>
        </>
    )
}

export default ScrumBot
