import React, { useState } from 'react'
import './Portfolio.css'
import Modal from '../Modals/Modal'
import ModalImg from '../Modals/ModalImg'
import Carrousel from '../Carrousel/Carrousel'

// Imagenes proyecto individual pokemon
import LandingPokemon from '../../assets/proyectos/PokemonPi-img/img1.png'
import HomePokemon from '../../assets/proyectos/PokemonPi-img/img2.png'
import HomePokemon2 from '../../assets/proyectos/PokemonPi-img/img3.png'
import DetailPokemon from '../../assets/proyectos/PokemonPi-img/img4.png'
import FormPokemon from '../../assets/proyectos/PokemonPi-img/img5.png'
import FormPokemon2 from '../../assets/proyectos/PokemonPi-img/img6.png'

// Imagenes proyecto individual videogames
import LandingVideogames from '../../assets/proyectos/VideogamesPi-img/img1.png'
import HomeVideogames from '../../assets/proyectos/VideogamesPi-img/img2.png'
import HomeVideogames2 from '../../assets/proyectos/VideogamesPi-img/img3.png'
import HomeVideogames3 from '../../assets/proyectos/VideogamesPi-img/img4.png'
import DetailVideogames from '../../assets/proyectos/VideogamesPi-img/img5.png'
import FormVideogames from '../../assets/proyectos/VideogamesPi-img/img6.png'
import FormVideogames2 from '../../assets/proyectos/VideogamesPi-img/img7.png'

// Imagenes proyecto final dreams factory
import LandingPf from '../../assets/proyectos/DreamsFactory-img/img1.png'
import HomePf1 from '../../assets/proyectos/DreamsFactory-img/img2.png'
import HomePf2 from '../../assets/proyectos/DreamsFactory-img/img3.png'
import HomePf3 from '../../assets/proyectos/DreamsFactory-img/img4.png'
import FavoritesPf from '../../assets/proyectos/DreamsFactory-img/img5.png'
import LoginPf from '../../assets/proyectos/DreamsFactory-img/img6.png'
import CartPf from '../../assets/proyectos/DreamsFactory-img/img7.png'
import FiltersPf from '../../assets/proyectos/DreamsFactory-img/img8.png'
import AboutPf from '../../assets/proyectos/DreamsFactory-img/img9.png'
import TerminosPf from '../../assets/proyectos/DreamsFactory-img/img10.png'
import PoliticasPf from '../../assets/proyectos/DreamsFactory-img/img11.png'
import DetailPf from '../../assets/proyectos/DreamsFactory-img/img12.png'
import AccordeonPf from '../../assets/proyectos/DreamsFactory-img/img13.png'

// Imagenes de portafolio echo con tailwindCSS
// import HeaderImg from '../../assets/proyectos/Portafolio-img/img1.png'
// import AboutImg from '../../assets/proyectos/Portafolio-img/img2.png'
// import ExperiencesImg from '../../assets/proyectos/Portafolio-img/img3.png'
// import WorksImg from '../../assets/proyectos/Portafolio-img/img4.png'
// import ContactImg from '../../assets/proyectos/Portafolio-img/img5.png'

// Imagenes de proyecto Courses-App
import LandingCourses from '../../assets/proyectos/CoursesApp-img/img1.png'
import LandingCourses2 from '../../assets/proyectos/CoursesApp-img/img2.png'
import HomeCourses from '../../assets/proyectos/CoursesApp-img/img3.png'
import HomeCourses2 from '../../assets/proyectos/CoursesApp-img/img4.png'
import SearchCourse from '../../assets/proyectos/CoursesApp-img/img5.png'
import DetailCourse from '../../assets/proyectos/CoursesApp-img/img6.png'
import ListCourses from '../../assets/proyectos/CoursesApp-img/img7.png'
import menuCourses from '../../assets/proyectos/CoursesApp-img/img8.png'
import FormCourses from '../../assets/proyectos/CoursesApp-img/img9.png'

