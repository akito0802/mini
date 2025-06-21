
const keySelect = document.getElementById("key-select");
const typeSelect = document.getElementById("type-select");
const scaleSelect = document.getElementById("scale-select");
const display = document.getElementById("scale-display");

const scales = {
  major: ["Major", "Pentatonic", "Blues"],
  minor: ["Natural Minor", "Harmonic Minor", "Melodic Minor", "Pentatonic", "Blues"],
  church: ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"],
  jazz: ["Altered", "Wholetone", "Diminished"]
};

typeSelect.addEventListener("change", () => {
  const selected = typeSelect.value;
  scaleSelect.innerHTML = "";
  if (scales[selected]) {
    scales[selected].forEach(scale => {
      const option = document.createElement("option");
      option.textContent = scale;
      option.value = scale.toLowerCase();
      scaleSelect.appendChild(option);
    });
  }
});

scaleSelect.addEventListener("change", () => {
  display.textContent = "構成音表示: " + scaleSelect.value;
});

// 初期表示設定
typeSelect.dispatchEvent(new Event("change"));
