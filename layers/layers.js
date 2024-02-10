var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': 'Яндекс Спутник',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.927.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_3shplab1_2 = new ol.format.GeoJSON();
var features_3shplab1_2 = format_3shplab1_2.readFeatures(json_3shplab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3shplab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3shplab1_2.addFeatures(features_3shplab1_2);
var lyr_3shplab1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3shplab1_2, 
                style: style_3shplab1_2,
                interactive: true,
                title: '<img src="styles/legend/3shplab1_2.png" /> упражнение 3.shp — lab1'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_3, 
                style: style_building_3,
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_3shpljhjuf_4 = new ol.format.GeoJSON();
var features_3shpljhjuf_4 = format_3shpljhjuf_4.readFeatures(json_3shpljhjuf_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3shpljhjuf_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3shpljhjuf_4.addFeatures(features_3shpljhjuf_4);
var lyr_3shpljhjuf_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3shpljhjuf_4, 
                style: style_3shpljhjuf_4,
                interactive: true,
                title: '<img src="styles/legend/3shpljhjuf_4.png" /> упражнение 3.shp — ljhjuf'
            });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);lyr_3shplab1_2.setVisible(true);lyr_building_3.setVisible(true);lyr_3shpljhjuf_4.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr__1,lyr_3shplab1_2,lyr_building_3,lyr_3shpljhjuf_4];
lyr_3shplab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'address': 'address', });
lyr_3shpljhjuf_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_3shplab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_building_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'address': '', });
lyr_3shpljhjuf_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', });
lyr_3shplab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'address': 'no label', });
lyr_3shpljhjuf_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_3shpljhjuf_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});