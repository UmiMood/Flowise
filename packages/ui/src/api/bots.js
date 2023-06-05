const getAllBots = () => {
    // convert an array of objects named data to JSON string
    return JSON.stringify([
        { id: 1, name: 'Scrum Bot', deployed: false },
        { id: 2, name: 'Code Review Bot', deployed: false }
    ])
}
// const getAllBots = () => client.get('/chatflows')

// const getSpecificChatflow = (id) => client.get(`/chatflows/${id}`)

// const createNewChatflow = (body) => client.post(`/chatflows`, body)

// const updateChatflow = (id, body) => client.put(`/chatflows/${id}`, body)

// const deleteChatflow = (id) => client.delete(`/chatflows/${id}`)

// const getIsChatflowStreaming = (id) => client.get(`/chatflows-streaming/${id}`)

export default {
    getAllBots
    // getSpecificChatflow,
    // createNewChatflow,
    // updateChatflow,
    // deleteChatflow,
    // getIsChatflowStreaming
}
