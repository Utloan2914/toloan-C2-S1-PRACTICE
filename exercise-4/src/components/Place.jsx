export default function Place({ place }) {
  return (
    <li className="place-item" key={place.id}>
      <button>
        <img src={place.image.src} alt={place.image.alt} />
        <h3>{place.title}</h3>
      </button>
    </li>
  );
}
