import * as THREE from "three";
import '../styles/main.scss';


class example {
	
	constructor(){
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer();
		this.light = new THREE.AmbientLight(0xffffff);
		this.camera;
		this.box;
	}

	render (){
		this.box.rotation.x += 0.01;
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(() => {this.render()});
	}

	initScene(){
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.getElementById('mainc').appendChild(this.renderer.domElement);

		this.scene.add(this.light);

		this.camera = new THREE.PerspectiveCamera(35,
		window.innerWidth / window.innerHeight,
		1,
		1000
		);

		this.camera.position.z= 100;
		this.scene.add(this.camera);
		
		this.box = new THREE.Mesh(
			new THREE.BoxGeometry(20,20,20),
			new THREE.MeshBasicMaterial({color:0xff0000})
		)
		this.box.name = "box";
		this.scene.add(this.box);

		this.render();

	}
	
};

var exampleOne = new example();

window.onload = exampleOne.initScene();


