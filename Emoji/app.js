const btnEmoji=document.querySelector("#emoji");
const emojis=["😆","😅","🤣","😂","😀","🤑","🤨","🙂","😊","😗","😛","😏","🤥","😴","🥺","😧","😇","😳","🙃","🥴","🧐","🤨","😒","🤔",
"🤭","🥰","🤐","😄","🤔","🤪","🥲","😃","😁",
"😬"];

btnEmoji.addEventListener("mouseover",()=>{
btnEmoji.innerText = emojis[Math.floor(Math.random()*emojis.length)];
});