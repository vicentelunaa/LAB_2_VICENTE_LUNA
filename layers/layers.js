var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BARRIOSCCP11111_1 = new ol.format.GeoJSON();
var features_BARRIOSCCP11111_1 = format_BARRIOSCCP11111_1.readFeatures(json_BARRIOSCCP11111_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRIOSCCP11111_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOSCCP11111_1.addFeatures(features_BARRIOSCCP11111_1);
var lyr_BARRIOSCCP11111_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARRIOSCCP11111_1, 
                style: style_BARRIOSCCP11111_1,
                popuplayertitle: 'BARRIOSCCP11111',
                interactive: true,
                title: '<img src="styles/legend/BARRIOSCCP11111_1.png" /> BARRIOSCCP11111'
            });
var format_PUNTOS_DEL_GRAN_CCP_2 = new ol.format.GeoJSON();
var features_PUNTOS_DEL_GRAN_CCP_2 = format_PUNTOS_DEL_GRAN_CCP_2.readFeatures(json_PUNTOS_DEL_GRAN_CCP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOS_DEL_GRAN_CCP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_DEL_GRAN_CCP_2.addFeatures(features_PUNTOS_DEL_GRAN_CCP_2);
var lyr_PUNTOS_DEL_GRAN_CCP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOS_DEL_GRAN_CCP_2, 
                style: style_PUNTOS_DEL_GRAN_CCP_2,
                popuplayertitle: 'PUNTOS_DEL_GRAN_CCP',
                interactive: true,
                title: '<img src="styles/legend/PUNTOS_DEL_GRAN_CCP_2.png" /> PUNTOS_DEL_GRAN_CCP'
            });
var format_POLGONOS_GRAN_CCP_3 = new ol.format.GeoJSON();
var features_POLGONOS_GRAN_CCP_3 = format_POLGONOS_GRAN_CCP_3.readFeatures(json_POLGONOS_GRAN_CCP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLGONOS_GRAN_CCP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLGONOS_GRAN_CCP_3.addFeatures(features_POLGONOS_GRAN_CCP_3);
var lyr_POLGONOS_GRAN_CCP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLGONOS_GRAN_CCP_3, 
                style: style_POLGONOS_GRAN_CCP_3,
                popuplayertitle: 'POLÍGONOS_GRAN_CCP',
                interactive: true,
                title: '<img src="styles/legend/POLGONOS_GRAN_CCP_3.png" /> POLÍGONOS_GRAN_CCP'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BARRIOSCCP11111_1.setVisible(true);lyr_PUNTOS_DEL_GRAN_CCP_2.setVisible(true);lyr_POLGONOS_GRAN_CCP_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BARRIOSCCP11111_1,lyr_PUNTOS_DEL_GRAN_CCP_2,lyr_POLGONOS_GRAN_CCP_3];
lyr_BARRIOSCCP11111_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_PUNTOS_DEL_GRAN_CCP_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'COMUNA': 'COMUNA', 'CURIOSIDAD': 'CURIOSIDAD', 'ALTURA': 'ALTURA', });
lyr_POLGONOS_GRAN_CCP_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CURIOSIDAD': 'CURIOSIDAD', 'COMUNA': 'COMUNA', 'TIPO': 'TIPO', 'ALTURA': 'ALTURA', });
lyr_BARRIOSCCP11111_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_PUNTOS_DEL_GRAN_CCP_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO': '', 'COMUNA': '', 'CURIOSIDAD': '', 'ALTURA': '', });
lyr_POLGONOS_GRAN_CCP_3.set('fieldImages', {'NOMBRE': 'TextEdit', 'CURIOSIDAD': 'TextEdit', 'COMUNA': 'TextEdit', 'TIPO': 'TextEdit', 'ALTURA': '', });
lyr_BARRIOSCCP11111_1.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_PUNTOS_DEL_GRAN_CCP_2.set('fieldLabels', {'NOMBRE': 'hidden field', 'TIPO': 'no label', 'COMUNA': 'no label', 'CURIOSIDAD': 'no label', 'ALTURA': 'no label', });
lyr_POLGONOS_GRAN_CCP_3.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'CURIOSIDAD': 'inline label - always visible', 'COMUNA': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'ALTURA': 'inline label - always visible', });
lyr_POLGONOS_GRAN_CCP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});