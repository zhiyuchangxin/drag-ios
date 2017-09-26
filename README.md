## 移动端仿 ios home 键拖拽效果


### 设计起因

近期做了一些 H5 应用，当设计了几个触发按钮时，受到页面大小的局限其位置总是不太好安置，难免出现按钮遮住主内容的情况。

为此我想，如若按钮可以像苹果手机的 home 键一样随意拖拽，便不存在这样的苦恼啦啊~

### 涉及的事件

1. 触摸事件 touchstart、 touchmove、 touchend
2. 获取触点坐标位置： (event.touches[0].clientX, event.touches[0].clientY)
3. 获取可视区宽高： document.body.clientWidth、 document.body.clientHeight

### 设计思路

1. 监听触摸事件 touchstart、 touchmove、 touchend （考虑单指）
2. touchstart 触发时：
    - 计算触点距离拖拽元素边框的距离
    - 设置拖拽元素背景颜色加深
3. touchmove 拖拽时：
    - 设置拖拽元素的 left 值和 top 值
    - 注意控制拖拽元素始终在可视区范围内
    - 注意阻止页面的默认事件，防止页面滑动
4. touchend 触发时：
    - 拖拽元素不在触摸状态保持 2s 后，拖拽元素背景颜色变浅，使其从视觉上变为次要元素
5. 触摸事件不影响点击事件，单击拖拽元素，依然作为触发按钮进行相应的操作


### 页面截图预览
![avatar](http://ow73fkxqs.bkt.clouddn.com/drag-ios.png)

