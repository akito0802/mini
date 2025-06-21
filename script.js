
const scales = {
  major: {
    'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    'F': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
  },
  minor: {
    'C': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    'D': ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
    'E': ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
    'F': ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
    'G': ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
    'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    'B': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A']
  },
  jazz: {
    'C': ['C', 'Db', 'Eb', 'E', 'F#', 'Ab', 'Bb'],  // オルタード
    'D': ['D', 'Eb', 'F', 'F#', 'G#', 'Bb', 'C'],    // オルタード
    'E': ['E', 'F', 'G', 'G#', 'A#', 'C', 'D'],      // オルタード
    'F': ['F', 'Gb', 'Ab', 'A', 'B', 'Db', 'Eb'],
    'G': ['G', 'Ab', 'Bb', 'B', 'C#', 'D', 'F'],
    'A': ['A', 'Bb', 'C', 'C#', 'D#', 'F', 'G'],
    'B': ['B', 'C', 'D', 'D#', 'F', 'G', 'A']
  }
};

const scaleNames = {
  major: ['メジャースケール'],
  minor: ['ナチュラルマイナースケール'],
  jazz: ['オルタードスケール']
};

document.getElementById("type-select").addEventListener("change", updateScales);
document.getElementById("key-select").addEventListener("change", displayScale);
document.getElementById("scale-select").addEventListener("change", displayScale);

function updateScales() {
  const type = document.getElementById("type-select").value;
  const select = document.getElementById("scale-select");
  select.innerHTML = '';
  scaleNames[type].forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  });
  displayScale();
}

function displayScale() {
  const key = document.getElementById("key-select").value;
  const type = document.getElementById("type-select").value;
  const table = document.getElementById("note-table");
  table.innerHTML = '';
  if (!scales[type][key]) return;
  const row = document.createElement("tr");
  scales[type][key].forEach(note => {
    const td = document.createElement("td");
    td.textContent = note;
    row.appendChild(td);
  });
  table.appendChild(row);
}

// 初期化
updateScales();
