console.log('author page');

global.express.all('/roadmap/',function(req,res){
	var tmpl = global.swig.compileFile(__dirname+'/../Templates/roadmap.html');
	var html = tmpl.render({page:'roadmap'});
	res.send(html);
})