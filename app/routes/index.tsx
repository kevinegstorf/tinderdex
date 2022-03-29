import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import HistoryTable from "~/components/historyTable";

export async function getPokemon(){
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
   return res;
}

export let loader = async () => {
  return getPokemon();
}

export default function Index() {

  let pokemon = useLoaderData();

  console.log(pokemon)

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <HistoryTable></HistoryTable>
    </div>
  );
}
