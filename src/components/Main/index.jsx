import ButtonAdd from "../Button";
import { Conteudo, ConteudoPrincipal, ConteudoPrincipalEscrito, ConteudoSecundario } from "./style"
import Group from "../../assets/Group.svg"
const Main = () =>{
    return (
        <Conteudo>
        <ConteudoPrincipal>
            <ConteudoPrincipalEscrito>
                <h1 className="conteudo-principal-escrito-titulo" >Balle Bot</h1>
                <h2 className="conteudo-principal-escrito-subtitulo">Deixe a sua comunidade segura de um jeito fácil</h2>
                <ButtonAdd/>
            </ConteudoPrincipalEscrito>
            <img className="conteudo-principal-imagem" src={Group} alt="imagem da balle bot"/>
        </ConteudoPrincipal>
        <ConteudoSecundario>
            <h3 className="conteudo-secundario-titulo"> O que ela faz por você?</h3>
            <p className="conteudo-secundario-paragrafo">1. Cria um <strong>sistema de verificação capcha</strong> para novos membros garantirem que não são robôs</p>
            <p className="conteudo-secundario-paragrafo">2. Possui um <strong>sistema de banimento automático</strong> para links suspeitos que forem enviados na comunidade</p>
            <p className="conteudo-secundario-paragrafo"><strong>Sistema de avisos e banimento manual</strong>, para pessoas administradoras utilizarem</p>
        </ConteudoSecundario>
    </Conteudo>
    )
}

export default Main;