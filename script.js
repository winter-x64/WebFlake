const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".top-text", {
    duration: 1000,
  });
  
  ScrollReveal().reveal(".second", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
  });
  
  ScrollReveal().reveal(".cards", {
    
    origin: "bottom",
    delay: 1000,
  });
  ScrollReveal().reveal(".img-last", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
  });
  ScrollReveal().reveal(".fifth img", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
  });
  ScrollReveal().reveal(".bg", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1000,
  });
  ScrollReveal().reveal(".fourth-left p", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
  });
  ScrollReveal().reveal(".third-header", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1500,
  });

  function playSound(audioName,loop){
    let audio = new Audio(audioName);
    audio.loop = loop;
    audio.play();
  }
  
  playSound('assets/audio.mp3',true)
        play.addEventListener("click", playMusic);