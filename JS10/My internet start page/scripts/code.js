let saved = [];
const setup = () => {
    let button = document.getElementById("knop");
    button.addEventListener("click", search);
    localload();
}
const search = () => {
    let commando = document.getElementById("search").value;
    document.getElementById("search").value='';
    let websiteafkorting = commando.substring(1,2);
    let website = null;
    let url = "https://";
    let text = commando.substring(3);
    if(commando.substring(0,1) !== "/") {
        window.alert("invalid command");
        return;
    }
    if (websiteafkorting == "g"){
        website = "Google";
        url += "www.google.com/search?q="
        text = text.split(' ').join('+');
    } else if (websiteafkorting == "y"){
        website = "Youtube";
        url += "www.youtube.com/results?search_query="
        text = text.split(' ').join('+');
    } else if (websiteafkorting == "t"){
        website = "Twitter";
        url += "twitter.com/hashtag/"
        text = text.split(' ').join('');
    } else if (websiteafkorting == "i"){
        website = "Instagram";
        url += "www.instagram.com/explore/tags/"
        text = text.split(' ').join('');
    } else {
        window.alert("Unknown command prefix");
        return;
    }
    url+= text;
    let h = {
        title: website,
        text: text,
        url: url
    };
    saved.push(h);
    createcard(h.title,h.text,h.url);
    localsave();
    window.open(url, '_blank');
}
const createcard = (website,text,url) => {
    let history = document.getElementById("history");
    let card = document.createElement("div");
    card.classList.add("col-4");
    if (website == "Youtube"){
        card.classList.add("yt");
    } else if (website == "Google"){
        card.classList.add("go");
    } else if (website == "Twitter"){
        card.classList.add("tw");
    } else if (website =="Instagram"){
        card.classList.add("ig");
    }
    let cardbody = document.createElement("div");
    cardbody.classList.add("card-body");
    let title = document.createElement("h5");
    title.classList.add("card-title");
    let cardtext = document.createElement("p");
    cardtext.classList.add("card-text");
    let button = document.createElement("a");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.setAttribute("href",url);
    button.setAttribute("target","_blank")
    title.append(website);
    cardtext.append(text);
    button.append("Go!");
    card.append(cardbody);
    cardbody.append(title);
    cardbody.append(cardtext);
    cardbody.append(button);
    history.append(card);
}
const localsave = () => {
  let savedhistory = JSON.stringify(saved);
  localStorage.setItem('History-cards',savedhistory);
}
const localload = () => {
  let myHistory =localStorage.getItem('History-cards');
  if (myHistory !=null){
      saved = JSON.parse(myHistory);
      for (let i = 0; i < saved.length; i++) {
          createcard(saved[i].title,saved[i].text,saved[i].url);
      }
  }
}
window.addEventListener("load", setup);