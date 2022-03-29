import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import HistoryTable from "~/components/historyTable";
import Swiper from "~/components/swiper";

export async function getPokemon(){
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
   return res;
}

export let loader = async () => {
  return getPokemon();
}

export default function Index() {


  let pokemon = useLoaderData();
  const [showHistory, setShowHistory] = useState(false);
  const [liked, setLiked]: any = useState([])

  console.log(pokemon)

  const toggleHistory =()=> {
    setShowHistory(!showHistory)
  }

  console.log(showHistory)

  console.log(liked)

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <button onClick={()=> toggleHistory()}>{!showHistory ? 'Show History' : 'Show Card'}</button>
      { !showHistory ?  <Swiper></Swiper> : <HistoryTable></HistoryTable> }

      <button onClick={()=> setLiked([...liked, pokemon])}>Store Pokemon</button>
    </div>
  );
}
