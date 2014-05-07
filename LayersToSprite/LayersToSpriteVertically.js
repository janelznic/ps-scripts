// Jan Elznic, http://janelznic.cz
// Version 1.0
// Released under MIT license.

// 1. Put this file in Program Files\Adobe\Photoshop\Presets\Scripts\
// 2. Restart Photoshop
// 3. In PhotoShop menu File > Scripts > LayersToSpriteVertically
 
// Arrange layers into a sprite sheet.
if (documents.length > 0) {
	docRef = activeDocument;
	var activeLayer = docRef.activeLayer;

	numLayers = docRef.artLayers.length;
	var cols = docRef.height;
	var spriteY = docRef.height;

	// put things in order
	app.preferences.rulerUnits = Units.PIXELS;

	// resize the canvas
	newY = numLayers * spriteY;
	docRef.resizeCanvas(docRef.width, newY, AnchorPosition.TOPLEFT);

	// move the layers around
	for (i=0; i < numLayers; i++) {
		docRef.artLayers[i].visible = 1;
		var movY = spriteY*i;
		docRef.artLayers[i].translate(0, movY);
	}
}
