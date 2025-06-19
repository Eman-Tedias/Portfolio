import ReactPlayer from 'react-player'

export function VideoPlayer() {
  return (
    <ReactPlayer 
      url="/files/AutoMagic.mp4"
      controls={true}
      width="50%"
      height="auto"
    />
  );
}
