import Btc from "../images/hero/bitcoin.png";
import Eth from "../images/hero/ethereum.png";

function Join() {
  return (
    <>
      <section id="join" className="join-section">
        <div className="container">
          <div className="join-content">
            <img alt="coin_img" className="join-content__btc" src={Btc} />
            <img alt="coin_img" className="join-content__eth" src={Eth} />
            <div className="join-content__text">
              <h2>
              Únete a nosotras a través de <br /> <span>discord</span>
              </h2>
              <p>Invierta y administre todas sus criptomonedas en un solo lugar.</p>
              <a rel="noreferrer" target="_blank" href="https://discord.com/">
              Unirse a través de Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;