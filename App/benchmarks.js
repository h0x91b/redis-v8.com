console.log('author page');

global.express.all('/benchmarks/',function(req,res){
	var tmpl = global.swig.compileFile(__dirname+'/../Templates/benchmarks.html');
	var html = tmpl.render({page:'benchmarks'});
	res.send(html);
})