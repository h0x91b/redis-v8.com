global.express.all(['/downloads/','/downloads'],function(req,res){
	var tmpl = global.swig.compileFile(__dirname+'/../Templates/downloads.html');
	var html = tmpl.render({page:'downloads'});
	res.send(html);
})