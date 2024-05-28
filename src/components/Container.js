import one from "../assets/images/perfume1.webp"
import two from "../assets/images/perfume2.webp"
import three from "../assets/images/perfume3.webp"

function Container(){
    return(
      <div class="container">
        <div class="box">
          <img src={one}></img>
          <p>Paris corner opulentia inverno Eau de parfum by Emir For women 100ml</p>
        </div>
        <div class="box">
          <img src={two}></img>
          <p>Fragrance world Acqua De classic Eau de parfum 80ml for Men</p>
        </div>
        <div class="box">
          <img src={three}></img>
          <p>Flavia Ampario Pour Femme Eau De parfum 100ml for Women</p>
        </div>
      </div>
    )
  }
  export default Container