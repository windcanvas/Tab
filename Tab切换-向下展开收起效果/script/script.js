window.onload = function() {
    // 将所有点击的标题和要显示隐藏的列表取出来
    var menu = document.getElementById('menu'),
        ps   = menu.getElementsByTagName('p'),
        uls  = menu.getElementsByTagName('ul');

    // 遍历所有要点击的标题且给它们添加索引及绑定事件
    for(var i in ps) {
        ps[i].id = i; // 获取点击的标题上的索引属性，根据该索引找到对应的列表
        ps[i].onclick = function() {
            var u = uls[this.id];
            if(u.style.display == 'block') {// 判断该列表，如果是显示的则将其隐藏，如果是隐藏的则将其显示出来
               u.style.display = 'none';
            }else {
               u.style.display = 'block';
            }
        }
    }
}