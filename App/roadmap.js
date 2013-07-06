global.express.all(['/roadmap/','/roadmap'],function(req,res){
	var tmpl = global.swig.compileFile(__dirname+'/../Templates/roadmap.html');
	var html = tmpl.render({page:'roadmap'});
	res.send(html);
})