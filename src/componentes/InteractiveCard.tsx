import camisa from './image/camisa.jpeg';
import './InteractiveCard.css';

const InteractiveCard = () => {
    const items = [
        {
            name: 'Camisa Nike Corinthians I 2023/24 Torcedor Pro Masculina',
            price: "R$135,37",
            description: "O legado do Corinthians transcede as quatro linhas do jogo. Em 1983, o Corinthians conquistou o título Paulista com o compromisso de que todas as vozes fossem ouvidas, uma crença que até hoje move os corações pelo Timão.Com detalhes que fazem referência ao estilo icônico dos anos 80, e ao movimento Democracia Corinthiana, a nova camisa I celebra a filosofia que a torcida Corinthiana fortalece até hoje para conduzir o clube. Histórica.",
        },
    ]
    return (
        <>
            <a href="https://www.nike.com.br/camisa-nike-corinthians-ii-2023-24-torcedor-po-masculina-026125.html?cor=ID&couponId=98a0ad39-3c21-442a-9f96-86e3e2ac8c5b&utm_source=Yahoopatrocinado&utm_medium=cpc&utm_campaign=AllProducts_FP&msclkid=c72615ec1c5213e8667373515814887d">
                <div className='card'>
                    <h1>Camisa Nike Corinthians I 2023/24 Torcedor Pro Masculina</h1>
                    <img src={camisa} alt="" />
                    <div className="infos">
                        {items.map((item, index) => (
                            <p key={index}>
                                <p>Nome: {item.name}</p>
                                <p>Valor: {item.price}</p>
                                <p>Descrição: {item.description}</p>
                            </p>
                        ))}
                    </div>
                </div>
            </a>
        </>
    )
}
export default InteractiveCard