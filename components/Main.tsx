import { useState } from "react";

const Home = () => {
  const [streams, setStreams] = useState<string[]>([]);
  const [streamInput, setStreamInput] = useState<string>("");

  // Formatea URLs para Twitch y Kick
  const formatStreamURL = (url: string): string | null => {
    if (url.includes("twitch.tv")) {
      const username = url.split("/").pop();
      return `https://player.twitch.tv/?channel=${username}&parent=localhost`;
    } else if (url.includes("kick.com")) {
      const username = url.split("/").pop();
      return `https://kick.com/embed/${username}`;
    } else {
      alert("URL no válida. Usa un enlace de Twitch o Kick.");
      return null;
    }
  };

  const addStream = () => {
    const formattedURL = formatStreamURL(streamInput.trim());
    if (formattedURL) {
      setStreams([...streams, formattedURL]);
      setStreamInput("");
    }
  };

  const removeStream = (index: number) => {
    setStreams(streams.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Multi Stream Viewer</h1>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={streamInput}
          onChange={(e) => setStreamInput(e.target.value)}
          placeholder="Agregar URL de stream"
          style={{ padding: "0.5rem", width: "300px", marginRight: "0.5rem" }}
        />
        <button onClick={addStream} style={{ padding: "0.5rem" }}>
          Agregar Stream
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {streams.map((stream, index) => (
          <div key={index} style={{ position: "relative" }}>
            <iframe
              src={stream}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", aspectRatio: "16 / 9", border: "none" }}
            ></iframe>
            <button
              onClick={() => removeStream(index)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "red",
                color: "white",
                border: "none",
                padding: "0.25rem 0.5rem",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
