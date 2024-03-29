chrome.runtime.onMessage.addListener(function(request, sender, response) {

  if(request.msg === "image"){  
      var list = [{
        filename: request.filename,
        url: request.url
       }];
      fetch('http://127.0.0.1:8000/classifyUrl/', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(list),
        })
        .then(response => response.text())
        .then(data => {
          let dataObj = JSON.parse(data);
          console.log(dataObj);
          response({data: dataObj, index: request.index});
        })
        .catch(error => console.log("error", error))
        return true;  // Will respond asynchronously.  
      }
}); 


