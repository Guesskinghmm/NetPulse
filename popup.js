const dEl = document.getElementById("download");
const uEl = document.getElementById("upload");
const pEl = document.getElementById("ping");
const statusBox = document.getElementById("statusBox");
const statusText = document.getElementById("statusText");
const loader = document.getElementById("loader");
const refreshBtn = document.getElementById("refresh");

const DOWN = "https://speed.cloudflare.com/__down?bytes=15000000";
const UP = "https://speed.cloudflare.com/__up";

async function pingTest() {
  const start = performance.now();
  await fetch("https://speed.cloudflare.com/__down?bytes=20", { cache: "no-store" });
  return Math.round(performance.now() - start);
}

function setStatus(speed) {
  statusBox.className = "";

  if (speed > 80) {
    statusBox.classList.add("excellent");
    statusText.textContent = "Status: Excellent ⚡ Very Fast Internet";
  } else if (speed > 40) {
    statusBox.classList.add("good");
    statusText.textContent = "Status: Good ✅ Stable Connection";
  } else if (speed > 15) {
    statusBox.classList.add("average");
    statusText.textContent = "Status: Average ⚠ May Buffer";
  } else {
    statusBox.classList.add("poor");
    statusText.textContent = "Status: Poor ❌ Slow Internet";
  }
}

async function highAccuracyDownload() {
  statusText.textContent = "Testing Download...";
  const start = performance.now();

  const streams = [
    fetch(DOWN, { cache: "no-store" }),
    fetch(DOWN, { cache: "no-store" }),
    fetch(DOWN, { cache: "no-store" })
  ];

  const responses = await Promise.all(streams);
  const blobs = await Promise.all(responses.map(r => r.blob()));

  let totalBits = 0;
  blobs.forEach(b => totalBits += b.size * 8);

  const duration = (performance.now() - start) / 1000;
  return totalBits / duration / (1024 * 1024);
}

async function highAccuracyUpload() {
  statusText.textContent = "Testing Upload...";
  const data = new Uint8Array(6 * 1024 * 1024);
  const start = performance.now();

  await Promise.all([
    fetch(UP, { method: "POST", body: data }),
    fetch(UP, { method: "POST", body: data }),
    fetch(UP, { method: "POST", body: data })
  ]);

  const duration = (performance.now() - start) / 1000;
  return (data.length * 8 * 3) / duration / (1024 * 1024);
}

async function runTest() {
  loader.classList.remove("hidden");
  refreshBtn.disabled = true;

  dEl.textContent = "...";
  uEl.textContent = "...";
  pEl.textContent = "...";
  statusText.textContent = "Initializing...";

  try {
    const ping = await pingTest();
    pEl.textContent = ping + " ms";

    const down = await highAccuracyDownload();
    dEl.textContent = down.toFixed(2) + " Mbps";

    const up = await highAccuracyUpload();
    uEl.textContent = up.toFixed(2) + " Mbps";

    setStatus(down);

  } catch (e) {
    statusText.textContent = "Status: Failed - Network Error";
  }

  loader.classList.add("hidden");
  refreshBtn.disabled = false;
}

refreshBtn.onclick = runTest;
