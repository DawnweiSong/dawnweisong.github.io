
// L.control.attribution.addAttribution('GDIT')
window.addEventListener('load', attrGDIT)
function attrGDIT(){
  var attrDiv=document.getElementsByClassName( 'leaflet-control-attribution' )[0];
// if(attrDiv){
  var gdit= document.createElement('a');
  // gdit.innerHTML=' | <a href="gdit.com">GDIT</a>' ;
  gdit.text=' | GDIT'
  gdit.href='https://gdit.com'
  attrDiv.appendChild(gdit);
// }
}