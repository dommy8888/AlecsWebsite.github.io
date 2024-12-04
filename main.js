// Get the canvas element where Babylon.js will render
const canvas = document.getElementById("renderCanvas");

// Define room dimensions
const roomWidth = 50;
const roomLength = 50;
const roomHeight = 20;

// Create the Babylon.js engine
const engine = new BABYLON.Engine(canvas, true);

// Create the Babylon.js scene
const scene = new BABYLON.Scene(engine);

// Add a camera and attach it to the canvas
// Enable scene collisions
scene.collisionsEnabled = true;

// Create a Universal Camera for first-person movement
const camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(0, 10, 0), scene);

// Set the target to the center of the room (you can adjust the target if needed)
camera.setTarget(BABYLON.Vector3.Zero());  // This ensures the camera looks at the center of the room

// Attach controls for mouse/keyboard to move around the room
camera.attachControl(canvas, true);

// Set collision and gravity for the camera
camera.checkCollisions = true;
camera.applyGravity = true; // Enable gravity for the camera

// Define the camera's collision ellipsoid (this is the collision box around the camera)
camera.ellipsoid = new BABYLON.Vector3(1, 1, 1); // Collision box
camera.ellipsoidOffset = new BABYLON.Vector3(0, 1, 0); // Offset for collision box

// Prevent vertical movement (camera stays at fixed height)
camera.position.y = 10; // Set camera at a fixed height above the floor

// Movement boundaries
camera.minZ = 0.1; // Near clipping plane, prevents camera from going too close to walls
camera.maxZ = 100; // Far clipping plane, set a far distance for visibility
camera.keysUp.push(87); // W key
camera.keysDown.push(83); // S key
camera.keysLeft.push(65); // A key
camera.keysRight.push(68); // D key

// Adjust gravity to simulate gravity and prevent vertical movement
scene.gravity = new BABYLON.Vector3(0, -0.2, 0); // Gravity pulling down
// camera.applyGravity = true; // This line is redundant and can be removed

// Prevent the camera from moving out of the room (ensures it stays above the ground)
camera.onCollide = function(collidedMesh) {
    if (collidedMesh.name === "floor") {
        camera.position.y = 10; // Ensure camera stays above the ground at fixed height
    }
};

// Limit vertical rotation (up/down look), this prevents looking above the ceiling or below the floor
camera.lowerAlphaLimit = 0.1;  // Allow looking down but not too much
camera.upperAlphaLimit = Math.PI / 2; // Allow looking up but not too much

// Prevent any change in camera's Y position while still allowing it to look up and down
camera.onBeforeRenderObservable.add(() => {
    camera.position.y = 10;  // Keep the camera fixed at Y = 10 (height above floor)
});


// Add a hemispheric light to the scene
const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0), // Direction: top-down
    scene
);
light.intensity = 0.8;

scene.clearColor = new BABYLON.Color3(1, 1, 1); // White background

// var floor = BABYLON.MeshBuilder.CreatePlane("floor", {size: 50}, scene);
// floor.rotation.x = Math.PI / 2; // Rotate to lay flat on the ground
// floor.position.y = -5; // Move it down slightly

const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
wallMaterial.diffuseColor = new BABYLON.Color3(0.5, 0, 0); // Dark red color (RGB: 0.5, 0, 0)
wallMaterial.backFaceCulling = false; // Ensure both sides of the walls are visible

// Floor
const floor = BABYLON.MeshBuilder.CreateGround("floor", { width: roomWidth, height: roomLength }, scene);
floor.position.y = -5; // Position slightly below Y=0
floor.checkCollisions = true; // Enable collision for the floor

// Apply a different material for the floor (optional)
const floorMaterial = new BABYLON.StandardMaterial("floorMaterial", scene);
floorMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8); // Light grey color for the floor
floor.material = floorMaterial;