// Imagenes Primer Proyecto con NextJS 13
import HomeNext from '../../assets/proyectos/Next JS-Img/img1.png'
import HomeNext2 from '../../assets/proyectos/Next JS-Img/img2.png'
import AboutNext from '../../assets/proyectos/Next JS-Img/img3.png'
import ServicesNext from '../../assets/proyectos/Next JS-Img/img4.png'

// Imagenes de proyecto Clinica Dani
import LandingDani from '../../assets/proyectos/ClinicaDani-img/img1.png'
import InstructionsDani from '../../assets/proyectos/ClinicaDani-img/img2.png'
import FormDani from '../../assets/proyectos/ClinicaDani-img/img3.png'
import AboutDani from '../../assets/proyectos/ClinicaDani-img/img4.png'
import TitlesDani from '../../assets/proyectos/ClinicaDani-img/img5.png'
import OpinionsDani from '../../assets/proyectos/ClinicaDani-img/img6.png'
import ContactDani from '../../assets/proyectos/ClinicaDani-img/img7.png'
import FooterDani from '../../assets/proyectos/ClinicaDani-img/img8.png'

const imagenesIndPok = [LandingPokemon, HomePokemon, HomePokemon2, DetailPokemon, FormPokemon, FormPokemon2]

const imagenesIndVid = [LandingVideogames, HomeVideogames, HomeVideogames2, HomeVideogames3, DetailVideogames, FormVideogames, FormVideogames2]

const imagenesPf = [LandingPf, HomePf1, HomePf2, HomePf3, FavoritesPf, LoginPf, CartPf, FiltersPf, AboutPf, TerminosPf, PoliticasPf, DetailPf, AccordeonPf]

// const imagenesPortafolio = [HeaderImg, AboutImg, ExperiencesImg, WorksImg, ContactImg]

const imagenesNextJS = [HomeNext, HomeNext2, AboutNext, ServicesNext]

const imagenesCoursesApp = [LandingCourses, LandingCourses2, HomeCourses, HomeCourses2, SearchCourse, DetailCourse, ListCourses, menuCourses, FormCourses]

const imagenesClinicaDani = [LandingDani, InstructionsDani, FormDani, AboutDani, TitlesDani, OpinionsDani, ContactDani, FooterDani]

