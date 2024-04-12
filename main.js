const API_KEY = "e13f8144958ba5478b091db5639a0ef2";



  function fetchHandler(url){
    fetch(url)
        .then(response => response.json())
        .then(response => responseHandler(response.results))
        .catch(err => console.error(err))
  }

  function responseHandler(results){
    console.log(results);
    for (let i = 0; i < results.length; i++) {

        const movie = results[i];
        const section = document.querySelector("main section");
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const poster = movie.poster_path;
        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w200${poster}`
        const voteNumber = document.createElement("p");
        const scoreAverage = document.createElement("p");
        const publishDate = document.createElement("p");
        const scenario = document.createElement("p");
        
        h3.textContent = movie.title;
        voteNumber.textContent = `le nombre de vote : ${movie.vote_count}`;
        scoreAverage.textContent = `la note moyenne des votes : ${movie.vote_average}`;
        publishDate.textContent = `La date de sortie du film : ${movie.release_date}`;
        scenario.textContent = `Scenario : ${movie.overview}`;

        section.append(article);
        article.append(h3);
        article.append(img);
        article.append(voteNumber);
        article.append(scoreAverage);
        article.append(publishDate);
        article.append(scenario);

    }
}

// https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg

document.addEventListener("DOMContentLoaded", () => {
    fetchHandler(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
    
});
  

