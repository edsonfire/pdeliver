import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({ message }:Props){

useEffect(()=>{
  //  console.log('componente iniciado')--- chamada para a api, por exemplo
},[]);

return (
    <h1>Componente Hello {message}</h1>
)

}

export default Hello;