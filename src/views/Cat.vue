<template>
  <v-col cols="12" v-resize="onResize">
    <div class="grabbable" ref="target"></div>
    <v-card id="absolute" flat color="transparent">
      <v-row class="ma-0 d-flex align-center justify-center">
        <v-col cols="12" sm="8" md="8" lg="6" xl="4">
          <v-card-text class="text-subtitle-1 py-2 my-4">
            <p>Here is my cat ˆ. ̫ .ˆ₎</p>
          </v-card-text>
        </v-col>
      </v-row>
      <!-- <v-img class="mx-auto grabbable" :width="500" src="@/assets/cat.jpg">
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
          </div>
        </template>
      </v-img> -->
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  // @ts-expect-error
  import * as THREE from 'three'
  // @ts-expect-error
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  // @ts-expect-error
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

  import cat1 from '@/assets/cat.png'
  import cardback from '@/assets/cardback.png'

  const target = ref()
  const marginY = 82
  const marginX = 12
  const windowSize = ref({
    x: 0,
    y: 0,
  })

  const world = {
    plane: {
      width: 0.6,
      height: 1,
      size: 1,
      resolution: 20,
    }
  }

  // const gui = new dat.GUI( { autoPlace: true } )
  // gui.domElement.id = 'gui';
  // gui.add(world.plane, 'size', 1, 10)
  //   .onChange(genPlane)
  // gui.add(world.plane, 'resolution', 10, 30)
  //   .onChange(genPlane)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // (FOV, ASPECT RATIO, near clipping plane, far clipping plane)
  const renderer = new THREE.WebGLRenderer({ alpha: true })

  const loader = new GLTFLoader()

  // set renderer
  renderer.setSize(window.innerWidth - marginX, window.innerHeight - marginY)
  renderer.setPixelRatio(window.devicePixelRatio)

  // set controls + camera pos
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true;
  controls.dampingFactor = .025
  controls.update();
  camera.position.z = 1

  // define materials
  const basicMatProps = {
    color: 0xffffff,
    // side: THREE.DoubleSide,
    flatShading: true,
    shininess: 100,
    transparent: true,
  }

  const texture = new THREE.TextureLoader().load(cat1)
  const textureBack = new THREE.TextureLoader().load(cardback)

  const frontMat = new THREE.MeshPhongMaterial({ ...basicMatProps, map: texture })
  const backMat = new THREE.MeshPhongMaterial({ ...basicMatProps, map: textureBack, })

  // create double-sided plane
  // const cardMesh2 = new THREE.Mesh(
  //   new THREE.PlaneGeometry(1, 1)
  // )
  var cardMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(
      world.plane.width * world.plane.size,
      world.plane.height * world.plane.size,
      // .05,
      // 5,
      // .5
    ), frontMat,
  )
  var cardMeshBack = new THREE.Mesh(
    new THREE.PlaneGeometry(
      world.plane.width * world.plane.size,
      world.plane.height * world.plane.size,
      // .05,
      // 5,
      // .5
    ), backMat,
  ).rotateY(Math.PI)

  // add to scene
  scene.add(cardMesh)
  scene.add(cardMeshBack)
  // scene.add(cardMesh2)

  // create light
  const light = new THREE.DirectionalLight(0xFFFFFF, 2.5) // color, intensity
  light.position.copy(camera.position) // make light come from "screen"
  scene.add(light)

  function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    cardMesh.rotation.y += 0.0005
    cardMeshBack.rotation.y -= 0.0005
    light.position.copy(camera.position)

    controls.update()
  }

  // outdated func
  // function genPlane() {
  //   cardMesh.geometry.dispose()
  //   cardMesh.geometry = RectangleRounded(
  //     world.plane.width * world.plane.size,
  //     world.plane.height * world.plane.size,
  //     .05,
  //     5,
  //     // 10
  //   )
  // }

  // on size window
  function onResize () {
    windowSize.value = { x: window.innerWidth, y: window.innerHeight }
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth - marginX, window.innerHeight - marginY)
  }

  // mount start
  onMounted(() => {
    target.value.appendChild(renderer.domElement)

    cardMesh.rotation.y -= 0.5
    cardMeshBack.rotation.y += 0.5
    animate()
  })

</script>


<style>
.grabbable {
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

.grabbable:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
}

#absolute {
  position: absolute;
  width: 100%;
  top: 70px;
}

#gui { position: absolute; top: 70px; right: 2px }
</style>