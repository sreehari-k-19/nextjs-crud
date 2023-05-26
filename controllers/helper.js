const baseUrl = "http://localhost:3000";

export const getUserDetails = async () => {
    const response = await fetch(`${baseUrl}/api/user`)
    const json = await response.json()
    return json;
}

export const getUser = async (userId) => {
    const response = await fetch(`${baseUrl}/api/user/${userId}`);
    const json = await response.json()
    console.log(json, "userget")
    if (json) return json;
    return {}
}
export const addUserDetails = async (formData) => {

    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api/user`, options)
        const json = await response.json()
        return json;
    } catch (error) {
        return error
    }
}

export const updateUserDetails = async (userId, formData) => {
    console.log(userId, formData, "detailssss")
    try {
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api/user/${userId}`, options)
        const json = await response.json()
        return json;
    } catch (error) {
        return error
    }
}
export const deleteUserDetails = async (userId) => {
    try {
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': "application/json" },
        }
        const response = await fetch(`${baseUrl}/api/user/${userId}`, options)
        const json = await response.json()
        return json;
    } catch (error) {
        return error
    }
}