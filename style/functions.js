function toggleLayers() {
    var layer1 = document.getElementById('layer1');
    var layer2 = document.getElementById('layer2');
    var toggle = document.getElementById('layerToggle');

    if (toggle.checked) {
        layer1.style.display = 'none';
        layer2.style.display = 'block';
    } else {
        layer1.style.display = 'block';
        layer2.style.display = 'none';
    }
}