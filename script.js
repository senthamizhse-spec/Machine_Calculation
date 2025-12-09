document.getElementById("myform").addEventListener("submit", function(event) {
  event.preventDefault();

  const machine = document.getElementById("machine").value;
  const Z_offset = parseFloat(document.getElementById("Z_offset").value);
  const Hub_length = parseFloat(document.getElementById("Hub_length").value);
  const datum = parseFloat(document.getElementById("datum").value);
  const Boss_Bottom = parseFloat(document.getElementById("Boss_Bottom").value);
  const Face_stock = parseFloat(document.getElementById("Face_stock").value);
  const drill_thru_length = parseFloat(document.getElementById("drill_thru_length").value);

  const spindleHeights = { "630": 800, "1060": 1061, "1550": 1180 };

 if (spindleHeights[machine]) {
  const halfHub = Hub_length / 2;
  const drill_protrusion = (Z_offset + datum + halfHub + drill_thru_length + Face_stock) - Boss_Bottom;
  const halfdatum = datum/2;
  const Distance_Boss_top_to_spindle = spindleHeights[machine] -  halfdatum - Boss_Bottom-Hub_length;

  document.getElementById("result").innerHTML = `
    <h5 class="mb-3">Results for Machine ${machine}</h5>
    <p><strong>Drill Protrusion:</strong> ${drill_protrusion.toFixed(4)}</p>
    <p><strong>Distance Boss Top to Spindle:</strong> ${Distance_Boss_top_to_spindle.toFixed(4)}</p>
  `;
} else {
  document.getElementById("result").innerHTML =
    `<p class="text-danger">Invalid machine selection. Please choose a valid option.</p>`;
}
});
