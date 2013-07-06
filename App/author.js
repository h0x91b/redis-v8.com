global.express.all(['/author/','/author'],function(req,res){
	var tmpl = global.swig.compileFile(__dirname+'/../Templates/author.html');
	var html = tmpl.render({page:'author'});
	res.send(html);
})