import * as THREE from 'three';
function createGeometry(params, callback) {
    let geometry = new Object();
    let param = {
        type: params.type || 'box',
        width: params.width || 1,
        height: params.height || 1,
        depth: params.depth || 1,
        widthSegments: params.widthSegments || 1,
        heightSegments: params.heightSegments || 1,
        depthSegments: params.depthSegments || 1,
    }
    switch(param.type){
        case "box":
            geometry = new THREE.BoxGeometry(param.width,param.height.param,depth,param.widthSegments,param.heightSegments,param.depthSegments);
            break;



    }

}