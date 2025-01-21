import StreamWithChat from "./StreamContainer";

const MainPage = () => {
  const daarickStream = "https://player.kick.com/daarick"
  const daarickChat = "https://kick.com/popout/daarick/chat"

  const sylveeStream = "https://player.twitch.tv/?channel=sylveey&parent=localhost"
  const sylveeChat = "https://www.twitch.tv/embed/sylveey/chat?parent=localhost"
  
  return (
    <div>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <StreamWithChat streamUrl={daarickStream} chatUrl={daarickChat}/>
          <StreamWithChat streamUrl={sylveeStream} chatUrl={sylveeChat} />
        </div>
    </div>
  );
};

export default MainPage;
