# 流量控制   

>发送方发送数据过快接收方来不及接收会导致分组丢失,为防止分组丢失  
>TCP提供的一种机制让发送方根据接收方的接受能力控制发送的数据量  

## 实现流量控制  

>主要的方式就是接收方返回的 ACK 中会包含自己的接收窗口的大小，并且利用大小来控制发送方的数据发送。

## 流量控制引发的死锁  

>当发送方收到接收方的0窗口应答时，发送方会停止发送，等待接收方的下一个应答，如果这个窗口不为0的应答在传输过程中丢失，那么发送方一直等待下去，而接收方以为发送方已经收到该应答，等待接收新数据，这样双方就相互等待，从而产生死锁  

解决：  
>TCP使用了持续计时器，每当收到0窗口应答报文时就启动该计时器，时间一到就主动发送报文询问接收方窗口大小，如果接收方仍返回0窗口，则重置计时器继续等待，若窗口不为0，则表示应答报文丢失了，此时重置发送窗口后开始发送，这样就避免了死锁的产生。  

## 操作缓冲区
>发送窗口和接收窗口中所存放的字节数，都是放在操作系统内存缓冲区中的，而操作系统的缓冲区，会被操作系统调整  

第一种情况：   
应用程序可以从缓冲区中读取数据，如果服务器非常繁忙，服务端收到 180 字节数据，但是应用程序没有读取任何数据，这 180 字节直接就留在了缓冲区，于是接收窗口收缩(- 180），并在发送确认信息时，通过窗口大小给客户端。   

如果发送方继续发送数据，应用程序仍然没有读取，于是接收窗口收缩到了 0，并在发送确认信息时，通过窗口大小给客户端。发送方会定时发送窗口探测报文，以便知道接收方的窗口是否发生了改变。   

第二种情况：   
当服务端系统资源非常紧张的时候，操作系统可能会直接减少了接收缓冲区大小，这时应用程序又无法及时读取缓存数据，那么这时候就有严重的事情发生了，会出现数据包丢失的现象。    

TCP 规定是不允许同时减少缓存又收缩窗口的，而是采用先收缩窗口，过段时间再减少缓存，这样就可以避免了丢包情况   
 