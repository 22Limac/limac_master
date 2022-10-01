import * as THREE from "/build/three.module.js";
import { PerspectiveCamera } from "/build/three.module.js";
// Attempting to add threejs

const scene = new THREE.Scene();

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth * 0.6666, window.innerHeight * 0.6666);
scene.add(camera);
camera.position.set(0, 1, 30);
renderer.shadowMap.enabled = false;

const geometry = new THREE.TorusGeometry(5, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();
