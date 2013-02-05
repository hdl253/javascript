var console=function(x){
	document.write(x);
}
var consoleline=function(x){
	console(x);
	console("<br />");
}
var consolepair=function(x,y){
	console(x);
	console(":");
	consoleline(y);
}