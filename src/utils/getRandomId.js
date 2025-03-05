export const getRandomId = () => {
    let str = 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12334567890-_'
    let id = ''
    for(let i = 0; i < 8; i++) {
        let index = Math.floor(Math.random() * str.length)
        id += str[index]
    }
    return id
}