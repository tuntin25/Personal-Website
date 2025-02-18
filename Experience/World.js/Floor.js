import * as THREE from "three"
import Experience from "../Experience.js"
import GSAP from "gsap";

export default class Floor{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene
        
    
        this.setFloor();
        this.setCircles();
    }
    setFloor(){
        this.geometry = new THREE.PlaneGeometry(100,100)
        this.material = new THREE.MeshStandardMaterial({
            color: 0xffe6a2,
        });
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
        this.plane.rotation.x = -Math.PI/2
        this.plane.position.y = -0.45
        this.plane.receiveShadow = true;
    }
    
      setCircles() {
        const geometry = new THREE.CircleGeometry(7, 64);
        const material2 = new THREE.MeshStandardMaterial({ color:  0xE3242b});
        const material3 = new THREE.MeshStandardMaterial({ color: 0x3dabd6 });
        const material = new THREE.MeshStandardMaterial({ color: 0x1dac4c});
        //blue: 8395cd
        //0x7ad0ac
        //0x65350f
        //0xe5a1aa
        //0xE3242b red
        //green: 50C878  48A860
        this.circleFirst = new THREE.Mesh(geometry, material);
        this.circleSecond = new THREE.Mesh(geometry, material2);
        this.circleThird = new THREE.Mesh(geometry, material3);

        this.circleFirst.position.y = -0.44;

        this.circleSecond.position.y = -0.43;
        this.circleSecond.position.x = 1.25;

        this.circleThird.position.y = -0.42;

        this.circleFirst.scale.set(0, 0, 0);
        this.circleSecond.scale.set(0, 0, 0);
        this.circleThird.scale.set(0, 0, 0);

        this.circleFirst.rotation.x =
            this.circleSecond.rotation.x =
            this.circleThird.rotation.x =
                -Math.PI / 2;

        this.circleFirst.receiveShadow =
            this.circleSecond.receiveShadow =
            this.circleThird.receiveShadow =
                true;

        this.scene.add(this.circleFirst);
        this.scene.add(this.circleSecond);
        this.scene.add(this.circleThird);

    }
    resize(){
       
    }

    update(){
    
    }
}