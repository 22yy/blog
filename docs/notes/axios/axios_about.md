# axios相关

## axios是什么？如何取消请求？Http请求发送后能取消吗？  
1. axios是一个基于promise的网络请求库   

2. 如果一个请求等待时间过长，用户不想等了，需要取消请求发送    
  - 在XMLHttpRequest对象中，取消请求使用的是abort方法   
  - 在axios中可以使用cancelToken来取消请求  