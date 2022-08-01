var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PercentFullyVaccinated_1 = new ol.format.GeoJSON();
var features_PercentFullyVaccinated_1 = format_PercentFullyVaccinated_1.readFeatures(json_PercentFullyVaccinated_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentFullyVaccinated_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentFullyVaccinated_1.addFeatures(features_PercentFullyVaccinated_1);
var lyr_PercentFullyVaccinated_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentFullyVaccinated_1, 
                style: style_PercentFullyVaccinated_1,
                interactive: true,
    title: 'Percent Fully Vaccinated<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_0.png" /> 0 - 0.1<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_1.png" /> 0.1 - 0.2<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_2.png" /> 0.2 - 0.3<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_3.png" /> 0.3 - 0.4<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_4.png" /> 0.4 - 0.5<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_5.png" /> 0.5 - 0.6<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_6.png" /> 0.6 - 0.7<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_7.png" /> 0.7 - 0.8<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_8.png" /> 0.8 - 0.9<br />\
    <img src="styles/legend/PercentFullyVaccinated_1_9.png" /> 0.9 - 1<br />'
        });
var format_Percent1stDose_2 = new ol.format.GeoJSON();
var features_Percent1stDose_2 = format_Percent1stDose_2.readFeatures(json_Percent1stDose_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percent1stDose_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Percent1stDose_2.addFeatures(features_Percent1stDose_2);
var lyr_Percent1stDose_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Percent1stDose_2, 
                style: style_Percent1stDose_2,
                interactive: true,
    title: 'Percent 1st Dose <br />\
    <img src="styles/legend/Percent1stDose_2_0.png" /> 0 - 0.1<br />\
    <img src="styles/legend/Percent1stDose_2_1.png" /> 0.1 - 0.2<br />\
    <img src="styles/legend/Percent1stDose_2_2.png" /> 0.2 - 0.3<br />\
    <img src="styles/legend/Percent1stDose_2_3.png" /> 0.3 - 0.4<br />\
    <img src="styles/legend/Percent1stDose_2_4.png" /> 0.4 - 0.5<br />\
    <img src="styles/legend/Percent1stDose_2_5.png" /> 0.5 - 0.6<br />\
    <img src="styles/legend/Percent1stDose_2_6.png" /> 0.6 - 0.7<br />\
    <img src="styles/legend/Percent1stDose_2_7.png" /> 0.7 - 0.8<br />\
    <img src="styles/legend/Percent1stDose_2_8.png" /> 0.8 - 0.9<br />\
    <img src="styles/legend/Percent1stDose_2_9.png" /> 0.9 - 1<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_PercentFullyVaccinated_1.setVisible(true);lyr_Percent1stDose_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PercentFullyVaccinated_1,lyr_Percent1stDose_2];
lyr_PercentFullyVaccinated_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIP': 'Zip Code', 'ZIPCODE': 'ZIPCODE', 'COUNTY': 'COUNTY', 'ZIP_TYPE': 'ZIP_TYPE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'COUNTY_NAM': 'COUNTY_NAM', 'PREFERRED_': 'PREFERRED_', 'completed%': 'Percent Fully Vaccinated', 'king_Vaccine3_Sum of started': 'king_Vaccine3_Sum of started', 'king_Vaccine3_Sum of completed': 'king_Vaccine3_Sum of completed', 'king_Vaccine3_Sum of population': 'king_Vaccine3_Sum of population', 'king_Vaccine3_PcT Started': 'king_Vaccine3_PcT Started', 'king_Vaccine3_PcT Completed': 'king_Vaccine3_PcT Completed', });
lyr_Percent1stDose_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIP': 'ZIP', 'ZIPCODE': 'Zip Code', 'COUNTY': 'COUNTY', 'ZIP_TYPE': 'ZIP_TYPE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'COUNTY_NAM': 'COUNTY_NAM', 'PREFERRED_': 'PREFERRED_', 'started_%': 'Percent 1st Dose', 'king_Vaccine3_Sum of started': 'king_Vaccine3_Sum of started', 'king_Vaccine3_Sum of completed': 'king_Vaccine3_Sum of completed', 'king_Vaccine3_Sum of population': 'king_Vaccine3_Sum of population', 'king_Vaccine3_PcT Started': 'king_Vaccine3_PcT Started', 'king_Vaccine3_PcT Completed': 'king_Vaccine3_PcT Completed', });
lyr_PercentFullyVaccinated_1.set('fieldImages', {'OBJECTID': 'Hidden', 'ZIP': 'Range', 'ZIPCODE': 'Hidden', 'COUNTY': 'Hidden', 'ZIP_TYPE': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'COUNTY_NAM': 'Hidden', 'PREFERRED_': 'Hidden', 'completed%': 'TextEdit', 'king_Vaccine3_Sum of started': 'Hidden', 'king_Vaccine3_Sum of completed': 'Hidden', 'king_Vaccine3_Sum of population': 'Hidden', 'king_Vaccine3_PcT Started': 'Hidden', 'king_Vaccine3_PcT Completed': 'Hidden', });
lyr_Percent1stDose_2.set('fieldImages', {'OBJECTID': 'Hidden', 'ZIP': 'Hidden', 'ZIPCODE': 'TextEdit', 'COUNTY': 'Hidden', 'ZIP_TYPE': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'COUNTY_NAM': 'Hidden', 'PREFERRED_': 'Hidden', 'started_%': 'TextEdit', 'king_Vaccine3_Sum of started': 'Hidden', 'king_Vaccine3_Sum of completed': 'Hidden', 'king_Vaccine3_Sum of population': 'Hidden', 'king_Vaccine3_PcT Started': 'Hidden', 'king_Vaccine3_PcT Completed': 'Hidden', });
lyr_PercentFullyVaccinated_1.set('fieldLabels', {'ZIP': 'header label', 'completed%': 'header label', });
lyr_Percent1stDose_2.set('fieldLabels', {'ZIPCODE': 'header label', 'started_%': 'header label', });
lyr_Percent1stDose_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});