(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{417:function(s,a,t){s.exports=t.p+"assets/img/docker_cjml01.9b612086.png"},554:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"帮助启动类命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帮助启动类命令"}},[s._v("#")]),s._v(" 帮助启动类命令")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl status "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nsystemctl stop "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nsystemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nsystemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭开机启动")]),s._v("\nsystemctl disable "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker概要信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" info\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker总体帮助文档")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker命令帮助文档")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" 具体命令 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\n")])])]),a("h2",{attrs:{id:"镜像命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像命令"}},[s._v("#")]),s._v(" 镜像命令")]),s._v(" "),a("p",[a("strong",[s._v("列出本地主机的镜像")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker images")]),s._v("\nREPOSITORY    TAG       IMAGE ID       CREATED       SIZE\nhello-world   latest    9c7a54a9a43c   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" weeks ago   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(".3kB\n")])])]),a("ul",[a("li",[a("p",[s._v("REPOSITORY：表示镜像的仓库源")])]),s._v(" "),a("li",[a("p",[s._v("TAG：镜像的标签版本号")])]),s._v(" "),a("li",[a("p",[s._v("IMAGE ID：镜像ID")])]),s._v(" "),a("li",[a("p",[s._v("CREATED：镜像创建时间")])]),s._v(" "),a("li",[a("p",[s._v("SIZE：镜像大小")])])]),s._v(" "),a("p",[s._v("同一REPOSITORY可以有多个TAG，代表不同版本，如果docker run 时不指定版本默认使用的是latest版本。")]),s._v(" "),a("p",[a("strong",[s._v("列出本地所有镜像含历史镜像")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n")])])]),a("p",[a("strong",[s._v("只显示镜像ID")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v("\n")])])]),a("p",[a("strong",[s._v("从Hub上搜索某个镜像")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search 镜像名称\n")])])]),a("p",[s._v("搜索redis镜像")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker search redis")]),s._v("\nNAME                                DESCRIPTION                                      STARS     OFFICIAL   AUTOMATED\nredis                               Redis is an "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" key-value store that…   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12152")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("       \nredislabs/redisearch                Redis With the RedisSearch module pre-loaded…   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("                   \nredislabs/redisinsight              RedisInsight - The GUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Redis                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("87")]),s._v("                   \nredislabs/rebloom                   A probablistic datatypes module "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Redis        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nredislabs/redis                     Clustered in-memory database engine compatib…   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),s._v("                   \nredislabs/rejson                    RedisJSON - Enhanced JSON data "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" processi…   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("                   \nredis/redis-stack-server            redis-stack-server installs a Redis server w…   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),s._v("                   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[a("strong",[s._v("只显示前N个镜像，默认是显示25个")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker search --limit 3 redis")]),s._v("\nNAME                     DESCRIPTION                                      STARS     OFFICIAL   AUTOMATED\nredis                    Redis is an "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" key-value store that…   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12152")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("       \nredislabs/redisearch     Redis With the RedisSearch module pre-loaded…   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("                   \nredislabs/redisinsight   RedisInsight - The GUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Redis                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("87")]),s._v("     \n")])])]),a("p",[a("strong",[s._v("拉取镜像（下载）")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认下载最新版本的镜像，等价于docker pull 镜像名称:latest")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull 镜像名字\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载指定版本镜像，TAG（镜像的版本）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull 镜像名字:TAG\n")])])]),a("p",[a("strong",[s._v("查看镜像/容器/数据卷所占空间")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker system df")]),s._v("\nTYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE\nImages          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(".26kB   0B "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nContainers      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         0B        0B\nLocal Volumes   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         0B        0B\nBuild Cache     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         0B        0B\n")])])]),a("p",[a("strong",[s._v("删除镜像")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除单个")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" 某个镜像ID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除多个")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" 镜像名1:TAG 镜像名2:TAG\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除全部")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),a("p",[a("strong",[s._v("什么是虚悬镜像？")])]),s._v(" "),a("p",[s._v("REPOSITORY和TAG都是"),a("code",[s._v("<none>")]),s._v("的镜像")]),s._v(" "),a("h2",{attrs:{id:"容器命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器命令"}},[s._v("#")]),s._v(" 容器命令")]),s._v(" "),a("p",[a("strong",[s._v("新建启动容器")])]),s._v(" "),a("p",[a("code",[s._v("docker run [OPTIONS] IMAGE [COMMAND] [ARG...]")])]),s._v(" "),a("p",[s._v("OPTIONS：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v('--name="新容器名字"')]),s._v("，为容器指定一个名称")]),s._v(" "),a("li",[a("code",[s._v("-d")]),s._v("后台运行并且返回容器ID，启动守护式容器（后台运行）")]),s._v(" "),a("li",[a("code",[s._v("-i")]),s._v("以交互模式运行容器，通常与"),a("code",[s._v("-t")]),s._v("同时使用")]),s._v(" "),a("li",[a("code",[s._v("-t")]),s._v("为容器分配一个伪输入终端，通常与"),a("code",[s._v("-i")]),s._v("同时使用，启动交互式容器（前台伪终端，等待交互）")]),s._v(" "),a("li",[a("code",[s._v("-P")]),s._v("随机端口映射")]),s._v(" "),a("li",[a("code",[s._v("-p")]),s._v("指定端口")]),s._v(" "),a("li",[a("code",[s._v("--volumes-from 父容器名称")]),s._v("，继承父容器的数据卷位置")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口映射 -p 8080:80")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" hostPort:containerPort\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置监听地址 -p 10.0.0.100:8080:80")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" ip:hostPort:containerPort\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机分配端口 -p 10.0.0.100::80")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" ip::containerPort\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定协议 -p 8080:80:tcp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" hostPort:containerPort:udp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定多个")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(":443 \n")])])]),a("p",[s._v("以交互模式启动运行centos容器，并且执行"),a("code",[s._v("/bin/bash")]),s._v("命令，退出终端直接输入"),a("code",[s._v("exit")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -ti centos /bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@20886be28070 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")]),s._v("         PID   "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PPID")]),s._v("  C STIME TTY          TIME CMD\nroot          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 07:18 pts/0    00:00:00 /bin/bash\nroot         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 07:18 pts/0    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@20886be28070 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])])]),a("p",[a("strong",[s._v("列出正在运行容器")])]),s._v(" "),a("p",[a("code",[s._v("docker ps [OPTIONS]")])]),s._v(" "),a("p",[s._v("OPTIONS说明")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("-a")]),s._v("列出所有正在运行的容器和历史上运行过的容器。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("-l")]),s._v("显示最近创建的容器。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("-n 个数")]),s._v("显示最近n个创建的容器。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("-q")]),s._v("静默模式，只显示容器编号。")])])]),s._v(" "),a("p",[a("strong",[s._v("退出容器")])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("exit")]),s._v("  run进去容器，执行exit，容器停止")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("ctrl+p+q")]),s._v(" run进去容器，"),a("code",[s._v("ctrl+p+q")]),s._v("，容器不停止")])])]),s._v(" "),a("p",[a("strong",[s._v("启动已停止的容器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start 容器ID或者容器名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NAMES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[a("strong",[s._v("重启容器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart 容器ID或者容器名\n")])])]),a("p",[a("strong",[s._v("停止容器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop 容器ID或者容器名\n")])])]),a("p",[a("strong",[s._v("强制停止容器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" 容器ID或者容器名\n")])])]),a("p",[a("strong",[s._v("删除已停止的容器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除单个容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 容器ID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次性删除多个容器实例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n")])])]),a("p",[a("strong",[s._v("为什么守护式启动Centos，容器还是会自动退出？")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d centos")]),s._v("\n3ad3659b45c2022da1d4bcd8821ee41ccf08cac34e45a03d5ece4046bb126124\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps -a")]),s._v("\nCONTAINER ID   IMAGE     COMMAND       CREATED         STATUS                     PORTS     NAMES\n3ad3659b45c2   centos    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" seconds ago   Exited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" seconds ago             cool_satoshi\nc30ced2516e6   centos    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" minutes ago   Exited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" minutes ago             sleepy_agnesi\n")])])]),a("p",[s._v("docker机制：docker后台运行必须有一个前台进程。如果容器运行的命令不是一直挂起的命令就会自动退出。如果某个容器后台模式运行，docker前台没有运行的程序，这样的容器后台启动后，会觉得没有事情可做立即自杀，常见解决方案就是以前台进程形式运行，常见就是命令模式，表示有交互。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台模式运行redis")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" redis:6.0.8\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 交互模式运行redis")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" redis:6.0.8\n")])])]),a("p",[a("strong",[s._v("查看容器日志")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs 容器ID/容器名称\n")])])]),a("p",[a("strong",[s._v("容器内运行的进程")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" 容器ID/容器名称\n")])])]),a("p",[a("strong",[s._v("容器内部细节")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect 容器ID/容器名称\n")])])]),a("p",[a("strong",[s._v("进入正在运行容器并以命令行交互")])]),s._v(" "),a("p",[a("code",[s._v("docker exec -it 容器ID/容器名称 bashshell")])]),s._v(" "),a("p",[a("code",[s._v("docker attach 容器ID/容器名称")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("exec")]),s._v("打开新的终端，并且可以启动新的进程，所以用exit退出，不会导致容器停止，推荐使用。")]),s._v(" "),a("li",[a("code",[s._v("attach")]),s._v("直接进入容器启动命令的终端，不会启动新的进程，所以用exit退出，会导致容器停止。")])]),s._v(" "),a("p",[a("strong",[s._v("从容器内拷贝文件到主机")])]),s._v(" "),a("p",[a("code",[s._v("docker ps 容器ID:容器内文件位置 主机位置")])]),s._v(" "),a("p",[s._v("容器停止了也是可以复制的")]),s._v(" "),a("p",[a("strong",[s._v("容器导入和导出")])]),s._v(" "),a("p",[s._v("export：导出容器内容作为一个tar文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" 容器ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 文件名字.tar\n")])])]),a("p",[s._v("import：将tar中内容作为新的文件系统导入为镜像")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" 文件名字.tar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" - 用户名/镜像名字:镜像版本号\n")])])]),a("h2",{attrs:{id:"其他命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),a("p",[a("img",{attrs:{src:t(417),alt:""}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("attach 当前 shell 下 attach 连接指定运行镜像")])]),s._v(" "),a("li",[a("p",[s._v("build 通过 Dockerfile 定制镜像")])]),s._v(" "),a("li",[a("p",[s._v("commit 提交当前容器为新的镜像")])]),s._v(" "),a("li",[a("p",[s._v("cp 从容器中拷贝指定文件或者目录到宿主机中")])]),s._v(" "),a("li",[a("p",[s._v("create 创建一个新的容器，同 run，但不启动容器")])]),s._v(" "),a("li",[a("p",[s._v("diff 查看 docker 容器变化")])]),s._v(" "),a("li",[a("p",[s._v("events 从 docker 服务获取容器实时事件")])]),s._v(" "),a("li",[a("p",[s._v("exec 在已存在的容器上运行命令")])]),s._v(" "),a("li",[a("p",[s._v("export 导出容器的内容流作为一个 tar 归档文件[对应 import ]")])]),s._v(" "),a("li",[a("p",[s._v("history 展示一个镜像形成历史")])]),s._v(" "),a("li",[a("p",[s._v("images 列出系统当前镜像")])]),s._v(" "),a("li",[a("p",[s._v("import 从tar包中的内容创建一个新的文件系统映像[对应export]")])]),s._v(" "),a("li",[a("p",[s._v("info 显示系统相关信息")])]),s._v(" "),a("li",[a("p",[s._v("inspect 查看容器详细信息")])]),s._v(" "),a("li",[a("p",[s._v("kill kill 指定 docker 容器")])]),s._v(" "),a("li",[a("p",[s._v("load 从一个 tar 包中加载一个镜像[对应 save]")])]),s._v(" "),a("li",[a("p",[s._v("login 注册或者登陆一个 docker 源服务器")])]),s._v(" "),a("li",[a("p",[s._v("logout 从当前 Docker registry 退出")])]),s._v(" "),a("li",[a("p",[s._v("logs 输出当前容器日志信息")])]),s._v(" "),a("li",[a("p",[s._v("port 查看映射端口对应的容器内部源端口")])]),s._v(" "),a("li",[a("p",[s._v("pause 暂停容器")])]),s._v(" "),a("li",[a("p",[s._v("ps 列出容器列表")])]),s._v(" "),a("li",[a("p",[s._v("pull 从docker镜像源服务器拉取指定镜像或者库镜像")])]),s._v(" "),a("li",[a("p",[s._v("push 推送指定镜像或者库镜像至docker源服务器")])]),s._v(" "),a("li",[a("p",[s._v("restart 重启运行的容器")])]),s._v(" "),a("li",[a("p",[s._v("rm 移除一个或者多个容器")])]),s._v(" "),a("li",[a("p",[s._v("rmi 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]")])]),s._v(" "),a("li",[a("p",[s._v("run 创建一个新的容器并运行一个命令")])]),s._v(" "),a("li",[a("p",[s._v("save 保存一个镜像为一个 tar 包[对应 load]")])]),s._v(" "),a("li",[a("p",[s._v("search 在 docker hub 中搜索镜像")])]),s._v(" "),a("li",[a("p",[s._v("start 启动容器")])]),s._v(" "),a("li",[a("p",[s._v("stop 停止容器")])]),s._v(" "),a("li",[a("p",[s._v("tag 给源中镜像打标签")])]),s._v(" "),a("li",[a("p",[s._v("top 查看容器中运行的进程信息")])]),s._v(" "),a("li",[a("p",[s._v("unpause 取消暂停容器")])]),s._v(" "),a("li",[a("p",[s._v("version 查看 docker 版本号")])]),s._v(" "),a("li",[a("p",[s._v("wait 截取容器停止时的退出状态值")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);