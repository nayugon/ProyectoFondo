fetch("https://services.arcgis.com/hkQNLKNeDVYBjvFE/arcgis/rest/services/Alojamientos_turisticos/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&outSR=4326&f=json")
.then(res=>res.json())
.then(data=>console.log(data))
