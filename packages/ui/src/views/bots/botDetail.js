import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

// material-ui
import { Grid, Box, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import MainCard from 'ui-component/cards/MainCard'
import ItemCard from 'ui-component/cards/ItemCard'
import { gridSpacing } from 'store/constant'
import WorkflowEmptySVG from 'assets/images/workflow_empty.svg'
import { StyledButton } from 'ui-component/button/StyledButton'
import LoginDialog from 'ui-component/dialog/LoginDialog'

// API
// import chatflowsApi from 'api/chatflows'
import botsApi from 'api/bots'

// Hooks
import useApi from 'hooks/useApi'

// const
import { baseURL } from 'store/constant'

// icons
import { IconPlus } from '@tabler/icons'

// ==============================|| BOTS ||============================== //

const Bot = () => {
    console.log('Bots component')
    let { id } = useParams()
    console.log('id: ', id)
    const navigate = useNavigate()
    const theme = useTheme()
    const customization = useSelector((state) => state.customization)

    const [isLoading, setLoading] = useState(false)
    // const [images, setImages] = useState({})
    const [loginDialogOpen, setLoginDialogOpen] = useState(false)
    const [loginDialogProps, setLoginDialogProps] = useState({})

    // const getAllBotsApi = useApi(botsApi.getAllBots)
    const getAllBotsApi = {
        data: [
            { id: 1, name: 'Scrum Bot', deployed: false, slug: 'scrum-bot' },
            { id: 2, name: 'Code Review Bot', deployed: false, slug: 'code-review-bot' }
        ]
    }

    const onLoginClick = (username, password) => {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        navigate(0)
    }

    // const addNew = () => {
    //     navigate('/canvas')
    // }

    const goToBot = (selectedChatflow) => {
        navigate(`/bot/${selectedChatflow.slug}`)
    }

    // useEffect(() => {
    //     getAllBotsApi.request()

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // useEffect(() => {
    //     if (getAllBotsApi.error) {
    //         if (getAllBotsApi.error?.response?.status === 401) {
    //             setLoginDialogProps({
    //                 title: 'Login',
    //                 confirmButtonName: 'Login'
    //             })
    //             setLoginDialogOpen(true)
    //         }
    //     }
    // }, [getAllBotsApi.error])

    // useEffect(() => {
    //     setLoading(getAllBotsApi.loading)
    // }, [getAllBotsApi.loading])

    // useEffect(() => {
    //     if (getAllBotsApi.data) {
    //         try {
    //             const bots = getAllBotsApi.data
    //             const images = {}
    //             for (let i = 0; i < bots.length; i += 1) {
    //                 const flowDataStr = bots[i].flowData
    //                 const flowData = JSON.parse(flowDataStr)
    //                 const nodes = flowData.nodes || []
    //                 images[bots[i].id] = []
    //                 for (let j = 0; j < nodes.length; j += 1) {
    //                     const imageSrc = `${baseURL}/api/v1/node-icon/${nodes[j].data.name}`
    //                     if (!images[bots[i].id].includes(imageSrc)) {
    //                         images[bots[i].id].push(imageSrc)
    //                     }
    //                 }
    //             }
    //             setImages(images)
    //         } catch (e) {
    //             console.error(e)
    //         }
    //     }
    // }, [getAllBotsApi.data])

    return (
        <MainCard sx={{ background: customization.isDarkMode ? theme.palette.common.black : '' }}>
            <Stack flexDirection='row'>
                <h1>Bot : {id}</h1>
            </Stack>
            <Grid container spacing={gridSpacing}>
                {!isLoading &&
                    getAllBotsApi.data &&
                    getAllBotsApi.data.map((data, index) => (
                        <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                            <ItemCard onClick={() => goToBot(data)} data={data} />
                        </Grid>
                    ))}
            </Grid>
            <LoginDialog show={loginDialogOpen} dialogProps={loginDialogProps} onConfirm={onLoginClick} />
        </MainCard>
    )
}

export default Bot
