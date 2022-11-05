# RSA  

## RSA握手过程  

### 第一次握手

- Client Hello   

HTTPS 是应用层协议，需要先完成 TCP 连接建立，然后走 TLS 握手过程后，才能建立通信安全的连接。     

客户端发一个`Client Hello`消息   

消息里有使用的TSL版本，支持的密码套件列表(`Cipher Suites`)，客户端随机数`Client Random`发送给服务端   

### 第二次握手

- Sever Hello  

服务端收到客户端的Cilet Hello消息后，会确认TLS版本是否可用，并从密码套件列表中选择一个，同时生成一个随机数`Server Random`    

接着发送一个`Server Hello`消息，里面有确认的TLS版本号，选择的密码套件(`Cipher suite`)，和随机数    


然后服务端为证明自己的身份，会发送`Server Certificate`给客户端，里面有证书信息    

随后，服务端发了`Server Hello Done`消息，目的是告诉客户端，我已经把该给你的东西都给你了，本次打招呼完毕。    


### 证书验证  

证书里有：公钥，持有者信息，证书认证机构的信息，CA对这份文件的数字签名和使用的算法，证书有效期等   

服务端的证书都是由CA签发的：  

- CA把持有者的公钥，有效信息等打包，对其进行Hash计算生成一个hash值   
- 然后CA用自己的私钥将该hash值加密，生成`Certificate Signature`,即CA对证书做了签名   
- 最后将`Certificate Signature`添加在文件证书上，形成数字证书  

客户端收到后：  

- 使用同样的Hash算法生成一个hash值H1  
- 浏览器或操作系统里有CA的公钥信息，浏览器收到证书后使用CA的公钥解密`Certificate Signature`，生成hash值H2  
- 如果H1 === H2 则证明证书可信   

### 第三次握手   

客户端验证完毕，继续握手   

客户端再生成一个随机数`pre-master`,用服务器的RSA公钥加密，通过`Client Key Exchange`消息发送给服务端    

服务端收到后，用 RSA 私钥解密，得到客户端发来的随机数 (pre-master)  

至此双方都有三个随机数，生成会话秘钥，是对称秘钥，用于后续通信加解密  

生成会话秘钥后，客户端发送`Change Cipher Spec`消息，通知服务端开始加密通信   

然后，客户端发送`Encrypted Handshake Message（Finishd）`消息，并对之前的发送的数据做一个摘要，并用会话秘钥进行加密，验证加密通信是否可用以及之前的信息是否被篡改过   

>在Change Ciper Spec之前发送的消息都是明文  


### 第四次握手  

服务端同样发送`Change Cipher Spec`消息和`Encrypted Handshake Message（Finishd）`消息    

双方验证都没问题，握手完成  



## RSA缺点  
使用 RSA 密钥协商算法的最大问题是不支持前向保密。

因为客户端传递随机数给服务端时使用的是公钥加密，服务端收到后，会用私钥解密得到随机数。一旦服务端的私钥泄漏了，过去被第三方截获的所有 TLS 通讯密文都会被破解。