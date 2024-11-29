import React from "react";
import { IconBox, NameUser, UserBox, UserModalBox, UserModalBoxAdmin } from "./UserModalStyles";
import ButtonLogin from "../../ButtonLogin/ButtonLogin";
import { useSelector } from "react-redux";

const UserModal = ({nombre, type, confirm}) => 
{
  const {modal, user} = useSelector((state) => state.user);
    return (
            <>
                { modal && (
                            <>
                                {!user ? 
                                    <UserModalBox>
                                        <NameUser> Bienvenido  <br/> inicie session</NameUser>
                                        <ButtonLogin msg={"iniciar sesion"}/>
                                    </UserModalBox>
                                    :
                                        !user.isAdmin ?
                                            <UserModalBox>
                                                {/* <NameUser>{nombre}</NameUser> */}
                                                <UserBox>
                                                    <NameUser>Bienvenido {user.name}</NameUser>
                                                    <IconBox>
                                                        <img src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1731079949/g8_ghxskw.png" alt="UserIcon"  />
                                                    </IconBox>
                                                </UserBox>
                                                <ButtonLogin msg={"cerrar session"} closeSessionTrigger={true}/>
                                            </UserModalBox>
                                                :
                                            
                                            <UserModalBoxAdmin>
                                                <UserBox>
                                                <NameUser>Bienvenido {user.name}</NameUser>
                                                    <IconBox>
                                                            <img src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1731079949/g8_ghxskw.png" alt="UserIcon"  />
                                                    </IconBox>
                                                </UserBox>
                                                <ButtonLogin msg={"cerrar session"} closeSessionTrigger={true} />
                                            </UserModalBoxAdmin>
                                            
                                            
                                }
                            </>
                            )
                        }
                    </>
                )
}
  export default UserModal;