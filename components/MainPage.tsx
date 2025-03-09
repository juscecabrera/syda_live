'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ModeToggle } from './ModeToggle';
import { LayoutToggle } from './LayoutToggle';

const MainPage = () => {
  const [layoutOptions, setLayoutOptions] = useState(false);
  //LayoutOptions true = Vertical, false = Horizontal
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // O un placeholder como <div className="w-full h-screen bg-gray-200"></div>
  }

  const daarickStream = "https://player.kick.com/daarick";
  // const daarickStream = "https://kick.com/daarick";
  const daarickChat = "https://kick.com/popout/daarick/chat";

  const sylveeStream = `https://player.twitch.tv/?channel=sylvee&parent=${process.env.NEXT_PUBLIC_PARENT_LINK}&muted=false`;
  const sylveeChat = `https://www.twitch.tv/embed/sylvee/chat?parent=${process.env.NEXT_PUBLIC_PARENT_LINK}`;
  const sylveeChatDark = `https://www.twitch.tv/embed/sylvee/chat?darkpopout&parent=${process.env.NEXT_PUBLIC_PARENT_LINK}`;

  // Usar resolvedTheme para manejar el tema del sistema
  const currentTheme = resolvedTheme || theme;


  /*
  Iframe con 16:9 aspect ratio
  Para el iframe con w-36.5%, el height es 20.53%
  Para el iframe con w-3/5, el height es 33.75%
  Para el iframe con w-2/3, el height es 37.50%
  

  Si es vertical o horizontal, tenerlo como activo en el toggle. Lo mismo con light y dark

  El stream de Daarick funciona perfecto hasta lg. A partir de xl aparece el scroll y se corta

  En Vertical: hasta width 1330
  En Horizontal: hasta width 1596

  Posible solucion: al pasar estos tamaños, implementar un div en cada uno para que tenga negro a los costados
  */

  return (
    <div className={`${currentTheme === 'light' ? 'bg-white' : 'bg-black'} w-full h-screen`}>
      {/* <LayoutSwitch setLayout={setLayoutOptions} /> */}
      <div className="absolute p-3 flex flex-col gap-3 bottom-0">
        <LayoutToggle setLayout={setLayoutOptions} />
        <ModeToggle />
      </div>
      {layoutOptions ? (
        // Layout Vertical: Stream arriba lado a lado con chat, stream abajo lado a lado con chat
        <div className="w-full h-full m-0 pt-0 flex flex-col justify-center items-center">
          {/* Daarick */}
          <div className="w-full h-1/2 flex flex-row justify-center">
            <iframe
              src={daarickStream}
              allowFullScreen
              className="md:w-2/3 lg:w-3/5 h-full xl:w-1/2 2xl:w-[44%]"
            ></iframe>
            <iframe
              src={daarickChat}
              allowFullScreen
              className="xl:w-1/4 2xl:w-1/5  h-full"
            ></iframe>
          </div>
          {/* Sylvee */}
          <div className="w-full h-1/2 flex flex-row justify-center">
            <iframe
              src={sylveeStream}
              allowFullScreen
              className="md:w-2/3 lg:w-3/5 h-full xl:w-1/2 2xl:w-[44%]"
            ></iframe>
            <iframe
              src={currentTheme === 'light' ? sylveeChat : sylveeChatDark}
              allowFullScreen
              className="xl:w-1/4 2xl:w-1/5 h-full"
            ></iframe>
          </div>
        </div>
      ) : (
        // Layout Horizontal: Streams arriba lado a lado, chat abajo lado a lado
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* Streams */}
          <div className="w-full h-1/2 flex flex-row justify-center">
            <iframe
              src={daarickStream}
              allowFullScreen
              className="h-full lg:w-1/2 md:w-1/2 xl:w-1/2 2xl:w-[44%]"
            ></iframe>
            <iframe
              src={sylveeStream}
              allowFullScreen
              className="h-full lg:w-1/2 md:w-1/2 xl:w-1/2 2xl:w-[44%]"
            ></iframe>
          </div>
          {/* Chats */}
          <div className="w-full h-1/2 flex flex-row justify-center">
            <iframe
              src={daarickChat}
              allowFullScreen
              className="2xl:w-1/4 md:w-1/3 h-full"
            ></iframe>
            <iframe
              src={currentTheme === 'light' ? sylveeChat : sylveeChatDark}
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