post ==> 事件接收

```javascript
    //每次发送的数据，一直执行
    req.on('data')
    // 数据发送完成，一次完成
    req.on('end')
```