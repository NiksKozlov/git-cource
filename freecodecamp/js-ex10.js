function greet(name){
    if(name === "Johnny") {
      return "Hello, my love!";
    } else {
      return "Hello, " + name + "!";
    }
  }

  function areYouPlayingBanjo(name) {
    let firstLetter = name.charAt(0)
    if (firstLetter == 'R' || firstLetter == 'r') {
      return name + ' plays banjo'
    } else {
      return name + ' does not play banjo'
    }
  }