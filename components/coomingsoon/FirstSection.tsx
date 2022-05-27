import Image, { ImageLoaderProps } from 'next/image';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from "react-hook-form";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation
} from "@apollo/client";




const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return src
}

type Inputs = {

  email: string,

};

const schema = yup.object({
  email: yup.string().required(),
})



const FirstSection = () => {



//   const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
//     resolver: yupResolver(schema)
//   });

//   const ADD_TODO = gql`
//   mutation createCoomingsoon($createcoomingsooninput: CreateCoomingsoonInput!) {
//     createCoomingsoon(input: $createcoomingsooninput) {
//       id
//       email
//     }
//   }
// `;

  // const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
  //   variables: {
  //     email: "ema"
  //   },
  // });



  // const onSubmit: SubmitHandler<Inputs> = ({ email }) => {
  //   // const client = new ApolloClient({
  //   //   uri: 'https://fwhyxwv4dzfspdkoslr5fuloh4.appsync-api.us-east-1.amazonaws.com/graphql',
  //   //   cache: new InMemoryCache()
  //   // });

  //   // alert(email)
  //   // reset()

  // };

  return (
    <div className="w-full h-screen relative ">
      <div className='absolute w-full h-full z-0 hidden lg:block'>
        <Image layout="fill" loader={() => myLoader({ src: "/main.webp", width: 400, quality: 10 })} src={"/main.webp"} />
      </div>
      <div className='absolute w-full h-full z-0 lg:hidden'>
        <Image layout="fill" loader={() => myLoader({ src: "/main-mobile.webp", width: 400, quality: 10 })} src={"/main-mobile.webp"} />
      </div>
      <section className="absolute lg:px-24 h-full flex items-center z-20" >
        <div className="flex lg:flex-wrap items-center">
          <div className="px-5 w-full lg:w-full md:w-1/2 md:pr-10 lg:pr-0">
            <h1 className="font-bold text-4xl lg:text-6xl lg:px-24 text-gray-600 leading-8 text-blue-900 text-center">Próximamente podras unirte a la comunidad de inmobu</h1>

            <p className="mt-4 text-xl lg:text-2xl leading-6 lg:leading-8 text-blue-800 text-center ">
              Registra tu correó y te mantendremos al tanto de los proximos eventos y noticias.
            </p>
            <form className=" py-12">
              {/* <div className="mb-4 grid text-center w-full">
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Ingresa tu correo electronico'
                  className="w-full mx-auto lg:w-96 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div> */}

              <div className="grid lg:flex gap-2 w-full">
                <a href="https://forms.gle/i7k6DMfe87bRtajF7" className="mx-auto my-3 flex gap-1 bg-blue-600 border-0 py-3 px-4 focus:outline-none hover:bg-blue-800 rounded text-lg">
                  <p className="text-white font-bold ">Ir a registrar Correo Electrónico</p>
                </a>
              </div>
              <div className="text-xs text-gray-500 mt-3 text-center lg:w-96 mx-auto">Al hacer click en el boton de arriba o diligenciar el campo, usted acepta nuestros <a className="underline text-blue-400" href="https://www.iubenda.com/privacy-policy/29595082/cookie-policy">Politica de Cookies</a> y <a href="https://www.iubenda.com/privacy-policy/29595082" className="underline text-blue-400">Política de privacidad</a>.</div>

            </form>



          </div>
          {/* <div className="hidden lg:block">
            <h1>J</h1>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default FirstSection;