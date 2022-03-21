'use strict';

/**
 * Created by Serhii on 03.11.2016.
 */

var image = $('#map').attr("data-url-marker"); // take url marker from attribute data-url-marker
var location_adress = $('#map').attr("title"); // take adress from attribute title

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.714509, 37.649073], // координаты центра карты
        zoom: 16,
        controls: [] // убраем элементы управления на яндекс карте
    });

    myMap.geoObjects.add(new ymaps.Placemark([55.712509, 37.654073], { // координаты маркера
        balloonContent: location_adress
    }, {
        iconLayout: 'default#image',
        iconImageHref: image,
        iconImageSize: [31, 45]
    }));
}