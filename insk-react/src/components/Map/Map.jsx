import "./Map.css";

export default function Map() {
  return (
    <section className="map-section">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=15qnNBhmzjoiSJOeyhd9iSxu56T_hQio&ehbc=2E312F"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="INSK Global Presence Map"
      />
    </section>
  );
}
