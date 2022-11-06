wx.wxrequest = function (options) {
    // 默认配置
    const OPT = Object.assign({
        method: 'GET',
        // dataType: 'json',
        responseType: 'text'
    }, options);

    // 默认header
    OPT['header'] = Object.assign({
        'Content-Type': 'application/json',
    }, options.header);

    // 发送的数据
    // 如果data是string,对应request模块的body（buffer、string）
    // 如果是object，则为json，对应request模块的json
    let POST_DATA = {
        body: options.data
    };

    // 开始请求
    return new Promise((RES, REJ) => {
        wx.request({
            url: '',
            //此处url需换成自己云函数的地址
            method:"POST",
            data: {
                options: Object.assign({
                    url: options.url,
                    method: OPT['method'],
                    headers: OPT['header']
                }, POST_DATA)
            },
            success: res => {
                // 如果datatype='json'，则解析后
                let data = null;
                if (OPT.dataType === 'json') {
                    try {
                        data = JSON.parse(res.data.body);
                    } catch (err) {
                        console.error('[!] v-request： 解析返回数据json失败', err);
                    }
                } else {
                    // 否则为text数据
                    data = res.data.body;
                }

                const RETURN_DATA = {
                    data,
                    errMsg: 'request:ok',
                    statusCode: res.statusCode,
                    header: res.headers
                }

                options.success && options.success(RETURN_DATA);
                RES(RETURN_DATA);
            },
            fail: err => {
                // 错误回调
                options.fail && options.fail({
                    errMsg: 'request:fail',
                    err
                });
                REJ(err);
            },
            complete: options.complete
        })
    })
}
