import ChooseBox from "./ChooseBox";
import BitHand from "../images/chooseus/choose-main.png";

function WhyUs() {
  return (
    <>
      <section id="choose-us" className="why-section">
        <div className="container">
          <div className="choose-container">
            <h2>
            por qué <span>elegirnos</span>
            </h2>
            <div className="choose-container__content">
              <div className="choose-container__content__1">
                <ChooseBox
                  img="fa-solid fa-wallet"
                  title="CONECTA TU BILLETERA"
                  text="Use Trust Wallet, Metamask o para conectarse a la aplicación."
                />
                <ChooseBox
                  img="fa-solid fa-pen-ruler"
                  title="SELECCIONA TU CANTIDAD"
                  text="Cargue su criptografía y establezca un título, una descripción y un precio."
                />
                <ChooseBox
                  img="fa-solid fa-bolt"
                  title="CONFIRMAR TRANSACCIÓN"
                  text="Gane vendiendo su criptomoneda en nuestro mercado."
                />
              </div>
              <div className="choose-container__content__2">
                <img src={BitHand} alt="hand_img" />
              </div>
              <div className="choose-container__content__3">
                <ChooseBox
                  img="fa-solid fa-satellite-dish"
                  title="RECIBE TUS PROPIOS NFTS"
                  text="Invierta todas sus criptomonedas en un solo lugar en una plataforma."
                />
                <ChooseBox
                  img="fa-solid fa-chess-knight"
                  title="TOMAR UN MERCADO PARA VENDER"
                  text="Descubra, recopile las colecciones criptográficas correctas para comprar o vender."
                />
                <ChooseBox
                  img="fa-solid fa-boxes-stacked"
                  title="IMPULSA TU COLECCIÓN"
                  text="Facilitamos el descubrimiento, la inversión y la gestión."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;