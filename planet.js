Planet = {};

Planet.sun = function() {
	var geometry = new THREE.SphereGeometry(30, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/sunmap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/sunmap.jpg");
	material.bumpScale = 0.1;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.mercury = function() {
	var geometry = new THREE.SphereGeometry(1, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/mercurymap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/mercurybump.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.venus = function() {
	var geometry = new THREE.SphereGeometry(2, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/venusmap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/venusbump.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.earth = function() {
	var geometry = new THREE.SphereGeometry(2.5, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/earthmap1k.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/earthbump1k.jpg");
	material.bumpScale = 0.1;
	material.specularMap = THREE.ImageUtils.loadTexture("image/earthspec1k.jpg");
	material.specular = new THREE.Color("gray");

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.earthCloud = function() {
	var canvasResult	= document.createElement('canvas');
	canvasResult.width	= 1024;
	canvasResult.height	= 512;
	var contextResult	= canvasResult.getContext('2d');

	// load earthcloudmap
	var imageMap	= new Image();
	imageMap.addEventListener("load", function() {
		
		// create dataMap ImageData for earthcloudmap
		var canvasMap	= document.createElement('canvas');
		canvasMap.width	= imageMap.width;
		canvasMap.height= imageMap.height;
		var contextMap	= canvasMap.getContext('2d');
		contextMap.drawImage(imageMap, 0, 0);
		var dataMap	= contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height);

		// load earthcloudmaptrans
		var imageTrans	= new Image();
		imageTrans.addEventListener("load", function() {
			// create dataTrans ImageData for earthcloudmaptrans
			var canvasTrans		= document.createElement('canvas');
			canvasTrans.width	= imageTrans.width;
			canvasTrans.height	= imageTrans.height;
			var contextTrans	= canvasTrans.getContext('2d');
			contextTrans.drawImage(imageTrans, 0, 0);
			var dataTrans		= contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height);
			// merge dataMap + dataTrans into dataResult
			var dataResult		= contextMap.createImageData(canvasMap.width, canvasMap.height);
			for(var y = 0, offset = 0; y < imageMap.height; y++) {
				for(var x = 0; x < imageMap.width; x++, offset += 4){
					dataResult.data[offset+0]	= dataMap.data[offset+0]
					dataResult.data[offset+1]	= dataMap.data[offset+1]
					dataResult.data[offset+2]	= dataMap.data[offset+2]
					dataResult.data[offset+3]	= 255 - dataTrans.data[offset+0]
				}
			}
			// update texture with result
			contextResult.putImageData(dataResult,0,0);	
			material.map.needsUpdate = true;
		});
		imageTrans.src	= "image/earthcloudmaptrans.jpg";
	}, false);
	imageMap.src	= "image/earthcloudmap.jpg";

	var geometry	= new THREE.SphereGeometry(2.5, 32, 32);
	var material	= new THREE.MeshPhongMaterial();
	material.map = new THREE.Texture(canvasResult);
	material.side = THREE.DoubleSide;
	material.transparent = true;
	material.opacity = 0.8;

	var mesh	= new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.mars = function() {
	var geometry = new THREE.SphereGeometry(1.5, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/marsmap1k.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/marsbump1k.jpg");
	material.bumpScale = 0.1;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.jupiter = function() {
	var geometry = new THREE.SphereGeometry(7, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/jupitermap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/jupitermap.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.saturn = function() {
	var geometry = new THREE.SphereGeometry(5, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/saturnmap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/saturnmap.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.saturnRing = function() {
	var canvasResult	= document.createElement('canvas');
	canvasResult.width	= 915;
	canvasResult.height	= 64;
	var contextResult	= canvasResult.getContext('2d');

	// load earthcloudmap
	var imageMap	= new Image();
	imageMap.addEventListener("load", function() {
		
		// create dataMap ImageData for earthcloudmap
		var canvasMap	= document.createElement('canvas');
		canvasMap.width	= imageMap.width;
		canvasMap.height= imageMap.height;
		var contextMap	= canvasMap.getContext('2d');
		contextMap.drawImage(imageMap, 0, 0);
		var dataMap	= contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height);

		// load earthcloudmaptrans
		var imageTrans	= new Image();
		imageTrans.addEventListener("load", function() {
			// create dataTrans ImageData for earthcloudmaptrans
			var canvasTrans		= document.createElement('canvas');
			canvasTrans.width	= imageTrans.width;
			canvasTrans.height	= imageTrans.height;
			var contextTrans	= canvasTrans.getContext('2d');
			contextTrans.drawImage(imageTrans, 0, 0);
			var dataTrans		= contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height);
			// merge dataMap + dataTrans into dataResult
			var dataResult		= contextMap.createImageData(canvasResult.width, canvasResult.height);
			for(var y = 0, offset = 0; y < imageMap.height; y++) {
				for(var x = 0; x < imageMap.width; x++, offset += 4){
					dataResult.data[offset+0]	= dataMap.data[offset+0]
					dataResult.data[offset+1]	= dataMap.data[offset+1]
					dataResult.data[offset+2]	= dataMap.data[offset+2]
					dataResult.data[offset+3]	= 255 - dataTrans.data[offset+0]/4
				}
			}
			// update texture with result
			contextResult.putImageData(dataResult,0,0);	
			material.map.needsUpdate = true;
		});
		imageTrans.src	= "image/saturnringpattern.gif";
	}, false);
	imageMap.src	= "image/saturnringcolor.jpg";
	
	var geometry	= new THREE.RingGeometry(7, 10, 64);
	var material	= new THREE.MeshPhongMaterial({
		map		: new THREE.Texture(canvasResult),
		// map		: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'images/ash_uvgrid01.jpg'),
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.5,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	mesh.lookAt(new THREE.Vector3(1, -1, 1))
	return mesh	
}

Planet.uranus = function() {
	var geometry = new THREE.SphereGeometry(3, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/uranusmap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/uranusmap.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.uranusRing = function() {
	var canvasResult	= document.createElement('canvas');
	canvasResult.width	= 915;
	canvasResult.height	= 64;
	var contextResult	= canvasResult.getContext('2d');

	// load earthcloudmap
	var imageMap	= new Image();
	imageMap.addEventListener("load", function() {
		
		// create dataMap ImageData for earthcloudmap
		var canvasMap	= document.createElement('canvas');
		canvasMap.width	= imageMap.width;
		canvasMap.height= imageMap.height;
		var contextMap	= canvasMap.getContext('2d');
		contextMap.drawImage(imageMap, 0, 0);
		var dataMap	= contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height);

		// load earthcloudmaptrans
		var imageTrans	= new Image();
		imageTrans.addEventListener("load", function() {
			// create dataTrans ImageData for earthcloudmaptrans
			var canvasTrans		= document.createElement('canvas');
			canvasTrans.width	= imageTrans.width;
			canvasTrans.height	= imageTrans.height;
			var contextTrans	= canvasTrans.getContext('2d');
			contextTrans.drawImage(imageTrans, 0, 0);
			var dataTrans		= contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height);
			// merge dataMap + dataTrans into dataResult
			var dataResult		= contextMap.createImageData(canvasResult.width, canvasResult.height);
			for(var y = 0, offset = 0; y < imageMap.height; y++) {
				for(var x = 0; x < imageMap.width; x++, offset += 4){
					dataResult.data[offset+0]	= dataMap.data[offset+0]
					dataResult.data[offset+1]	= dataMap.data[offset+1]
					dataResult.data[offset+2]	= dataMap.data[offset+2]
					dataResult.data[offset+3]	= 255 - dataTrans.data[offset+0]/4
				}
			}
			// update texture with result
			contextResult.putImageData(dataResult,0,0);	
			material.map.needsUpdate = true;
		});
		imageTrans.src	= "image/uranusringtrans.gif";
	}, false);
	imageMap.src	= "image/uranusringcolour.jpg";
	
	var geometry	= new THREE.RingGeometry(6, 6.5, 64);
	var material	= new THREE.MeshPhongMaterial({
		map		: new THREE.Texture(canvasResult),
		// map		: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'images/ash_uvgrid01.jpg'),
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.5,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	mesh.lookAt(new THREE.Vector3(1, 0, 1))
	return mesh
}

Planet.neptune = function() {
	var geometry = new THREE.SphereGeometry(3, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/neptunemap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/neptunemap.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}