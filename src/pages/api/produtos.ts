import { NextApiRequest, NextApiResponse } from "next";

export default function handles(req: NextApiRequest, res: NextApiResponse) {

    res.status(200).json([
        { id: 1, nome: 'Caneta', preco: 9.99 },
        { id: 2, nome: 'Caderno', preco: 19.99 },
        { id: 3, nome: 'Borracha', preco: 5.99 },
        { id: 4, nome: 'Lapis', preco: 1.99 },
        { id: 5, nome: 'Tesoura', preco: 3.99},
        { id: 6, nome: 'Cola', preco: 2.99},
        { id: 7, nome: 'Apontador', preco: 4.99},
        { id: 8, nome: 'Fita Adesiva', preco: 7.99},
        { id: 9, nome: 'Papel', preco: 6.99},
        { id: 10, nome: 'Lapiseira', preco: 8.99},
    ])
}