'use client'

import { useState, useEffect } from "react";
import { LayoutSwitch } from "./LayoutSwitch";
import { useTheme } from "next-themes"
import { ModeToggle } from "./ModeToggle";

const MainPage = () => {
  const [layoutOptions, setLayoutOptions] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const daarickStream = "https://player.kick.com/daarick?allowfullscreen=false"
  const daarickChat = "https://kick.com/popout/daarick/chat"

  const sylveeStream = `https://player.twitch.tv/?channel=sylvee&parent=${process.env.NEXT_PUBLIC_PARENT_LINK}&muted=false`
  const sylveeChat = `https://www.twitch.tv/embed/sylvee/chat?parent=${process.env.NEXT_PUBLIC_PARENT_LINK}`

  const sylveeChatDark = `https://www.twitch.tv/embed/sylvee/chat?darkpopout&parent=${process.env.NEXT_PUBLIC_PARENT_LINK}`
  
// El chat de sylvee, a la hora de hacer un raid, da error. 
  // Se arregla si se actualiza. 
  // No ganas los puntos porque no te fuiste al otro stream y el chat se queda vacio porque todos se fueron al otro stream raideado


  //No permite iniciar sesion en Kick pero en Twitch si
  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-black'} w-full`}>
      <LayoutSwitch setLayout={setLayoutOptions}/>
      <div className="absolute top-10 p-3">
        <ModeToggle />
      </div>
{/* // Layout 1: Stream izquierda, Chat derecha (streams verticales) */}
    {layoutOptions ? (
        <div className='w-full h-screen m-0 pt-0 flex flex-col justify-center items-center'>
          {/* Daarick */}
          <div className="w-full lg:w-full h-full flex flex-row justify-center">
            <iframe 
              src={daarickStream} 
              allowFullScreen 
              className="xl:w-2/5 md:w-2/3 lg:w-1/2 h-full"
            ></iframe>
            <iframe 
              src={daarickChat} 
              allowFullScreen 
              className="w-1/5 h-full"
            ></iframe>
          </div>

          {/* Sylvee */}
          <div className="w-full lg:w-full h-full flex flex-row justify-center">
            <iframe 
              src={sylveeStream} 
              allowFullScreen 
              className="xl:w-2/5 md:w-2/3 lg:w-1/2 h-full"
            ></iframe>
            <iframe 
              src={theme == 'light' ? sylveeChat : sylveeChatDark} 
              allowFullScreen 
              className="w-1/5 h-full"
            ></iframe>
          </div>
        </div>
      ) : (
// Layout 2: Streams arriba, Chats abajo (streams horizontales)
        <div className="w-full h-screen flex flex-col justify-center items-center">
          {/* Streams */}
          <div className="w-full lg:w-full h-full flex flex-row justify-center">
            <iframe 
              src={daarickStream} 
              allowFullScreen 
              className="w-[36.5%] overflow-scroll h-full"
            ></iframe>
            <iframe 
              src={sylveeStream} 
              allowFullScreen 
              className="w-[36.5%] overflow-scroll h-full object-fit"
            ></iframe>
          </div>

          {/* Chats */}
          <div className="w-full lg:w-full h-full flex flex-row justify-center">
            <iframe 
              src={daarickChat} 
              allowFullScreen 
              className="2xl:w-1/4 md:w-1/3 h-full"
            ></iframe>
            <iframe 
              src={theme === 'light' ? sylveeChat : sylveeChatDark} 
              allowFullScreen 
              className="2xl:w-1/4 md:w-1/3 h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
