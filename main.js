const generateMemeBtn =document.querySelector(
".meme-generator.generate-meme-btn"
);
const memeImag=document.querySelector(".meme-generator img");
const memeTitle =document.querySelector(".meme-generator.meme-title");
const memeAuthor =document.querySelector("meme-generator.meme-author");

const updateDetails =(ulr, title,author) => {
    memeImage.setAttribut("src",url);
    memeTitle.innerHtML=title;
    memeAuthor.innerHTML ='Meme by: ${author}';
};


const generateMeme =() => {
fetch("https://meme-herokuapp.com/gimme/whoLesomemes")
.then(response) => response.json())
.then((data) => {
    updateDetails(data.url,data,memeTitle,data.author);
});

};

generateMemeBtn.addEventListener("click",generateMeme);
