console.log('docs page');

global.express.all('/docs/',function(req,res){
	var tmpl = global.swig.compileFile(__dirname+'/../Templates/docs.html');
	var html = tmpl.render({page:'docs'});
	res.send(html);
})