const Portfolio = () => {
  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)
  // const [openModal4, setOpenModal4] = useState(false)
  const [openModal5, setOpenModal5] = useState(false)
  const [openModal6, setOpenModal6] = useState(false)
  const [openModal7, setOpenModal7] = useState(false)
  const [openModalPiPok, setOpenModalPiPok] = useState(false)
  const [openModalPiVid, setOpenModalPiVid] = useState(false)
  const [openModalPG, setOpenModalPG] = useState(false)
  // const [openModalPortfolio, setOpenModalPortfolio] = useState(false)
  const [openModalCourses, setOpenModalCourses] = useState(false)
  const [openModalNext, setOpenModalNext] = useState(false)
  const [openModalClinica, setOpenModalClinica] = useState(false)

  return (
    <section id='portfolio'>
      <h5>Projects</h5>
      <h2>Proyectos</h2>

      <div className="container portfolio__container">

          <article className='portfolio__items'>
          <div className="portfolio__items-image">
            <img src={imagenesIndPok[0]} alt="" onClick={() => setOpenModalPiPok(true)}/>
          </div>
          <h3>Proyecto Pokémons</h3>
          <div className="portfolio__items-cta">
          <button className="btn btn-second" onClick={() => setOpenModal1(true)}>Descripcion</button>
          <a href="https://github.com/Juanicamuss21/PI-Pokemon" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
          </article>

          <ModalImg openModal={openModalPiPok} setOpenModal={setOpenModalPiPok}>
                <Carrousel images={imagenesIndPok}/>
          </ModalImg>

          <Modal openModal={openModal1} setOpenModal={setOpenModal1}>
                <h1>
                    Pokémons App
                </h1>
                <p>
                    Éste proyecto fue realizado de manera individual. Se desarrolló desde cero, tanto en el front end, back end y base de datos. Se utilizaron herramientas y tecnologias como HTML, CSS, Javascript, React, Redux, NodeJS, ExpressJS, Sequelize y PostgreSQL. Consiste en una App donde puedes encontrar información de diferentes Pokémons, filtrarlos y ordernalos en base a su información. También cuenta con un formulario donde puedes crear tu propio Pokémon!.
                </p>
          </Modal>

          <article className='portfolio__items'>
          <div className="portfolio__items-image">
            <img src={imagenesIndVid[0]} alt="" onClick={() => setOpenModalPiVid(true)}/>
          </div>
          <h3>Proyecto Videogames</h3>
          <div className="portfolio__items-cta">
          <button className="btn btn-second" onClick={() => setOpenModal2(true)}>Descripción</button>
          <a href="https://github.com/Juanicamuss21/PI-Videogames" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
          </article>

          <ModalImg openModal={openModalPiVid} setOpenModal={setOpenModalPiVid}>
                <Carrousel images={imagenesIndVid}/>
          </ModalImg>

          <Modal openModal={openModal2} setOpenModal={setOpenModal2}>
                <h1>
                    Videogames App
                </h1>
                <p>
                Éste proyecto fue realizado de manera individual. Se desarrolló desde cero, tanto en el front end, back end y base de datos. Se utilizaron herramientas y tecnologias como HTML, CSS, Javascript, React, Redux, NodeJS, ExpressJS, Sequelize y PostgreSQL. Consiste en una App donde puedes encontrar información acerca de los videojuegos más populares del mercado, filtrarlos y ordernalos en base a su información. También cuenta con un formulario donde puedes crear tu propio Videojuego junto a su respectiva información.
                </p>
          </Modal>

          <article className='portfolio__items'>
          <div className="portfolio__items-image">
            <img src={imagenesPf[0]} alt="" onClick={() => setOpenModalPG(true)}/>
          </div>
          <h3>Proyecto E-Commerce</h3>
          <div className="portfolio__items-cta">
          <button className="btn btn-second" onClick={() => setOpenModal3(true)}>Descripción</button>
          <a href="https://github.com/leyargo7/dreams-factory-pf" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
          </article>

          <ModalImg openModal={openModalPG} setOpenModal={setOpenModalPG}>
                <Carrousel images={imagenesPf}/>
          </ModalImg>

          <Modal openModal={openModal3} setOpenModal={setOpenModal3} >
                <h1>
                    Componentes Gaming App
                </h1>
                <p>
                  Éste proyecto fue realizado de manera grupal. El proyecto está basado en una plataforma para la realización de compras, y posteos de los diferentes componentes. En la plataforma encontraras opciones como filtrado de componentes gaming, una sección de favoritos, formulario login, detalle del producto, panel de control para el administrador, sección checkout, información sobre desarrolladores, preguntas frecuentes y sus respuestas. Se utilizaron herramientas y tecnologias como  HTML, CSS, React, Redux, NodeJS, ExpressJS, MongoDB Atlas.<br/>
                  <a href="https://dreams-factory-pf.vercel.app/" target="_blank" rel="noreferrer">https://dreams-factory-pf.vercel.app/</a>
                </p>
            </Modal>

          {/* <article className='portfolio__items'>
          <div className="portfolio__items-image">
            <img src={imagenesPortafolio[0]} alt="" onClick={() => setOpenModalPortfolio(true)}/>
          </div>
          <h3>Portafolio en inglés</h3>
          <div className="portfolio__items-cta">
          <button href="https://github.com/Juanicamuss21" className="btn btn-second" target="_blank" rel="noreferrer" onClick={() => setOpenModal4(true)}>Descripción</button>
          <a href="https://github.com/Juanicamuss21" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
          </article>

          <ModalImg openModal={openModalPortfolio} setOpenModal={setOpenModalPortfolio}>
                <Carrousel images={imagenesPortafolio}/>
          </ModalImg>

          <Modal openModal={openModal4} setOpenModal={setOpenModal4} >
                <h1>
                    Portafolio en Inglés
                </h1>
                <p>
                  Proyecto realizado para contar con un portafolio en el lenguaje inglés, realizado con HTML, TailwindCSS, Javascript, React, NodeJS. <br/>
                  <a href="https://portafolio-ingles.vercel.app/" target="_blank" rel="noreferrer">https://portafolio-ingles.vercel.app/</a>
                </p>
            </Modal> */}

          <article className='portfolio__items'>
          <div className="portfolio__items-image">
            <img src={imagenesCoursesApp[0]} alt="" onClick={() => setOpenModalCourses(true)}/>
          </div>
          <h3>Proyecto Courses App</h3>
          <div className="portfolio__items-cta">
          <button className="btn btn-second" onClick={() => setOpenModal5(true)}>Descripción</button>
          <a href="https://github.com/Juanicamuss21/Courses-App" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
          </article>

          <ModalImg openModal={openModalCourses} setOpenModal={setOpenModalCourses}>
                <Carrousel images={imagenesCoursesApp}/>
          </ModalImg>

          <Modal openModal={openModal5} setOpenModal={setOpenModal5} >
                <h1>
                    Courses App
                </h1>
                <p>
                  Éste proyecto fue realizado con el proposito de organizar los cursos y facilitar al usuario el aprendizaje de desarrollado web. <br/>
                  Fué desarrollado con las herramientas y tecnologias como HTML, CSS, Javascript, React, Redux, NodeJS, ExpressJS, PostgreSQL, Sequelize.
                </p>
            </Modal>

          <article className='portfolio__items'>
          <div className="portfolio__items-image">
            <img src={imagenesNextJS[0]} alt="" onClick={() => setOpenModalNext(true)}/>
          </div>
          <h3>Proyecto con NextJS 13</h3>
          <div className="portfolio__items-cta">
          <button className="btn btn-second" onClick={() => setOpenModal6(true)}>Descripción</button>
          <a href="https://github.com/Juanicamuss21" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
          </article>

          <ModalImg openModal={openModalNext} setOpenModal={setOpenModalNext}>
                <Carrousel images={imagenesNextJS}/>
          </ModalImg>

          <Modal openModal={openModal6} setOpenModal={setOpenModal6} >
                <h1>
                    Proyecto con NextJS 13
                </h1>
                <p>
                  Éste proyecto fue realizado para practicar la implementacion de la nueva versión de NextJS.<br/>
                  <a href="https://nextjs-firstproject-sepia.vercel.app/" target="_blank" rel="noreferrer">https://nextjs-firstproject-sepia.vercel.app/</a>
                </p>
            </Modal>

          <article className='portfolio__items'>
          <div className="portfolio__items-image">
            <img src={imagenesClinicaDani[0]} alt="" onClick={() => setOpenModalClinica(true)}/>
          </div>
          <h3>Proyecto Clinica Dani</h3>
          <div className="portfolio__items-cta">
          <button className="btn btn-second" onClick={() => setOpenModal7(true)}>Descripción</button>
          <a href="https://github.com/villares09/Website-to-take-appointments" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
          </article>

          <ModalImg openModal={openModalClinica} setOpenModal={setOpenModalClinica}>
                <Carrousel images={imagenesClinicaDani}/>
          </ModalImg>

          <Modal openModal={openModal7} setOpenModal={setOpenModal7} >
                <h1>
                    Proyecto Clinica Dani
                </h1>
                <p>
                Este proyecto consistió en el diseño y desarrollo de un sitio web personalizado para una destacada neonatóloga. El objetivo principal de este sitio web era brindar a la doctora una plataforma en línea para promover su profesión, establecer una presencia digital sólida y ofrecer una manera eficiente para que sus pacientes potenciales se comuniquen y programen citas médicas.<br/>
                Fué desarrollado con las herramientas y tecnologias como HTML, CSS, Javascript, Typescript, React, Redux, NodeJS, ExpressJS, PostgreSQL, Sequelize.<br/>
                <a href="https://github.com/villares09/Website-to-take-appointments" target="_blank" rel="noreferrer">https://github.com/villares09/Website-to-take-appointments</a>
                </p>
            </Modal>

        </div>

    </section>
  )
}

export default Portfolio
