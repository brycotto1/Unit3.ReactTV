import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import "./shows.css";
import { useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const [episode, setEpisode] = useState();

  if(!show){
    return (
      <p>Please select a show!</p>
    )
  }

  return (
    <>
      <EpisodeList 
        show = {show.name}
        episodes = {show.episodes}
        selectedEpisode={episode}
        setSelectedEpisode={setEpisode}/>
      <EpisodeDetails 
        episode={episode}/>
    </>
  );
}
