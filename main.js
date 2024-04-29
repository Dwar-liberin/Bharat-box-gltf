import {
  loadGLTF,
  loadTexture,
  loadTextures,
  loadVideo,
} from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

const THREE = window.MINDAR.IMAGE.THREE;
console.log("Win", window.MINDAR);

document.addEventListener("DOMContentLoaded", () => {
  async function start() {
    const mindThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "assets/target.mind",
      uiLoading: "#scanning-overlay",
    });

    const { renderer, scene, camera } = mindThree;
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    const loadFont = () => {
      return new Promise((resolve, reject) => {
        const loader = new THREE.FontLoader();

        loader.load(
          "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
          (font) => {
            resolve(font); // Resolve the promise with the loaded font
          },
          undefined, // Progress callback (optional)
          (error) => {
            reject(error); // Reject the promise with the error
          }
        );
      });
    };

    const font = await loadFont();

    const target_imagec9572282f1f_iconGeometry = new THREE.PlaneGeometry(1, 1);
    const target_imagec9572282f1f_texture = await loadTexture(
      "assets/kash-2.jpg"
    );
    const target_imagec9572282f1f_image = new THREE.MeshBasicMaterial({
      map: target_imagec9572282f1f_texture,
    });
    const target_imagec9572282f1f = new THREE.Mesh(
      target_imagec9572282f1f_iconGeometry,
      target_imagec9572282f1f_image
    );
    target_imagec9572282f1f.scale.set(1, 1, 1);
    target_imagec9572282f1f.position.set(0, 0, 0);
    target_imagec9572282f1f.rotation.set(-0.001, 0, 0);

    const gltf_a01393db_01530153e = await loadGLTF("assets/ganesh .gltf");
    gltf_a01393db_01530153e.scene.scale.set(0.01, 0.01, 0.01);
    gltf_a01393db_01530153e.scene.position.set(0, -0.4, 0.4);
    gltf_a01393db_01530153e.scene.rotation.set(0.01, 3.1, 0.02);

    const logo_808f6de9_387a808f6_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_808f6de9_387a808f6_texture = await loadTexture(
      "assets/circle-web-sm_114.png"
    );
    const logo_808f6de9_387a808f6_image = new THREE.MeshBasicMaterial({
      map: logo_808f6de9_387a808f6_texture,
    });
    const logo_808f6de9_387a808f6 = new THREE.Mesh(
      logo_808f6de9_387a808f6_iconGeometry,
      logo_808f6de9_387a808f6_image
    );
    logo_808f6de9_387a808f6.scale.set(0.3, 0.3, 0.3);
    logo_808f6de9_387a808f6.position.set(0.1, -1.2, 0);
    logo_808f6de9_387a808f6.rotation.set(-0.001, 0, 0);
    logo_808f6de9_387a808f6.userData.clickable = true;
    const logo_91e2ea44_0c1691e2e_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_91e2ea44_0c1691e2e_texture = await loadTexture(
      "assets/circle-wa-sm_113.png"
    );
    const logo_91e2ea44_0c1691e2e_image = new THREE.MeshBasicMaterial({
      map: logo_91e2ea44_0c1691e2e_texture,
    });
    const logo_91e2ea44_0c1691e2e = new THREE.Mesh(
      logo_91e2ea44_0c1691e2e_iconGeometry,
      logo_91e2ea44_0c1691e2e_image
    );
    logo_91e2ea44_0c1691e2e.scale.set(0.3, 0.3, 1);
    logo_91e2ea44_0c1691e2e.position.set(0.8, -1.2, 0);
    logo_91e2ea44_0c1691e2e.rotation.set(-0.001, 0, 0);
    logo_91e2ea44_0c1691e2e.userData.clickable = true;
    const logo_680041fe_e8c768004_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_680041fe_e8c768004_texture = await loadTexture(
      "assets/circle-mail-sm_125.png"
    );
    const logo_680041fe_e8c768004_image = new THREE.MeshBasicMaterial({
      map: logo_680041fe_e8c768004_texture,
    });
    const logo_680041fe_e8c768004 = new THREE.Mesh(
      logo_680041fe_e8c768004_iconGeometry,
      logo_680041fe_e8c768004_image
    );
    logo_680041fe_e8c768004.scale.set(0.3, 0.3, 0.3);
    logo_680041fe_e8c768004.position.set(-0.5, -1.2, 0);
    logo_680041fe_e8c768004.rotation.set(-0.001, 0, 0);
    logo_680041fe_e8c768004.userData.clickable = true;

    document.body.addEventListener("click", (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      const mouse = new THREE.Vector2(mouseX, mouseY);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        let o = intersects[0].object;

        while (o.parent && !o.userData?.clickable) {
          o = o.parent;
        }

        // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.

        if (o.userData.clickable) window.showLoadingScreen();

        if (o.userData.clickable && o === logo_808f6de9_387a808f6) {
          setTimeout(() => {
            window.location.href = "https://bharatbox.sandbox.game/";
          }, 100);
        }

        if (o.userData.clickable && o === logo_91e2ea44_0c1691e2e) {
          setTimeout(() => {
            window.location.href = "https://wa.me/8175814482/?text=hi";
          }, 100);
        }

        if (o.userData.clickable && o === logo_680041fe_e8c768004) {
          setTimeout(() => {
            window.location.href = "mailto:sandeep@reworks.in";
          }, 100);
        }
      }
    });

    // Add event listeners for zoom and rotation
    // document.addEventListener("wheel", (event) => {
    //   event.preventDefault(); // Prevent page scrolling
    //   const raycaster = new THREE.Raycaster();
    //   const mouse = new THREE.Vector2();
    //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    //   raycaster.setFromCamera(mouse, camera);
    //   const intersects = raycaster.intersectObjects(scene.children, true);
    //   if (intersects.length > 0) {
    //     // gltf_a01393db_01530153e.scene.position.z -= event.deltaY * 0.1;
    //   }
    // });

    const anchor = mindThree.addAnchor(0);
    anchor.group.add(target_imagec9572282f1f);
    anchor.group.add(gltf_a01393db_01530153e.scene);
    anchor.group.add(logo_808f6de9_387a808f6);
    anchor.group.add(logo_91e2ea44_0c1691e2e);
    anchor.group.add(logo_680041fe_e8c768004);

    anchor.onTargetFound = () => {};

    anchor.onTargetLost = () => {};

    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
