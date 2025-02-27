'use client'

import { useState } from "react";
import { LayoutSwitch } from "./LayoutSwitch";

const MainPage = () => {
  const [layoutOptions, setLayoutOptions] = useState(false)


  const daarickStream = "https://player.kick.com/daarick?allowfullscreen=false"
  const daarickChat = "https://kick.com/popout/daarick/chat"

  const sylveeStream = `https://player.twitch.tv/?channel=sylvee&parent=${process.env.NEXT_PUBLIC_PARENT_LINK}`
  const sylveeChat = `https://www.twitch.tv/embed/sylvee/chat?parent=${process.env.NEXT_PUBLIC_PARENT_LINK}`
  
  // El chat de sylvee, a la hora de hacer un raid, da error. 
  // Se arregla si se actualiza. 
  // No ganas los puntos porque no te fuiste al otro stream y el chat se queda vacio porque todos se fueron al otro stream raideado


  //No permite iniciar sesion en Kick pero en Twitch si
  return (
    <div className="bg-white w-full">
      <LayoutSwitch layout={layoutOptions} setLayout={setLayoutOptions}/>
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
              src={sylveeChat} 
              allowFullScreen 
              className="w-1/5 h-full"
            ></iframe>
          </div>
          {/* <StreamWithChat streamUrl={daarickStream} chatUrl={daarickChat}/>
          <StreamWithChat streamUrl={sylveeStream} chatUrl={sylveeChat} /> */}
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
              className="w-1/5 h-full"
            ></iframe>
            <iframe 
              src={sylveeChat}
              allowFullScreen 
              className="w-1/5 h-full"
            ></iframe>
          </div>
        </div>

      )
    }


    </div>
  );
};

export default MainPage;
