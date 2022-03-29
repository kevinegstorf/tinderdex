import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

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
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
