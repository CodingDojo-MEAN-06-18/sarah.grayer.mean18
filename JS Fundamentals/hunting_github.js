
 var gitname;
  $.get("https://api.github.com/users/sarahgrayer", displayName(data))
    gitname=data.name;
    console.log(gitname);
