var useragent = require('useragent');

module.exports.whoami = function(req, res) {
  var lang = req.acceptsLanguages().toString();
      lang = lang.replace(/\,(.*)/, '');
  
 var agent = useragent.parse(req.headers['user-agent']).toString();
  
  res.json({
    ipaddress: `${req.connection.remoteAddress.replace(/^.*:/, '')}`,
    language: `${lang}`,
    software: `${agent}`
  });

}
