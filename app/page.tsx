import MainPage from '@/components/MainPage';
import WindowSizeWrapper from '@/components/WindowSizeWrapper';
import VodsPage from '@/components/VodsPage'

export default function Home() {
  return (
    <div>
      <WindowSizeWrapper />
      { /* <MainPage /> */}      
      <VodsPage />
    </div>
  );
}
