export const adminAction = (adminName) => {
    return {
        type: 'LOGGED',
        payload: adminName
    }
}