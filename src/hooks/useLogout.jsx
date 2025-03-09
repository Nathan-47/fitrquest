import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const {dispatch} = useAuthContext()

    const logout = () => {
        // terminate user from storage
        localStorage.removeItem('user')

        // dispatch logout action 
        //user will return null
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}