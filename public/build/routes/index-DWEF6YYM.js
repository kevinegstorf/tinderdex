import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-ZPQQEF2J.js";

// browser-route-module:/Users/fransyozef/Documents/projects/pancompany/tinderdex/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/components/historyTable/index.tsx
init_react();
function HistoryTable() {
  return /* @__PURE__ */ React.createElement("div", null, "Herrow");
}

// app/routes/index.tsx
function Index() {
  let pokemon = useLoaderData();
  console.log(pokemon);
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(HistoryTable, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-DWEF6YYM.js.map
