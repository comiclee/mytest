var program = require('commander');

function range(val) {
return val.split('..').map(Number);
}

function list(val) {
return val.split(',');
}

program
.version('0.0.1')
.usage('test')
.option('-C, --chdir [value]', '设置服务器节点','/home/conan/server')
.option('-c, --config [value]', '设置配置文件','./deploy.conf')
.option('-m, --max <n>', '最大连接数')
.option('-s, --seed <n>', '出始种子')
.option('-r, --range <a>..<b>', '阈值区间', range)
.option('-l, --list <items>', 'IP列表', list)

program
.command('deploy <name>')	//命令和参数不同
.description('部署一个服务节点')
.action(function(name){
console.log(arguments[1].option);
});

program.parse(process.argv);	//转换用户输入

