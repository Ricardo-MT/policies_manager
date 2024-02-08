"use client";

const h1Styles = "mb-3 text-3xl font-semibold";
const h2Styles = "m-3 text-2xl font-semibold";
const pStyles = "m-0 max-w-[90ch] text-sm opacity-50";
const mainStyles = `[&_a]:underline flex min-h-screen flex-col items-center justify-between p-12 before:absolute before:h-[100vh] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]`;
const olStyles = "list-decimal list-inside";

const email = "info@ricardomejiastravieso.com";

export const SpanishText = ({ name }: { name: string }) => {
  return (
    <main className={mainStyles}>
      <header>
        <h1 className={h1Styles}>Política de Privacidad para {name}</h1>
      </header>
      <br />

      <div>
        <h2 className={h2Styles}>1. Introducción</h2>
        <p className={pStyles}>
          Bienvenido a {name} (&ldquo;nosotros,&rdquo; &ldquo;nuestro,&rdquo;
          &ldquo;nos&rdquo;). Estamos comprometidos a proteger tu información
          personal y tu derecho a la privacidad. Si tienes alguna pregunta o
          preocupación sobre nuestra política o nuestras prácticas con respecto
          a tu información personal, por favor contáctanos.
        </p>
        <br />

        <h2 className={h2Styles}>2. Información de la Aplicación</h2>
        <ul>
          <li>
            <strong>Términos de Uso</strong>
          </li>
          <p className={pStyles}>
            Por favor lee estos Términos de Uso cuidadosamente antes de usar{" "}
            {name}. Al acceder o usar {name}, aceptas estar sujeto a estos
            términos y condiciones.
          </p>
          <p className={pStyles}>
            {name} (&ldquo;nosotros,&rdquo; &ldquo;nuestro,&rdquo;
            &ldquo;nos&rdquo;) proporciona este Acuerdo de Términos de Uso
            (&ldquo;Acuerdo&rdquo;) para regir tu uso de {name} y sus servicios
            relacionados. Al acceder o usar {name}, aceptas cumplir y estar
            sujeto a este Acuerdo, así como a cualquier otro término, guía o
            regla que podamos publicar.
          </p>
          <p className={pStyles}>
            Al usar {name}, aceptas y acuerdas estar sujeto a estos Términos de
            Uso. Si no estás de acuerdo con estos términos, por favor no uses{" "}
            {name}.
          </p>
          <p className={pStyles}>
            Podemos modificar estos Términos de Uso en cualquier momento. Eres
            responsable de revisar regularmente estos términos, y tu uso
            continuado de {name} constituye tu aceptación de cualquier cambio.
          </p>
          <p className={pStyles}>
            Nos reservamos el derecho de terminar o suspender el acceso a {name}{" "}
            a nuestra discreción sin previo aviso, incluidas las violaciones de
            estos Términos de Uso.
          </p>
          <p className={pStyles}>
            Si tienes alguna pregunta sobre estos Términos de Uso, por favor
            contáctanos en {email}.
          </p>
          <br />

          <li>
            <strong>Datos que Recopilamos</strong>
          </li>
          <p className={pStyles}>
            No recopilamos ningún dato personal de nuestros usuarios. {name}{" "}
            está diseñado para respetar tu privacidad.
          </p>
          <br />

          <li>
            <strong>Cookies</strong>
          </li>
          <p className={pStyles}>
            No utilizamos ninguna cookie o tecnología de seguimiento similar en{" "}
            {name}.
          </p>
          <br />
          <li>
            <strong>Sesiones</strong>
          </li>
          <p className={pStyles}>
            Podemos utilizar sesiones para propósitos de autenticación, para
            permitir a los usuarios facilidad de acceso a la aplicación y acceso
            a sus datos en nuestros servidores.
          </p>
          <br />

          <li>
            <strong>Información Compartida con Terceros</strong>
          </li>
          <p className={pStyles}>
            Para una mejor experiencia, mientras usas nuestro Servicio, podemos
            requerirte que nos proporciones cierta información personal
            identificable. La aplicación utiliza servicios de terceros que
            pueden recopilar información utilizada para identificarte. Enlace a
            la política de privacidad de los proveedores de servicios de
            terceros utilizados por la aplicación:
            <br />
            <br />
            <ol className={olStyles}>
              <li>
                <a href="https://policies.google.com/privacy">
                  Servicios de Google Play
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/policies/analytics">
                  Google Analytics para Firebase
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/support/privacy/">
                  Firebase Crashlytics
                </a>
              </li>
            </ol>
            <br />
          </p>
          <li>
            <strong>Privacidad de los Niños</strong>
          </li>
          <p className={pStyles}>
            Estos Servicios no están dirigidos a nadie menor de 13 años. No
            recopilamos información personal identificable de niños menores de
            13 años de edad. En el caso de que descubramos que un niño menor de
            13 ha proporcionado información personal, la eliminamos
            inmediatamente de nuestros servidores. Si eres padre o tutor y estás
            consciente de que tu hijo nos ha proporcionado información personal,
            por favor contáctanos y tomaremos las acciones necesarias.
          </p>
          <br />
          <li>
            <strong>Cambios a Esta Política de Privacidad</strong>
          </li>
          <p className={pStyles}>
            Podemos actualizar nuestra Política de Privacidad de vez en cuando.
            Por lo tanto, se te recomienda revisar esta página periódicamente
            para cualquier cambio. Te notificaremos sobre cualquier cambio
            publicando la nueva Política de Privacidad en esta página.
          </p>
          <br />
        </ul>

        <h2 className={h2Styles}>Contáctanos</h2>
        <p className={pStyles}>
          Si tienes alguna pregunta o sugerencia sobre nuestra Política de
          Privacidad o deseas ejercer tus derechos con respecto a tu información
          personal, por favor contáctanos en {email}.
        </p>
        <br />
      </div>
    </main>
  );
};
