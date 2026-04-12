import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

const stops = [
  { name: "Pechino", chinese: "北京", lat: 39.9042, lng: 116.4074, days: "19–21 Apr", color: "#c0392b", order: 1, sectionId: "pechino", summary: "Città Proibita, Grande Muraglia (Mutianyu), Hutong, Tempio del Cielo e anatra laccata." },
  { name: "Luoyang", chinese: "洛阳", lat: 34.6197, lng: 112.4540, days: "22 Apr", color: "#e67e22", order: 2, sectionId: "luoyang", summary: "Grotte di Longmen con 100.000+ statue buddhiste e Old Town con street food." },
  { name: "Xi'An", chinese: "西安", lat: 34.3416, lng: 108.9398, days: "22–24 Apr", color: "#d35400", order: 3, sectionId: "xian", summary: "Esercito di Terracotta, mura in bici, Quartiere Musulmano e Dayan Pagoda." },
  { name: "Chengdu", chinese: "成都", lat: 30.5728, lng: 104.0668, days: "24–26 Apr", color: "#27ae60", order: 4, sectionId: "chengdu", summary: "Panda Research Base, hotpot del Sichuan e teahouse al People's Park." },
  { name: "Zhangjiajie", chinese: "张家界", lat: 29.1170, lng: 110.4793, days: "26–29 Apr", color: "#2980b9", order: 5, sectionId: "zhangjiajie", summary: "Montagne di Avatar, Porta del Paradiso (Tianmen) e villaggio antico di Furong." },
  { name: "Guilin", chinese: "桂林", lat: 25.2742, lng: 110.2900, days: "29–30 Apr", color: "#8e44ad", order: 6, sectionId: "guilin", summary: "Montagne carsiche, crociera sul Fiume Li, e-bike a Yangshuo e rice noodles." },
  { name: "Shanghai", chinese: "上海", lat: 31.2304, lng: 121.4737, days: "1–2 Mag", color: "#c0392b", order: 7, sectionId: "shanghai", summary: "The Bund di notte, Yuyuan Garden, French Concession e xiaolongbao." },
];

export default function TripMap() {
  const mapRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (instanceRef.current) return;

    import("leaflet").then((L) => {
      // Fix default icon paths
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/assets/icons/marker-icon-2x.png",
        iconUrl: "/assets/icons/marker-icon.png",
        shadowUrl: "/assets/icons/marker-shadow.png",
      });

      const map = L.map(mapRef.current, { zoomControl: true, scrollWheelZoom: false }).setView([32, 113], 5);
      instanceRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '© OpenStreetMap contributors © CARTO',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      // Draw route line
      const latlngs = stops.map(s => [s.lat, s.lng]);
      L.polyline(latlngs, { color: "#c0392b", weight: 2.5, opacity: 0.6, dashArray: "6 8" }).addTo(map);

      // Add markers
      stops.forEach((stop) => {
        const icon = L.divIcon({
          className: "",
          html: `<div style="
            background: ${stop.color};
            color: white;
            border-radius: 50%;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 700;
            font-family: sans-serif;
            border: 2px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">${stop.order}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        L.marker([stop.lat, stop.lng], { icon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family:sans-serif;min-width:160px;max-width:220px">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
                <div style="background:${stop.color};color:white;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0">${stop.order}</div>
                <strong style="font-size:14px">${stop.name}</strong>
                <span style="color:#999;font-size:12px">${stop.chinese}</span>
              </div>
              <div style="color:#888;font-size:11px;margin-bottom:6px">📅 ${stop.days}</div>
              <div style="color:#444;font-size:12px;line-height:1.5;margin-bottom:8px">${stop.summary}</div>
              <a href="#${stop.sectionId}" style="display:inline-block;background:${stop.color};color:white;font-size:11px;font-weight:600;padding:4px 10px;border-radius:20px;text-decoration:none">→ Vai alla tappa</a>
            </div>
          `, { maxWidth: 240 });
      });
    });

    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
      }
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20"
    >
      <div className="text-center mb-8 md:mb-12">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Rotta</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Il Percorso</h2>
        <div className="w-12 h-[2px] bg-primary mx-auto mt-6" />
      </div>

      {/* City legend */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {stops.map(s => (
          <div key={s.name} className="flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1">
            <div className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-bold" style={{ background: s.color }}>
              {s.order}
            </div>
            <span className="font-body text-xs text-foreground">{s.name}</span>
            <span className="font-body text-[10px] text-muted-foreground">{s.days}</span>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-[320px] sm:h-[380px] md:h-[420px]">
        <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
      </div>
      <p className="font-body text-xs text-muted-foreground/50 text-center mt-3">Tocca i pin per i dettagli · Scroll disabilitato</p>
    </motion.section>
  );
}
