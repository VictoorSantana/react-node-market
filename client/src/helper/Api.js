import axios from 'axios';

const API_URL = 'http://localhost:5000';

export default {
    isAuthenticated: () => {

        const token = localStorage.getItem('sessionToken');

        let isAuth = false;
        if(token !== null && token !== undefined) {
            if(token.trim().length > 0) {
                isAuth = true;
            } else {
                isAuth = false;
            }
        }

        return isAuth;
    },
    tryLogin: async (data = {}) => {
        
        return await axios
        .post(API_URL + '/login', data)
        .then(response => {
            if(response.status == 200) {              

                if(response.data.token.trim().length > 0) {
                    localStorage.setItem('sessionToken', response.data.token);
                    return {
                        auth: true,
                        message: response.data.message
                    };                                
                } else {                    
                    return {
                        auth: false,
                        message: response.data.message
                    };                    
                }
            }
        })
        .catch(response => {
            console.log(response);
        });
    },
    logOut: () => {
        localStorage.removeItem('sessionToken');
        window.location.reload();        
    },

     addProduct: async (data = {}) => {

        return await axios
        .post(API_URL + '/productadd', data, {
            headers: {
                authorization: 'bearer ' + localStorage.getItem('sessionToken')
            }
        })
        .then(response => {                                    
            if(response.status == 200) {                  
                return ({
                    message: response.data.message,
                    status: response.status
                });
            }            
        })
        .catch(error => {
            //status: 400
            //statusText: "Bad Request"

            return ({
                message: error.response.statusText,
                status: error.response.status
            });        
        });

    }
}