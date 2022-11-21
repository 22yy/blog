# git

在线学习网站：<https://learngitbranching.js.org/>  

## git基础操作  

Git 工具在Linux 上是集成的，只要cmd命令行执行 sudo apt-get install git-core 命令即可。

Windows 系统需要到 <https://git-for-windows.github.io/> 进行下载即可   

### 常见选项

| 命令	| 缩写	| 意思 |
| :--- | :----|  :--- |
|--all | -a |	全部 |
|--force|	-f	|强制|
|--delete	|-d	|删除|
|--delete --force|	-D|	强制删除
|--move	|-m	|移动或重命名|
|--move --force	|-M	|强制移动或重命名|
|-u	| |设置默认远程分支|

### 创建提交用户名和邮箱

```sh
git config --global user.name "Tony"

git config --global user.email "tony@gmail.com"   
```   

### 创建本地仓库

进入指定文件夹鼠标右键单击选中 `Git Base Here` 执行如下语句：

```sh
git init 
```

### 添加暂存区 

```sh
#将当前目录及其子目录下所有变更添加到暂存区 （ 注意不要忽略 “ . ”）
 git add . 
#将本地库所有变更添加到暂存区
git add -A       
#指定文件添加暂存区
git add file1 file2 ...   
```

### 提交到本地仓库

```sh
# 会打开 vim 编辑器，vim 编辑器操作在下面展开说明
git commit

# 提交暂存区的文件到本地仓库，并备注当前 commit 记录
git commit -m '备注信息'

# 相当于 git add . 加上 git commit -m 'xxxx'
git commit -am 'xxxx'

# 用本地提交替换上次提交，比如不想保留上一次提交或者上一次提交描述信息写错了之类的
git commit --amend
```

### git pull  

pull 和 fetch 都是下载远程分支，区别是 pull 会和当前分支合并，fetch 不会    

```sh
# 获取 remote origin 对应远程仓库指定 master 分支的变更，但是不和本地的合并
git fetch origin master 

# 意思一个样，拉默认的分支而已
git fetch origin

# 也是，等效于 git fetch origin master:master，就是分支配置的默认值
git fetch

# 获取默认远程仓库所有分支的变更
git fetch -a

```

```sh
# 拉取 remote origin 对应的远程仓库的 master 分支合并到本地的 test 分支
git pull origin master:test

# 这种同理就不解释了
git pull origin

# git pull --merge 的简写，默认是 --merge 模式
# 等于 git fetch 加上 git merge，拉远程默认分支到当前分支
git pull

# 把合并模式切换成 rebase，等于 git fetch 加上 git rebase，rebase 后面进阶有介绍
git pull --rebase origin master
```


## 分支操作

### 创建分支

```sh
#基于当前分支创建分支
git branch 新分支  

# 创建 test 分支，并切换到 test 分支
git branch -M test

# 创建 test 分支，并切换到 test 分支
git checkout -b test

# 创建本地与远程对应的 test 分支，并切换到 test 分支，全称最好一致
git checkout -b test origin/test

```

### 查看本地分支

```sh
# 查看所有本地分支
git branch

# 查看所有远程分支
git branch -r

# 查看本地和远程所有分支
git branch -a
```

### 删除分支

```sh
#安全删除本地分支
git branch -d 分支  

#强制删除本地分支
git branch -D 分支 

# 删除远程主机的 master 分支
git push origin -d master

```

### 切换分支

```sh
# 切换到 test 分支
git checkout test

# 新建 test 分支，并切换到 test 分支
git checkout -b test

# 切换到 test 分支
git switch test

# 新建 test 分支，并切换到 test 分支
git switch -c test
```

### 合并分支

#### merge
```sh
# 把本地的 test 分支分并到我当前分支
git merge test

# 合并 remote origin 对应远程仓库的 master 分支到当前分支
git merge origin/master

# --on-ff 是 no-fast-forward简写，合并并且会在分支上重新生成一个新的 commit 节点
git merge --on-ff origin/master

# 加入 --squash 表示合并，但是不生成 commit 记录，通常用于把本地分支合入远程分支
git merge test --squash

# 取消合并
git merge --abort
```

#### rebase

```sh
#当前分⽀基于 B 分⽀做 rebase，以便把 B 分⽀合⼊到当前分⽀
git rebase B

#把 A 分⽀基于 B 分⽀做 rebase，以便把 B 分⽀合⼊到 A 分⽀
git rebase B A
```

#### 区别

