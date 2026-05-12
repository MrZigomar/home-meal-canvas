const WORKER_URL = "https://api.poivreetsel.kitchen";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

export async function sendCapiEvent(eventName: string): Promise<void> {
  try {
    await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        event_source_url: window.location.href,
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
      }),
    });
  } catch (err) {
    console.error("CAPI error:", err);
  }
}