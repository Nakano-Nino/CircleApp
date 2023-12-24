import { UserLoginType } from "@/types/UserType";
import { useState, ChangeEvent } from "react";
import { API } from "@/config/Api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN, AUTH_LOGOUT } from "@/store/rootReducer";

export function FormLoginHook() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState<UserLoginType>({
        username: "",
        password: ""
    });
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

   async function handleLogin() {
        try {
            const res = await API.post("/user/login", form);
            
            if(res.status === 200) {
                dispatch(AUTH_LOGIN(res?.data))
                navigate("/")
            }else if(res.status === 401) {
                console.log("Unauthorized: missing or invalid token");
            }else {
                console.log("HTTP Status Code:", res.status);
            }
        } catch (error) {
            console.log(error);
        }
   }

   async function handleLogout() {
    try {
        const res = await API.post("/", form);
        
        if(res.status === 200) {
            dispatch(AUTH_LOGOUT(res?.data))
            navigate("/login")
        }else if(res.status === 401) {
            console.log("Unauthorized: missing or invalid token");
        }else {
            console.log("HTTP Status Code:", res.status);
        }
    } catch (error) {
        console.log(error);
    }
}
   return { form, handleChange, handleLogin, handleLogout}
}