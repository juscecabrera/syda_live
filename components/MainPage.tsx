'use client'

import { useState } from "react";

const MainPage = () => {
  const [layoutOptions, setLayoutOptions] = useState(1)


  const daarickStream = "https://player.kick.com/daarick"
  const daarickChat = "https://kick.com/popout/daarick/chat"

  const sylveeStream = `https://player.twitch.tv/?channel=sylvee&parent=${process.env.PARENT_LINK}`
  const sylveeChat = `https://www.twitch.tv/embed/sylvee/chat?parent=${process.env.PARENT_LINK}`
  
  // El chat de sylvee, a la hora de hacer un raid, da error. 
  // Se arregla si se actualiza. 
  // No ganas los puntos porque no te fuiste al otro stream y el chat se queda vacio porque todos se fueron al otro stream raideado


  //No permite iniciar sesion en Kick pero en Twitch si
  return (
    <div className="bg-black">
    {/* // Layout 1: Stream izquierda, Chat derecha (streams verticales) */}

        <div className='w-screen h-screen flex flex-col justify-center items-center'>
          {/* Daarick */}
          <div className="w-[80%] lg:w-full h-[45%] flex flex-row justify-center">
            <iframe 
              src={daarickStream} 
              allowFullScreen 
              className="w-[39%] overflow-scroll h-[100%]"
            ></iframe>
            <iframe 
              src={daarickChat} 
              allowFullScreen 
              className="w-1/5 h-full"
            ></iframe>
          </div>


          {/* Sylvee */}
          <div className="w-[80%] lg:w-full h-[45%] flex flex-row justify-center">
            <iframe 
              src={sylveeStream} 
              allowFullScreen 
              className="w-[39%] overflow-scroll h-[100%] object-fit"
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

  {/* Layout 2: Stream izquierda, Stream derecha, chats abajo (streams horizontales) */}

    </div>
  );
};

export default MainPage;
