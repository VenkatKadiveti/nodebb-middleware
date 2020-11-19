const dateFormat = require('dateformat')


const handleSessionExpiry = (proxyRes, proxyResData, req, res, data) => {
    if ((proxyRes.statusCode === 401) && !req.session.userId) {
        return {
          id: 'app.error',
          ver: '1.0',
          ts: dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss:lo'),
          params:
          {
              'msgid': null,
              'status': 'failed',
              'err': 'SESSION_EXPIRED',
              'errmsg': 'Session Expired'
          },
          responseCode: 'SESSION_EXPIRED',
          result: { }
      };
    } else {
      return proxyResData;
    }
  }

  module.exports.handleSessionExpiry = handleSessionExpiry
