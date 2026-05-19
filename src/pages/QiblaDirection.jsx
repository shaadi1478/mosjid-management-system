import { useEffect, useState } from "react";
import { Compass } from "lucide-react";

const KAABA_LAT = 21.4225;
const KAABA_LNG = 39.8262;

function toRad(v) {
  return (v * Math.PI) / 180;
}

function toDeg(v) {
  return (v * 180) / Math.PI;
}

// Qibla direction calculation
function calculateQibla(lat, lng) {
  const lat1 = toRad(lat);
  const lng1 = toRad(lng);
  const lat2 = toRad(KAABA_LAT);
  const lng2 = toRad(KAABA_LNG);

  const y = Math.sin(lng2 - lng1);
  const x =
    Math.cos(lat1) * Math.tan(lat2) -
    Math.sin(lat1) * Math.cos(lng2 - lng1);

  let brng = toDeg(Math.atan2(y, x));
  return (brng + 360) % 360;
}

export default function QiblaDirection() {
  const [userLocation, setUserLocation] = useState(null);
  const [qibla, setQibla] = useState(0);

  const [heading, setHeading] = useState(0);
  const [permission, setPermission] = useState(false);

  // 📍 Get location
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      setUserLocation({ lat, lng });
      setQibla(calculateQibla(lat, lng));
    });
  }, []);

  // 🧭 Device compass (gyro)
  useEffect(() => {
    const handleOrientation = (event) => {
      let alpha = event.alpha;

      if (typeof alpha === "number") {
        setHeading(alpha);
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);
    window.addEventListener("deviceorientationabsolute", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("deviceorientationabsolute", handleOrientation);
    };
  }, []);

  const rotation = qibla - heading;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8faf7] to-white p-6">

      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl text-center">

        {/* Title */}
        <div className="flex items-center justify-center gap-2 text-emerald-600">
          <Compass className="h-5 w-5" />
          <h2 className="text-xl font-semibold">কিবলা কম্পাস</h2>
        </div>

        {/* Compass UI */}
        <div className="relative mt-10 flex items-center justify-center">

          <div className="h-64 w-64 rounded-full border-4 border-emerald-100 flex items-center justify-center relative shadow-inner">

            {/* needle */}
            <div
              className="absolute h-1 w-28 bg-emerald-600 origin-left rounded-full shadow-lg"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.2s linear",
              }}
            />

            {/* center dot */}
            <div className="h-4 w-4 rounded-full bg-emerald-600 shadow" />
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 space-y-2 text-gray-600">

          {userLocation ? (
            <>
              <p>📍 আপনার লোকেশন পাওয়া গেছে</p>
              <p className="text-sm">
                🕋 কিবলা দিক:{" "}
                <span className="font-semibold text-emerald-600">
                  {qibla.toFixed(2)}°
                </span>
              </p>

              <p className="text-sm text-gray-500">
                🧭 মোবাইল ঘুরালে দিক পরিবর্তন হবে
              </p>
            </>
          ) : (
            <p>📍 লোকেশন অনুমতি দিন কিবলা নির্ণয়ের জন্য</p>
          )}
        </div>

      </div>
    </div>
  );
}