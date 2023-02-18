import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/router';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
// import { getCsrfToken, signIn, getSession } from 'next-auth/react';
// import { getCookie, setCookies } from 'cookies-next';
import Logo from '../svg/LogoInmobu';



interface SingInProps {
  locale: string,
  csrfToken: string
}

const SignIn: NextPage<SingInProps> = ({ locale, csrfToken }) => {
  // const NEXT_LOCALE = getCookie("NEXT_LOCALE")
  // if (!NEXT_LOCALE) {
  //   setCookies("NEXT_LOCALE", locale, {
  //     path: "/"
  //   })
  // }
  const router = useRouter();
  const { error } = router.query
  // const { t } = useTranslation(['login']);
  return (
    <>
      <div className="h-screen w-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md h-full w-full space-y-6 m-auto">
          <div>
            <div className="w-full flex items-center">
              <div className="w-full"><div className="mx-auto w-max"><Logo height={50} /></div></div>
            </div>
          </div>
          {
            error === "CredentialsSignin" &&
            <div className="flex items-center bg-red-100 py-3 px-2 rounded" role="alert">
              <div className="bg-red-600 rounded-full h-4 w-4 flex items-center mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.001 512.001"
                  className="h-2 text-white m-auto"
                  fill="currentColor"
                >
                  <path d="M294.111 256.001L504.109 46.003c10.523-10.524 10.523-27.586 0-38.109-10.524-10.524-27.587-10.524-38.11 0L256 217.892 46.002 7.894C35.478-2.63 18.416-2.63 7.893 7.894s-10.524 27.586 0 38.109l209.998 209.998L7.893 465.999c-10.524 10.524-10.524 27.586 0 38.109 10.524 10.524 27.586 10.523 38.109 0L256 294.11l209.997 209.998c10.524 10.524 27.587 10.523 38.11 0 10.523-10.524 10.523-27.586 0-38.109L294.111 256.001z" />
                </svg>
              </div>
              <div className="text-red-600 text-sm">

                {/* {t("credentialsSignin")} */}
              </div>
            </div>
          }
          <div>
            <h2 className="mt-6 lg:mt-24 text-3xl font-bold text-blue-500">Crear una cuenta</h2>

            <form className="mt-8 space-y-6" action="/api/auth/callback/credentials" method="post" >
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Correo electronico
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="CorreoElectronioc"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Constraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-500 focus:ring-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                    Recuerdame
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password">
                    <a className="font-medium text-blue-600 hover:text-blue-500">
                      Olvidar constraseña
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  </span>
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
          <div>

          </div>
          <div className="w-full">
            <div className="flex gap-3 mx-auto w-max">
              {/* <button className="px-5 rounded lg:border lg:border-gray-400 py-2 text-sm flex items-center"
                onClick={() => { signIn('google') }}
              >
                <div className="lg:pr-1.5"><Google height={20} /></div>
                <div className="hidden lg:block">Google</div>
              </button>
              <button className="px-5 rounded lg:border lg:border-gray-400 py-2 text-sm flex items-center"
                onClick={() => { signIn('facebook') }}
              >
                <div className="lg:pr-1.5"><Apple height={20} /></div>
                <div className="hidden lg:block">Apple</div>
              </button> */}
              {/* <button
                // onClick={() => { signIn('facebook') }}
                className="h-8 w-8 lg:h-auto mx-5 lg:m-0 lg:w-auto lg:px-5 bg-blue-800 lg:py-2 text-sm text-white flex items-center rounded-full lg:rounded">
                <div className="lg:pr-2 w-full lg:w-auto font-bold text-base"><div className="mx-aut">f</div></div>
                <div className="hidden lg:block">Facebook</div>
              </button> */}
            </div>
          </div>
          <div className="text-center mt-12">no tiene cuanta <Link href="/get-started/create"><a className="text-blue-600 font-bold">Iniciar Sesión</a></Link> </div>
        </div>
        <div className="absolute hidden top-0 right-0 lg:flex items-center mt-8 mr-10">
          Crea una cuenta
          <Link
            href="/get-started/create"
          >
            <a className="border border-gray-300 py-2 px-5 rounded ml-4 shadow font-bold text-bl">
              crea una cuenta
            </a>
          </Link>
        </div>
      </div>
    </>

  )
}



// export const getServerSideProps: GetServerSideProps = async ({ req, locale, resolvedUrl }) => {
//   const NEXT_LOCALE: string = req.cookies["NEXT_LOCALE"]

//   // const i18nConf = await serverSideTranslations(locale!)
//   // const csrfToken = await getCsrfToken({ req })
//   // const session = await getSession({ req })
//   if (session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false
//       }
//     }
//   }
//   if (NEXT_LOCALE !== locale && NEXT_LOCALE) {
//     return {
//       redirect: {
//         destination: `/${NEXT_LOCALE || locale}/${resolvedUrl}`,
//         permanent: false
//       }
//     }
//   }
//   return {
//     props: {
//       locale,
//       csrfToken,
//       // ...i18nConf
//     },
//   }
// }



export default SignIn
