// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up orbit controls for camera movement
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Add lighting (ambient light and point light)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Lower ambient light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Create the walls of the art gallery with realistic textures
const wallTextureLoader = new THREE.TextureLoader();
const wallTexture = wallTextureLoader.load('https://www.fillmurray.com/800/800'); // Placeholder for wall texture
const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture });

// Create floor with a realistic texture
const floorTexture = wallTextureLoader.load('https://www.fillmurray.com/800/800'); // Placeholder for floor texture
const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture });

// Create the floor
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate the floor to make it horizontal
scene.add(floor);

// Back wall
const backWallGeometry = new THREE.PlaneGeometry(20, 10);
const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
backWall.position.set(0, 5, -10);
scene.add(backWall);

// Front wall
const frontWall = new THREE.Mesh(backWallGeometry, wallMaterial);
frontWall.position.set(0, 5, 10);
frontWall.rotation.y = Math.PI;
scene.add(frontWall);

// Left wall
const leftWall = new THREE.Mesh(backWallGeometry, wallMaterial);
leftWall.position.set(-10, 5, 0);
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

// Right wall
const rightWall = new THREE.Mesh(backWallGeometry, wallMaterial);
rightWall.position.set(10, 5, 0);
rightWall.rotation.y = -Math.PI / 2;
scene.add(rightWall);

// Create paintings (images as textures)
function createPainting(x, y, imagePath) {
    const texture = new THREE.TextureLoader().load(imagePath);
    const paintingMaterial = new THREE.MeshStandardMaterial({ map: texture });
    const paintingGeometry = new THREE.PlaneGeometry(4, 3); // Size of the paintings
    const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
    painting.position.set(x, y, 0);
    scene.add(painting);
}

// Add paintings to the walls
createPainting(0, 7, 'https://via.placeholder.com/400x300'); // Back wall
createPainting(-7, 7, 'https://via.placeholder.com/400x300'); // Left wall
createPainting(7, 7, 'https://via.placeholder.com/400x300');  // Right wall

// Set camera position
camera.position.z = 20;

// Resize handling
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update controls to allow camera interaction
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

animate();
