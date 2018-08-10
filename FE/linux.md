1.curl命令 命令行根据url获取请求
  curl -O 保存文件到本地命名默认
  curl -O www.sina.cn
  get 
  curl http://127.0.0.1:8080/login?admin&passwd=12345678 
  post
  curl -d "user=admin&passwd=12345678" http://127.0.0.1:8080/login 
  header
  curl -I www.sina.cn