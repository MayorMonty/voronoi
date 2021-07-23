import "./main.css"

function demo1(wasm) {
  const canvas = document.getElementById("demo-1");
  const context = canvas.getContext("2d");

  const regenerate = document.getElementById("demo-1-regenerate");
  const points = document.getElementById("demo-1-points");

  regenerate.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    wasm.demo_basic(canvas, +points.value);
  });

  points.addEventListener("input", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    wasm.demo_basic(canvas, +points.value);
  });

  wasm.demo_basic(canvas, +points.value);
}


import("./pkg")
  .then((wasm) => {

    // Set up good error reporting
    wasm.initialize();

    // Demo 1: Highlight the closest point
    demo1(wasm);

  })
  .catch(console.error);
