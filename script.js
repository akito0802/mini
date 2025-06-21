
document.addEventListener('DOMContentLoaded', () => {
    const keySelect = document.getElementById('key-select');
    const typeSelect = document.getElementById('type-select');
    const scaleSelect = document.getElementById('scale-select');
    const result = document.getElementById('result');

    function updateDisplay() {
        const key = keySelect.value;
        const type = typeSelect.value;
        const scale = scaleSelect.value;

        const scaleData = scales[key]?.[type]?.[scale];
        if (scaleData) {
            const formatted = scaleData.map(note => `${note.note}（${note.degree}）`).join(', ');
            result.innerHTML = `<strong>${key} ${scaleSelect.options[scaleSelect.selectedIndex].text}の構成音:</strong><br>${formatted}`;
        } else {
            result.innerHTML = "データが見つかりません";
        }
    }

    keySelect.addEventListener('change', updateDisplay);
    typeSelect.addEventListener('change', updateDisplay);
    scaleSelect.addEventListener('change', updateDisplay);

    updateDisplay();
});
