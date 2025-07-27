import WindowSizeWrapper from '@/components/WindowSizeWrapper';

export default function Home() {
  return (
    <div className='bg-black flex items-center justify-center w-screen h-screen p-3'>
      <WindowSizeWrapper />
      <h1 className='text-white font-bold text-3xl xs:text-2xl break-words'>
        En memoria del Syda (2024-2025) 
      </h1>
      {/* <MainPage /> */}
    </div>
  );
}