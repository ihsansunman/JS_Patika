const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = () => {
  let color = randomColor();
  console.log(color);
  document.getElementById("currentColor").innerText = color;
  document.body.style.backgroundColor = color;
};
