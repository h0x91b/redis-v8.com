console.log('downloads page');

global.express.all('/downloads/',function(req,res){
	var tmpl = global.swig.compileFile(__dirname+'/../Templates/downloads.html');
	var html = tmpl.render({page:'downloads'});
	res.send(html);
})