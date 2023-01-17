import HomeBody from "./HomeBody/HomeBody.js";

export default function Home({ appState }) {
  return (
    <div className="wrapper" id="wrapper">
      <div className="body" id="body">
        <HomeBody appState={appState} />
      </div>
    </div>
  );
}
