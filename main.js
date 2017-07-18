



// function reqListener () {
//   let data = JSON.parse(this.responseText);

fetch("https://api.github.com/users/natdanlia")
.then(
    // The promise returns a response from the server.
    function(response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
        // avtImg.appendChild( imgcontent );
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);

        let  myName = document.querySelector('.header');
        let ul = document.querySelector('ul');
        let p = document.querySelector('p');
        let avtImg = document.querySelector('img');


        let textcontent = document.createTextNode( data.name);
        myName.appendChild(textcontent);


        let li1 = document.createElement( "li");
        let li2 = document.createElement( "li");
        let li3 = document.createElement( "li");
        let li4 = document.createElement( "li");

        let li1Content = document.createTextNode( `Name: ${data.name}` );
        let li2Content = document.createTextNode( `Github URL ${data.html_url}`);
        let li3Content = document.createTextNode( `Company: ${data.company}` );
        let li4Content = document.createTextNode( `Website: ${data.blog}` );

        let pcontent = document.createTextNode(data.bio);

        // let imgcontent = document.createTextNode(data.avatar_url);
        avtImg.setAttribute("src", data.avatar_url);

        ul.appendChild( li1 );
        ul.appendChild( li2 );
        ul.appendChild( li3 );
        ul.appendChild( li4 );

        li1.appendChild( li1Content );
        li2.appendChild( li2Content );
        li3.appendChild( li3Content );
        li4.appendChild( li4Content );

        p.appendChild( pcontent );

      });
    }
  )





// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/natdanlia");
//
// req.addEventListener("load", reqListener);
// req.send();
