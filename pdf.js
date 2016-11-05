var sys=require('sys');
var fs=require('fs');
var pdf=require('./lib/pdf').pdf

var doc=new pdf();
doc.addPage();
doc.setFontSize(22);
doc.text(20,40,'nombre');
