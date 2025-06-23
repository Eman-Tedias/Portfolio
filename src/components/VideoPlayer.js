import ReactPlayer from 'react-player'

export function VideoPlayer({ url }) {
  return (
    <ReactPlayer 
      url={url}
      controls={true}
      width="50%"
      height="auto"
    />
  );
}
