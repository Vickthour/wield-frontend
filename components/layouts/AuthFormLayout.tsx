import {FC, ReactNode} from "react";

interface AuthForm {
    children: ReactNode;
}

const AuthFormLayout: FC<AuthForm> = ({children}) => {
    return (
        <>

            <div className="flex flex-wrap w-full">
                <div className="w-1/2">
                    <img className="hidden object-cover w-full h-screen md:block" src="./img/art1.png"/>
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                    <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                        <img src="./img/logo.png"/>
                    </div>
                    {children}
                </div>
            </div>

        </>
    )
}
export default AuthFormLayout