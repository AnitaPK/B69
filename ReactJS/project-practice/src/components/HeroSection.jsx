import './HeroSection.css'
import imgOne from '../assets/imgOne.jpeg'
import Button from './Button'


function HeroSection(){




    return(
        <>      
        <h3 style={{textAlign:"center"}}> Bata</h3>
        <section className="imgSection">
        <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis impedit nostrum quisquam et ex veniam odio? Corrupti libero asperiores officia.
        <Button data11="More Info"/>

        </div>
        <div>
            <img src={imgOne} alt="" />
        </div>
        </section>
        </>

    )
}





export default HeroSection