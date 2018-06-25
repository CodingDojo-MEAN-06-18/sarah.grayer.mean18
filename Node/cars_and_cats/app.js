// get the http module:
const http = require('http');
// fs module allows us to read and write content for responses!!
const fs = require('fs');
// creating a server using http module:
const server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    //split URL to examine better
    const splitURL = request.url.split('/'),
      filetype=splitURL[1],
      file=splitURL[2];

    switch(filetype){
      case "styles": //serve css
        serveCSS(file, response);
        break;
      case "images": //serve a jpg img
        serveJPG(file, response);
        break;
      default:
        switch(filetype){ //serve an html file
        case "cars":
          if(file==="new"){
            serveHTML("new.html", response);
          }
          else{
            serveHTML("cars.html", response);
          }
          break;
        case "cats":
          serveHTML("cats.html", response);
          break;
        default:
          serve404(response);
        }
    }
  });

  function serveHTML(filename, response){
    fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
      if(error){return serve404(response)}
      response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  }
  function serveCSS(filename, response){
    fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents){
      if(error){return serve404(response)}
      response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  }
  function serveJPG(filename, response){
    fs.readFile(`images/${filename}`, function(error, contents){
      if(error){return serve404(response)}
      response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  }
  function serve404(response){
    response.writeHead(404);
    response.end("File not found!")
  }

// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
