(function(){

    const config = {
      settings: {
        token_name: process.env.TOKEN_NAME || 'Authentication',
        url: process.env.LINK_API || 'localhost:2715/api/v1/',
        name: process.env.NAME || 'EventApi'
      }
    }

    if(typeof(localStorage[config.settings.token_name]) === undefined){
        localStorage[config.settings.token_name] = ''
    }

}());
