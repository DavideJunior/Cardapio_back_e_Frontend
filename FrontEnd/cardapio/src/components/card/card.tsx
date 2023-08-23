import "./card.css"


interface CardProps {
    id: number,
    price: number,
    title: string,
    image: string
    onRemove: () => void;
}

export function Card({ price, image, title, onRemove } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price} </p>
            <button onClick={onRemove}>Remover</button>
        </div>
    )
}