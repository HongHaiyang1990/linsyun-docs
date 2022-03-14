# 灵活用工-操作手册

## 安装说明

安装/更新依赖
```
yarn install
```

## 运行说明

在develop分支，通过yarn运行
```
yarn docs:dev
```

## 打包说明

1. 将develop分支代码合并到master分支
2. 在master分支，通过yarn运行
```
yarn docs:build
```

## 特殊说明

**请不要将master分支合并到develop分支，并且请不要修改.gitignore文件**

