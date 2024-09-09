import { useState ,createContext } from "react";

const TemaContext = createContext({});
const TemaAtual = ({children}) => {
    const [tema, setTema] = useState("escuro");

    const MudaDeTema = () => {
        const novoTema = (tema == "escuro" ? "claro" : "escuro");
        setTema(novoTema);
    };

    return(
        <TemaContext.Provider value={{tema, MudaDeTema}}>
            {children}
        </TemaContext.Provider>
    )
}

export { TemaContext, TemaAtual };