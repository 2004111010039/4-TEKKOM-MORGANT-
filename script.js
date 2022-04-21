// fungsi initialize untuk mempersiapkan peta
function initialize() {
    var propertiPeta = {
        center:new google.maps.LatLng(5.573968,95.372293),
        zoom:13,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
}
// event jendela di-load  
google.maps.event.addDomListener(window, 'load', initialize);