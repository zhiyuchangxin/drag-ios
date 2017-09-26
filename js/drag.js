var oDrag = document.querySelector('.drag-items');
var isTouch = false; // 手指触摸 drag-items 标志位
var tapX, tapY, curX, curY, x, y, result;

/**
 * 手指触摸屏幕
 * tapX 触点距离 drag-items 左边框的距离
 * tapY 触点距离 drag-items 上边框的距离
 */
function down () {
	isTouch = true;
	tapX = event.touches[0].clientX - oDrag.offsetLeft;
	tapY = event.touches[0].clientY - oDrag.offsetTop;
	oDrag.style.backgroundColor = '#888';
}

/**
 * 手指在屏上滑动
 * curX drag-items 左边框距离屏幕左侧的距离
 * curY drag-items 上边框距离屏幕上侧的距离
 * 拖动的过程中需阻止页面的默认事件（防止页面滑动）
 */
function moving () {
	if (isTouch) {
		curX = event.touches[0].clientX - tapX;
		curY = event.touches[0].clientY - tapY;
		x = init(curX, 'clientWidth');
		y = init(curY, 'clientHeight');
		oDrag.style.left = x + 'px';
		oDrag.style.top = y + 'px';
		// 阻止页面的滑动
    document.addEventListener('touchmove', function () {
      event.preventDefault();
    });
	}
}

/**
 * 手指离开屏幕
 */
function up () {
	isTouch = false;
	setTimeout(function () {
		oDrag.style.backgroundColor = '#aaa';
	}, 2000)
}

/** 
	* 格式化拖动的位置，控制在可见区域内
	*/
function init (temp, name) {
	if ((temp >= 0) && (temp <= (document.body[name] - oDrag[name]))) {
		result = temp;
	}
	else if (temp < 0) {
		result = 0;
	}
	else {
		result = screen[name] - oDrag[name];
	}
	return result;
}

/**
 * 监听手指触摸 drag-items 事件调动 down 方法
 */
oDrag.addEventListener('touchstart', function () {
	down();
});

/**
 * 监听手指拖动 drag-items 事件调动 moving 方法
 */
oDrag.addEventListener('touchmove', function () {
	moving();
});

/**
 * 监听手指放开 drag-items 事件调动 up 方法
 */
oDrag.addEventListener('touchend', function () {
	up();
});

/**
 * 监听 drag-items click 事件调动
 */
oDrag.addEventListener('click', function () {
	alert('开心的一天！');
});
