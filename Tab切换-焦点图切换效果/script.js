window.onload = function() {
	//页面加载、获取整个容器、所有放数字索引的li及放图片列表的ul、定义放定时器的变量、存放当前索引的变量index
	var wrap = document.getElementById('wrap'),
	    pic  = document.getElementById('pic'),
	    list = document.getElementById('list').getElementsByTagName('li');
	    index = 0,
	    timer = null;

    // 定义并调用自动播放函数
	function auto() { //添加定时器，每隔3秒钟index递增一次、调用一次切换图片函数
		timer = setInterval(function() {
			index++;
			if(index>=list.length) {//index不能一直无限制的递增下去，需做判断
				index = 0;
			}
			change(index);  //调用切换图片函数时需将递增之后的index作为参数传过去
		}, 3000);
	}
	auto();
 
    // 定义图片切换函数
	function change(curIndex) {
		pic.style.marginTop = -170*curIndex + 'px';//根据传递过来的index值计算放图片的ul的top值(放图片的ul的top值=-index*单张图片的高度（所有图片必须等高）)
		for(var n =0;n<list.length;n++) {
			list[n].className = '';//遍历所有放数字索引的li，将每个li上的类去掉
		}
		list[curIndex].className = 'on';//根据传递过来的index值找到对应的li给它添加类设为当前高亮显示。
		index = curIndex;//改变index的值，让其等于传递过来的参数值
	}

	//鼠标划过整个容器时停止自动播放(鼠标划过整个容器时，图片停止切换，离开继续)
    wrap.onmouseover = function() {
    	clearInterval(timer); //鼠标滑过整个容器时清除定时器
    }
    
    // 鼠标离开整个容器时继续播放至下一张(鼠标离开时继续执行定时器，切换至下一张图片)
    wrap.onmouseover = auto; 
    
    // 遍历所有数字导航实现划过切换至对应的图片(遍历所有放数字的li，且给他们添加索引、鼠标滑过时切换至对应的图片)
    for(var i =0;i<list.length;i++) {
        list[i].id=i;
        list[i].onmouseover = function() { //鼠标滑过时调用图片切换函数，将滑过的li的索引传过去
        	change(this.id);
        }
    }
}