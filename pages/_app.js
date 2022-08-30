import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const nameBussines = "Tu Emprende"
  return (
    <>
      <NextSeo
        title={`${nameBussines} | No te detengas`}
        description={`Bienvenid@ a ${nameBussines}. te ayudamos en el diseño y aplicaciones web, android y iphone, marketing digital, entre otras...`}
        openGraph={{
          type: "website",
          locale: "es_PE",
          site_name: `${nameBussines}`,
          url: `https://tuemprende.com${router.asPath}`,
          title: `${nameBussines} | No te detengas`,
          description: `Bienvenid@ a ${nameBussines}. te ayudamos en el diseño y aplicaciones web, android y iphone, marketing digital, entre otras...
          `,
          images: [
            {
              url: `https://tuemprende.com/images/openGraph/face.jpg`,
              width: 842,
              height: 555,
              alt: `${nameBussines}`,
            },
          ],
        }}
      />
      <Head>
        <meta name="author" content="https://tuemprende.com" />
        <meta name="developed" content="https://tuemprende.com" />
        <meta name="keywords" content="desarrollo, web, aplicaciones, movil, android, iphone, app, diseño, nativa, economico, rapido" />
        <meta name="theme-color" content="#002D77" />
        <meta name="msapplication-navbutton-color" content="#002D77" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#002D77" />

        <link rel="icon" type="image.png" sizes="192x192" href="/logo.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
