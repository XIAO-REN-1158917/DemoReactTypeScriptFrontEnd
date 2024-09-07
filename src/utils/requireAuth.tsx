import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Iprops {
    allowed: boolean,
    redirectTo: string,
    children: React.ReactNode
}

function RequireAuth({ allowed, redirectTo, children }: Iprops) {
    const { token } = useSelector((state: any) => state.authSlice)
    const isLogin = token ? true : false
    const navigate = useNavigate()
    useEffect(() => {
        //allowed represents the current route needs login or not
        //isLogin represents login or not
        if (allowed !== isLogin) {
            navigate(redirectTo)
        }
    }, [allowed, isLogin, redirectTo])

    return allowed === isLogin ? <>{children}</> : <></>
}

export default RequireAuth