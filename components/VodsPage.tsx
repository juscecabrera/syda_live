

export default function VodsPage() {

  const sylveeStream = `https://player.twitch.tv/?channel=sylvee&parent=${process.env.NEXT_PUBLIC_PARENT_LINK}&muted=false`;
  const vodLink = `https://player.twitch.tv/?sylvee&parent=${process.env.NEXT_PUBLIC_PARENT_LINK}`
  const vodLink2 = `https://player.twitch.tv/?video=2452145160&parent=${process.env.NEXT_PUBLIC_PARENT_LINK}`
    return (
        <div>
            <iframe
                src={vodLink2}
                allowFullScreen
                className="w-full h-screen"
            >
            </iframe>
        </div>
    )
}
