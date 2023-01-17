

export default function NavButtons({ appState }) {
  return (
    <div className="group" id="group">
      <button
        className="button"
        type="button"
        id="false"
        onClick={null}
        disabled={!true}
      >
        User
      </button>
      <button
        className="button"
        type="button"
        id="true"
        onClick={null}
        disabled={true}
      >
        Admin
      </button>
    </div>
  );
}
