const FruitList = (({lista}) => {
    return(
        lista.map((fruta)=>(
            <div className="fruta" key={fruta.name}>
                <h1>{fruta.name}</h1>
                <h2>{fruta.color}</h2>
                <h2>R$: {fruta.price.toFixed(2)}</h2>
            </div>
            )
        )
    )

})

export default FruitList