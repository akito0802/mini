
document.addEventListener('DOMContentLoaded', () => {
    const keySelect = document.getElementById('key-select');
    const typeSelect = document.getElementById('type-select');
    const scaleSelect = document.getElementById('scale-select');
    const result = document.getElementById('result');

    
const scaleOptions = {
    church: [
        { value: 'ionian', label: 'アイオニアン' },
        { value: 'dorian', label: 'ドリアン' },
        { value: 'phrygian', label: 'フリジアン' },
        { value: 'lydian', label: 'リディアン' },
        { value: 'mixolydian', label: 'ミクソリディアン' },
        { value: 'aeolian', label: 'エオリアン' },
        { value: 'locrian', label: 'ロクリアン' }
    ],
        major: [
            { value: 'major', label: 'メジャースケール' },
            { value: 'pentatonic', label: 'ペンタトニックスケール' },
            { value: 'blues', label: 'ブルーススケール' }
        ],
        minor: [
            { value: 'natural', label: 'ナチュラルマイナースケール' },
            { value: 'harmonic', label: 'ハーモニックマイナースケール' },
            { value: 'melodic', label: 'メロディックマイナースケール' },
            { value: 'pentatonic', label: 'ペンタトニックスケール' },
            { value: 'blues', label: 'ブルーススケール' }
        ]
    };

    function updateScaleOptions() {
        const type = typeSelect.value;
        scaleSelect.innerHTML = '';
        scaleOptions[type].forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.label;
            scaleSelect.appendChild(opt);
        });
        scaleSelect.selectedIndex = 0; // ← ここで初期値をリセット
    }

    function updateDisplay() {
        const key = keySelect.value;
        const type = typeSelect.value;
        const scale = scaleSelect.value;

        const scaleData = scales?.[key]?.[type]?.[scale];
        if (scaleData && Array.isArray(scaleData)) {
            const formatted = scaleData.map(note => `${note.note}（${note.degree}）`).join(', ');
            const label = scaleSelect.options[scaleSelect.selectedIndex].text;
            result.innerHTML = `<strong>${key} ${label}の構成音:</strong><br>${formatted}`;
        } else {
            result.innerHTML = "データが見つかりません";
        }
    }

    keySelect.addEventListener('change', updateDisplay);
    typeSelect.addEventListener('change', () => {
        updateScaleOptions();
        updateDisplay();
    });
    scaleSelect.addEventListener('change', updateDisplay);

    updateScaleOptions();
    updateDisplay();
});
