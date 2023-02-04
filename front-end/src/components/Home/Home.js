import HomeBody from "./HomeBody/HomeBody.js";

//h1
export default function Home({ appState }) {
  return (
    <div className="h1-wrap" id="wrapper">
      <div className="h1-body" id="body">
        <HomeBody appState={appState} />
      </div>
    </div>
  );
}
