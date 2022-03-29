import {
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-ZPQQEF2J.js";

// browser-route-module:/Users/fransyozef/Documents/projects/pancompany/tinderdex/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react2 = __toESM(require_react());

// app/components/historyTable/index.tsx
init_react();
function HistoryTable() {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold underline"
  }, "Herrow");
}

// app/components/swiper/index.tsx
init_react();

// app/components/swiper/assets/pikachu.jpg
var pikachu_default = "/build/_assets/pikachu-MBAYVZ3H.jpg";

// app/components/swiper/index.tsx
function Swiper(pokemon) {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("img", {
    style: { width: "300px" },
    src: pikachu_default,
    alt: "Profile Picture"
  }), /* @__PURE__ */ React.createElement("h1", null, "Pikachu"), /* @__PURE__ */ React.createElement("p", null, "Level 9999"), /* @__PURE__ */ React.createElement("p", null, "Type: Electric"), /* @__PURE__ */ React.createElement("p", null, "Area: Forest"));
}

// app/routes/index.tsx
function Index() {
  let pokemon = useLoaderData();
  const [showHistory, setShowHistory] = (0, import_react2.useState)(false);
  console.log(pokemon);
  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };
  console.log(showHistory);
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => toggleHistory()
  }, !showHistory ? "Show History" : "Show Card"), !showHistory ? /* @__PURE__ */ React.createElement(Swiper, null) : /* @__PURE__ */ React.createElement(HistoryTable, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-VJEDTRJN.js.map
