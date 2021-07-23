function requestValid(httpObj){
    methodValid(httpObj);
    uriValid(httpObj);
    versionValid(httpObj);
    messageValid(httpObj);

    return httpObj;

    function messageValid(objArg){
        let regString = /^[^<>\\&'"]*$/;
        if(!regString.test(objArg['message']) || objArg['message'] === undefined){
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    function uriValid(objArg){
        let regString = /(^\*$|^[\w\.]+$)/;
        if(!regString.test(objArg['uri']) || objArg['uri'] === undefined){
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function versionValid(objArg){
        let versionAllowed = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        if(!versionAllowed.some(x => x === objArg['version']) || objArg['version'] === undefined){
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function methodValid(objArg){
        let methodAllowed = ['GET', 'POST', 'DELETE', 'CONNECT'];
        if(!methodAllowed.some(x => x === objArg['method']) || objArg['method'] === undefined){
            throw new Error('Invalid request header: Invalid Method');
        }
    }
}

// console.log(requestValid({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
//   }
//   ));

  console.log(requestValid({
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
  }
  ));
