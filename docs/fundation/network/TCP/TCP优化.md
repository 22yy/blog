# TCP优化   

## 客户端优化  

三次握手建立连接的首要目的是「同步序列号」。SYN 的全称就叫 Synchronize Sequence Numbers（同步序列号）。   

通过设置`tcp_syn_retries`次数，减少SYN重传次数  