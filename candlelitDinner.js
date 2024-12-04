// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Point Light (Candle)
const candleLight = new THREE.PointLight(0xffaa33, 1, 5);
candleLight.position.set(0, 1.5, 0);
scene.add(candleLight);

// Candle Model (Placeholder Sphere)
const candleGeometry = new THREE.SphereGeometry(0.1, 16, 16);
const candleMaterial = new THREE.MeshStandardMaterial({ color: 0xffaa33 });
const candle = new THREE.Mesh(candleGeometry, candleMaterial);
candle.position.set(0, 1.5, 0);
scene.add(candle);

// Table Model (Placeholder Plane)
const tableGeometry = new THREE.BoxGeometry(5, 0.1, 5);
const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
const table = new THREE.Mesh(tableGeometry, tableMaterial);
table.position.set(0, 0.5, 0);
scene.add(table);
const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 32);
const legMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });

const legPositions = [
    { x: -1.5, z: -1 }, // Front-left leg
    { x: 1.5, z: -1 },  // Front-right leg
    { x: -1.5, z: 1 },  // Back-left leg
    { x: 1.5, z: 1 }    // Back-right leg
];

legPositions.forEach(pos => {
    const leg = new THREE.Mesh(legGeometry, legMaterial);
    leg.position.set(pos.x, -1.5, pos.z); // Adjust height as needed
    table.add(leg); // Add to the table object
});
const candleBaseGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 32);
const candleBaseMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
const candleBase = new THREE.Mesh(candleBaseGeometry, candleBaseMaterial);

candleBase.position.set(0, 1.8, 0); // Adjust height and position for the table
scene.add(candleBase);

// Add a flame (simple sphere for now)
const flameGeometry = new THREE.SphereGeometry(0.1, 16, 16);
const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xFF4500, emissive: 0xFF4500 });
const flame = new THREE.Mesh(flameGeometry, flameMaterial);

flame.position.set(0, 2.2, 0); // Above the candle
scene.add(flame);

// Add a light for the candle
candleLight.position.set(0, 2.2, 0);
scene.add(candleLight);

// Camera Position
camera.position.set(0, 2, 5);
camera.lookAt(0, 1.5, 0);

// Candle Toggle Logic
let candleOn = true;
window.addEventListener("click", () => {
    candleOn = !candleOn;
    candleLight.intensity = candleOn ? 1 : 0;
    candleMaterial.emissive = candleOn ? new THREE.Color(0xffaa33) : new THREE.Color(0x000000);
});

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
