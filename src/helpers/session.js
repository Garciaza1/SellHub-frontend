import cookies from 'js-cookies' 

const Session = () => {
    let session = false;
    
    //local storage do login
    const logado = sessionStorage.getItem('logged')
    console.log(logado);
    const user = sessionStorage.getItem('user')
    const token = sessionStorage.getItem('token')

    // cookies da lib
    const cookieUser = cookies.getItem('userData')
    const cookieToken = cookies.getItem('userToken')

    
    if (logado || cookieToken){
        session = [logado, cookieToken, cookieUser, token, user];
        const sessionData = JSON.stringify(session);
        return sessionData;
    }
    
    return session;

}

export default Session;