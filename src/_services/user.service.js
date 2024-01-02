let saveName = (name) => {
    localStorage.setItem('name', name)
}

let saveFirstName = (firstName) => {
    localStorage.setItem('firstName', firstName)
}

let saveEmail = (email) => {
    localStorage.setItem('email', email)
}

let savePassword = (password) => {
    localStorage.setItem('password', password)
}

export const userService = {
    saveName, saveFirstName, saveEmail, savePassword
}