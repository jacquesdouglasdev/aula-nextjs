import Pagina from "@/components/Pagina"
import { useRouter } from "next/router"

export default function PaginaCurso() {
    const router = useRouter()
    //const params = router.query.params ?? []
    const [curso, aula] = (router.query.params ?? []) as string[]

    return (
        <Pagina>
            <div>
                <p>Curso: {/* params[0] */curso}</p>
                <p>Aula: {/* params[1] */ aula ?? 1}</p>
            </div>
        </Pagina>
   ) 
}