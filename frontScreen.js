const fcbEl = document.querySelector(".fcb");

fcbEl.addEventListener("mouseover", (event)=>{
  const x = (event.pageX - fcbEl.offsetLeft);
  const y = (event.pageY - fcbEl.offsetTop);

  fcbEl.style.setProperty("--xPos", x + "px");
  fcbEl.style.setProperty("--yPos", y + "px");
})