>git merge 和 git rebase 都是可以合并分支，合并用法也是一样，不同的一个是在 commit 记录的处理上   

- git merge 会新建一条新的 commit，然后两个分支以前的 commit 记录都指向这个新 commit 记录。这种方法会保留之前每个分支的 commit 历史。   


- git rebase会先找到两个分支的第一个共同的 commit 祖先记录，然后将提取当前分支这之后的所有 commit 记录，放到目标分的最新提交后面。经过这个合并后，两个分支合并后的 commit 记录就变为了线性的记录了。   

```sh
# 如下，需要把本地 test 分支合入 dev
# 为方便理解，字母表示commit记录，数字表示提交时间顺序，可以理解为1就是1点提交的
dev -> A1 -> B3 ->    这一行是远程 dev 分支的commit记录，A1/B3是你同事提交的
      ↘ X2 -> Y4↗   这一行是拉取了 dev 分支后在本地的 test 分支 commit 记录

# 现在需要把你本地的分支合并到远程的分支去
# 用merge合并后，dev 分支看到的记录是这样的，M为merge记录的commit
dev -> A1 -> X2 -> B3 -> Y4 -> M

# 用rebase合并后，dev 分支看到的记录是这样的，注意顺序，且没有合并记录的commit
# 简单说就是直接把 test 分支的所有新的 commit 拿出来直接拼到 dev 分支末尾，不管提交时间先后
dev -> A1 -> B3 -> X2 -> Y4

```


`rebase`对比`merge`,优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决会很麻烦，但是`merge`出现冲突只需要解决一次

使用`rebase`应该在需要被`rebase`的分支上操作，并且该分支是本地分支，如果`develop`分支需要`rebase`到`master`上去，应该如下操作:
```sh
## branch develop
git rebase master
git checkout master
## 用于将`master`上的HEAD 移动到最新的commit
git merge develop
```

## 远程仓库交互

```sh
# 克隆远程仓库到本地
git clone 地址

# 克隆远程仓库指定分支到本地
git clone -b 远程仓库分支名 地址  

# 拉取远程分支，并与本地分支合并
git pull 别名 分支名  

# 推送本地指定分支到仓库指定分支
git push 别名 本地分支:远程分支  

# 查看所有远程仓库地址别名
git remote -v

# 为远程仓库起别名
git remote add 别名 地址  

# 删除远程仓库别名
git remote remove 别名

# 修改别名
git remote rename 旧 新
```

## git 撤销操作

1. git add 
```bash
# 后面什么都不跟 就是上一次add 里面的全部撤销了
git reset HEAD 
```

2. git commit错误

```bash
# 先使用
git log #查看节点
commit xxxxxxxxxxxxxxxxxxxxxxxxxx
Merge:
Author:
Date:

# 然后
git reset commit_id
```

## 常用

```bash
git clone 远程仓库地址

git pull 

git checkout 分支名

git add .

git commit -m '日志信息'

git push

git checkout main

git merge 分支名

git push

```  

## 不小心把不需要的文件添加到暂存区  

不小心把依赖包文件夹node_modules（这个很大而且没必要git管理这份代码）add了

第一种方法:   

```sh
$ git reset HEAD -- node_modules   
注意：双杠--后面有一个空格，后面再跟文件名。
```

第二种方法:  

```sh
$ git rm -r --cached node_modules  
```  

## 把本地项目上传到github    
本地仓库：  

1. git init 在本地创建一个Git仓库（clone的别人的仓库就先删除.git文件夹）

2. git add . 将项目添加到暂存区；  

3. git commit -m "注释内容" 将项目提交到Git仓库；  


远程仓库：    
1. 添加SSH KEY；  

2. 新建repositories；  

本地仓库：  
1. git remote add origin git@github.com:UserName/projectName.git 将本地仓库与远程仓库关联；  

2. git push -u origin master 将本地项目推送到远程仓库。  

>新建repositories时最好不要勾选添加README.md文件，git push时会报错 ,因为新建的Github仓库的README.md文件不在本地仓库的目录中    


如果在选择了Initialize this repository with a README,将远程仓库最新的更新拉取到本地，并合并到主支干：   
```sh
git pull --rebase origin master   
```
这时再重新push就可以   


## 修改git remote url   

1. 修改命令   
```sh
git remote set-url origin [url]  

例如: 
git remote set-url origin git@gitee.com:xigexige/ztjs.git
```
2. 先删后加    
```sh
git remote rm origin 
git remote add origin [url]
```
3. 直接修改.git里的config文件   