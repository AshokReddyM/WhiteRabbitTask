import axios from "axios"

export const getEmployees = async() => {
    // fetch the employees list and save in realm database
    try {

        let url ="http://www.mocky.io/v2/5d565297300000680030a986"
        let response = await axios.get(url)
        let resData = response?.data
        console.log('FETCH_SUCCESS',resData)
        return {success:true,resData}
    } catch (error) {
        console.log('ERROR_FETCHING_LIST',error)
        return {success:false,error}
    }
    
}