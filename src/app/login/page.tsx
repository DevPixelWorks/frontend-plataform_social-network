import background from "../../../public/images/background.png"
import logo from "../../../public/images/logo.png"
import Image from "next/image"
import styles from './styles.module.css'
import Link from "next/link"

export default function Page() {
  return (
    <>
      <main className="w-full flex h-dvh">
        <div className="relative w-1/2 h-full">
          <Image 
          src={background}
          alt="Background"
          fill
          className="object-cover"
          priority
          />
            
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center bg-[#191919] gap-4">
        <Image 
          src={logo}
          alt="POST CREDITS Logo"
          width={500}
        />
        <p className="text-center text-[#717171] w-[95%]">
          <strong>Entre para compartilhar seus gostos, ler e criar posts, debatar sobre teorias e interagir com outros fãs de cinema e TV.</strong> 
          <strong className="text-[#9523f8]"> Sua próxima maratona começa aqui!</strong>
        </p>
          <form action="" className={`${styles.login_form}`}>
            <div className={`${styles.form_input}`}>
              <label htmlFor="email">Email:</label>
              <input type="text" required/>
            </div>
            <div className={`${styles.form_input}`}>
              <label htmlFor="password">Senha:</label>
              <input type="password" />
            </div>
            <button 
            className="flex items-center justify-center bg-violet-900 p-[5px] w-44 rounded cursor-pointer
            font-bold  text-white text-xl hover:bg-violet-950 duration-150"
            >
              Login
              &#x2192;
            </button>
            <p className="text-[#717171]  font-bold">
              Não possui uma conta?
              <Link href={"/cadastro"} className="text-[#9523f8]"> Cadastre-se</Link>
            </p>
          </form>
        </div>
      </main>
    </>
  )
}