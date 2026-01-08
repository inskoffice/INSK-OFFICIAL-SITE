import "./Map.css";

export default function Map() {
  return (
    <section className="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17..."
        width="100%"
        height="400"
        loading="lazy"
      />
    </section>
  );
}
