/**
 *
 *
 * @author AndreaG
 * @version 0.0.1
 * @copyright SmartGaP s.r.l.
 * @package esyFileManager
 */

function popStandalone(){
    window.open('esyFileManager/index.php','_blank','width=800, height=600, scrollbars=no, resizable=yes')
}
function popFile(input_id){
    window.open('esyFileManager/index.php?u=1&cl='+input_id,'_blank','width=800, height=600, scrollbars=no, resizable=yes')
}
 
function urlimg(valoreparametro, id) { 
	document.getElementById(id).value = valoreparametro; 
}