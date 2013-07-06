global.express.all(['/quick-start/','/quick-start'],function(req,res){
	var tmpl = global.swig.compileFile(__dirname+'/../Templates/quick-start.html');
	var html = tmpl.render({page:'quick-start'});
	res.send(html);
})
