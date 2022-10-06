import '../../styles/pages/landing.css';
import billetes from '../../img/billetes.png';
import monedas from '../../img/monedas.png';
import quote from '../../img/quote.png';
import pic1 from '../../img/pic1.png';
import pic2 from '../../img/pic2.png';
import pic3 from '../../img/pic3.png';
import Public_nav from '../../components/global/navigations/public_navigation.jsx';

export default function Homepage(){
  return(
    <>
    <Public_nav/>
    <section className="home" id="home">
    <div className="content">
      <h3>UMG Quetzaltenango</h3>
      <p>Seminario de la Tecnología de la Información</p>
    </div>
  </section>
  <section className="about" id="about">
    <h1 className="heading">
      <span>Nuestra</span> empresa
    </h1>
    <div className="row">
      <div className="image">
        <img src={billetes} alt="" />
      </div>
      <div className="content">
        <h3>Ofrecemos el mejor beneficio</h3>
        <p>
          De las principales ventajas del crédito es la facilidad para adquirir
          productos de alto costo en menor tiempo y con facilidad de pago.
        </p>
        <p>
          De las principales ventajas del crédito es la facilidad para adquirir
          productos de alto costo en menor tiempo y con facilidad de pago.
        </p>
        <a href="#" className="btn">
          Leer más
        </a>
      </div>
    </div>
  </section>
  <section className="service" id="service">
    <h1 className="heading">
      Nuestros <span> servicios</span>
    </h1>
    <div className="box-container">
      <div className="box">
        <div className="icons">
          <a href="#" className="fas fa-heart" />
          <a href="#" className="fas fa-eye" />
        </div>
        <div className="image">
          <img src={monedas} alt="" />
        </div>
        <div className="content">
          <h3>Plazo de 6 meses</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <div className="credit">
            Q. 12,000 <span>%3</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="icons">
          <a href="#" className="fas fa-heart" />
          <a href="#" className="fas fa-eye" />
        </div>
        <div className="image">
          <img src={monedas} alt="" />
        </div>
        <div className="content">
          <h3>Plazo de 12 meses</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <div className="credit">
            Q. 16,000 <span>%5</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="icons">
          <a href="#" className="fas fa-heart" />
          <a href="#" className="fas fa-eye" />
        </div>
        <div className="image">
          <img src={monedas} alt="" />
        </div>
        <div className="content">
          <h3>Plazo de más de 1 año</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <div className="credit">
            Q. 24,000 <span>%10</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="review" id="review">
    <h1 className="heading">
      Nuestros <span>clientes</span>
    </h1>
    <div className="box-container">
      <div className="box">
        <img src={quote} alt="" className="quote" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
          sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi
          quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
        </p>
        <img src={pic1} className="user" alt="" />
        <h3>Batman</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
      </div>
      <div className="box">
        <img src={quote} alt="" className="quote" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
          sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi
          quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
        </p>
        <img src={pic2} className="user" alt="" />
        <h3>Mujer Maravilla</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
      </div>
      <div className="box">
        <img src={quote} alt="" className="quote" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
          sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi
          quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
        </p>
        <img src={pic3} className="user" alt="" />
        <h3>Superman</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
      </div>
    </div>
  </section>
  <section className="contact" id="contact">
    <h1 className="heading">
      <span>Nuestro </span>contacto
    </h1>
    <div className="row">
      <iframe
        className="map"
        src="https://www.google.com/maps/d/embed?mid=1oHbAR9v4P_jbiaKWrMYx0QbSSag&msa=0&ie=UTF8&t=m&ll=14.621956586024128%2C-90.52425409521484&spn=3.695213%2C4.669189&z=12&output=embed"
        allowFullScreen=""
        loading="lazy"
      />
      <form action="">
        <h3>Póngase en contacto</h3>
        <div className="inputBox">
          <span className="fas fa-user" />
          <input type="text" placeholder="Nombre" />
        </div>
        <div className="inputBox">
          <span className="fas fa-envelope" />
          <input type="email" placeholder="Correo Electrónico" />
        </div>
        <div className="inputBox">
          <span className="fas fa-phone" />
          <input type="number" placeholder="Número" />
        </div>
        <input type="submit" defaultValue="Contacta ahora" className="btn" />
      </form>
    </div>
  </section>
  <section className="footer">
    <div className="share">
      <a href="#" className="fab fa-facebook-f" />
      <a href="#" className="fab fa-twitter" />
      <a href="#" className="fab fa-instagram" />
      <a href="#" className="fab fa-youtube" />
      <a href="#" className="fab fa-linkedin" />
      <a href="#" className="fab fa-pinterest" />
    </div>
    <div className="credit">
      Creado por <span>Seminario UMG 2022</span> | Todos los Derechos Reservados
    </div>
  </section>
    </>
  );
}
