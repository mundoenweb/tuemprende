import Image from 'next/image'
import logo from '../public/images/common/logo.svg'
import imgWhatsApp from '../public/images/common/whatsapp.svg'
import stylePage from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className={stylePage.box_main}>
      <Image
        src={logo}
        width={360}
        height={90}
        alt="Tu Emprende"
        objectFit='containt'
      />
      <h1>Muy pronto contigo.</h1>
      <span>Pensando en tí, hemos decidido renovarnos para traerte una mejor experiencia</span>
      <p>
        Si esta interesado un un proyecto, web, movil o de escritorio y desea conocer nuestro portafolio, puedes escribirnos via whatsapp
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=51958917274&text=Hola!%20Estoy%20interesado%20en%20sus%20servicios."
        target="new"
      >
        <Image
          src={imgWhatsApp}
          width={30}
          height={30}
          alt="+51958917274"
          objectFit='containt'
        />
      </a>

    </section>
  )
}