// Front Wall
const frontWall = BABYLON.MeshBuilder.CreateBox("frontWall", { width: roomWidth, height: roomHeight, depth: 0.1 }, scene);
frontWall.position.z = -roomLength / 2; // Position at the front edge
frontWall.position.y = roomHeight / 2; // Center vertically
frontWall.material = wallMaterial; // Apply dark red material
frontWall.checkCollisions = true;
// Back Wall
// const backWall = BABYLON.MeshBuilder.CreatePlane("backWall", { width: roomWidth, height: roomHeight }, scene);
// backWall.position.z = roomLength / 2; // Position at the back edge
const backWall = BABYLON.MeshBuilder.CreateBox("backWall", { width: roomWidth, height: roomHeight, depth: 0.1 }, scene);
backWall.position.z = roomLength / 2; // Position at the back edge
backWall.position.y = roomHeight / 2; // Center vertically
backWall.material = wallMaterial; // Apply dark red material
backWall.checkCollisions = true;
// const leftWall = BABYLON.MeshBuilder.CreatePlane("leftWall", { width: roomLength, height: roomHeight }, scene);
// leftWall.position.x = -roomWidth / 2; // Position at the left edge
const leftWall = BABYLON.MeshBuilder.CreateBox("leftWall", { width: roomLength, height: roomHeight, depth: 0.1 }, scene);
leftWall.position.x = -roomWidth / 2; // Position at the left edge
leftWall.position.y = roomHeight / 2; // Center vertically
leftWall.rotation.y = Math.PI / 2; // Rotate to face inward
leftWall.material = wallMaterial; // Apply dark red material
leftWall.checkCollisions = true;
// const rightWall = BABYLON.MeshBuilder.CreatePlane("rightWall", { width: roomLength, height: roomHeight }, scene);
// rightWall.position.x = roomWidth / 2; // Position at the right edge
const rightWall = BABYLON.MeshBuilder.CreateBox("rightWall", { width: roomLength, height: roomHeight, depth: 0.1 }, scene);
rightWall.position.x = roomWidth / 2; // Position at the right edge
rightWall.position.y = roomHeight / 2; // Center vertically
rightWall.rotation.y = -Math.PI / 2; // Rotate to face inward
rightWall.material = wallMaterial; // Apply dark red material
rightWall.checkCollisions = true;
var curveHeight = 10;
var curveLength = roomWidth; // Define the curveLength variable

// Create the curved ceiling (a tube shape)
var ceilingCurve = BABYLON.MeshBuilder.CreateTube("ceilingCurve", {
    path: [
        new BABYLON.Vector3(-roomWidth / 2, roomHeight, 0),  // Start point (left corner)
        new BABYLON.Vector3(0, roomHeight + curveHeight, 0),               // Highest point in the middle
        new BABYLON.Vector3(roomWidth / 2, roomHeight, 0)    // End point (right corner)
    ], 
    radius: 0.5,         // Radius of the tube
    tessellation: 32     // Number of segments to make the curve smooth
}, scene);

// Create a material for the ceiling curve to make it slightly transparent, like glass
var ceilingMaterial = new BABYLON.StandardMaterial("ceilingMaterial", scene);
ceilingMaterial.alpha = 0.5;    // Set transparency to 50%
ceilingMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.8, 1); // Light blue color
ceilingCurve.material = ceilingMaterial;

// Create blue panels within the ceiling (as glass-like texture)
var panelWidth = 5;  // Panel width
var panelHeight = 2; // Panel height

var panelMaterial = new BABYLON.StandardMaterial("panelMaterial", scene);
panelMaterial.alpha = 0.2; // Set transparency for the glass panels
panelMaterial.diffuseColor = new BABYLON.Color3(0.0, 0.0, 1.0); // Blue color

// Function to create and position panels along the ceiling
function createPanels() {
    var numberOfPanels = Math.floor(curveLength / panelWidth);  // Number of panels to fit along the length

    for (var i = 0; i < numberOfPanels; i++) {
        var xOffset = -roomWidth / 2 + (i * panelWidth); // Panel position along the X-axis

        // Create a panel for the ceiling
        var panel = BABYLON.MeshBuilder.CreatePlane("panel" + i, {
            width: panelWidth, 
            height: panelHeight
        }, scene);

        panel.position.x = xOffset;
        panel.position.y = roomHeight + curveHeight; // Position the panel at the desired height
        panel.position.z = 0; // Z-axis position for depth

        // Apply the material to the panel
        panel.material = panelMaterial;

        // Rotate the panels to follow the curve direction (align them horizontally)
        panel.rotation.x = Math.PI / 2; // Lay flat
        panel.rotation.z = Math.PI / 2; // Slightly rotate to give it a perspective effect
    }
}

// Call the function to create the panels along the ceiling
createPanels();

// var floor = BABYLON.MeshBuilder.CreatePlane("floor", {size: 50}, scene);
// floor.rotation.x = Math.PI / 2; // Rotate the plane to lie flat
// floor.position.y = -5; 
// Position the ceiling curve correctly
ceilingCurve.position.y = roomHeight; // Position at the top of the room

// Set up the scene rendering
engine.runRenderLoop(function() {
    scene.render();
});

// Resize the engine if the window is resized
window.addEventListener("resize", () => {
    engine.resize();
});
