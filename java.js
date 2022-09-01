async function getArticles(){
    await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=38G74vVPGc7bHRMg2hqVZJenFtq8PgDO')
    .then(d => d.json())
    .then(resp => {
        console.log(resp.results);
        for(var i = 0; i < resp.results.length; i++){
            const output = document.getElementById('output');
            
            try{
                output.innerHTML += `
                    <div class="card">
                    <div class="card-body">
                    <img src="${resp.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${resp.results[i]['media'][0].caption}" title="${resp.results[i]['media'][0].caption}"><br>
                    <h2 class="card-title">${resp.results[i].title}</h2>
                    <div class="card-text">
                        <p>${resp.results[i].abstract}</p>
                    </div>
                    </div>
                    </div>
                    <br>
                    `
                console.log(resp.results[i]['media'][0].caption);
            }
            catch(err){
                console.log(err);
            }
            // console.log(resp.results[i].title);
            // console.log(i);
        }
        
    })
}
getArticles();