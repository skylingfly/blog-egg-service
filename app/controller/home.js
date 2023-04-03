'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async getData() {
    const { ctx } = this;
    try {
      // 获取请求参数
      const { start_date, end_date, metrics, method, requestMethod = 'POST', site_id = '18781261' } = ctx.request.body;
      const url = 'https://api.baidu.com/json/tongji/v1/ReportService/getData';
      const params = {
        header: {
          userName: '白雾茫茫丶',
          accessToken: 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhY2MiLCJhdWQiOiLnmb7luqbnu5_orqEiLCJ1aWQiOjQ1NTMwMDYwLCJhcHBJZCI6IjEzYmQ1MDQ5YTY3NmQxMDczNzk1OTkzMjEwMmVjNTU3IiwiaXNzIjoi5ZWG5Lia5byA5Y-R6ICF5Lit5b-DIiwicGxhdGZvcm1JZCI6IjQ5NjAzNDU5NjU5NTg1NjE3OTQiLCJleHAiOjE2ODI0OTg4NjQsImp0aSI6Ijc0MDQ5ODQyNzkzMjI5MzU0ODMifQ.6pMdNzjFdMzc7Jn6U2E_ZBJBVNnvloeeE2ar1YTL1JGnRs-NQSrMZDJKRHgFNGt9',
        },
        body: {
          site_id,
          start_date,
          end_date,
          metrics,
          method,
        },
      };
      const { data } = await this.ctx.curl(url, {
        method: requestMethod,
        dataType: 'json',
        data: JSON.stringify(params),
      });
      ctx.body = { data, msg: '请求成功', code: 200 };
    } catch (error) {
      ctx.body = { data: {}, msg: '请求失败', code: 400 };
    }

  }
}

module.exports = HomeController;
