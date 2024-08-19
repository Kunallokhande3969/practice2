var arr = [
  {
    username: "Amit",
    dp: "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    username: "Sumit",
    dp: "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    username: "Akshy",
    dp: "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    username: "Ram",
    dp: "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    username: "Kunal",
    dp: "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    username: "Samir",
    dp: "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    username: "Madhav",
    dp: "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1719424728470-dd04ffe8e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
  },
];
var clutter = " ";
var storiya = document.querySelector("#storiya");
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
             <img  id=${idx} src="${elem.dp}"alt="">
             </div>
          `;
});
storiya.innerHTML = clutter;
var full = document.querySelector("#full");
var username = document.querySelector("#username h5");
var growth = document.querySelector("#growth");
var userImage = document.querySelector("#username img");
var story = document.querySelector(".story");
var photo = document.querySelector("#photo");

storiya.addEventListener("click", function (dets) {
  var story = arr[dets.target.id].story;
  full.style.display = " block";
  full.style.backgroundImage = `url(${story})`;
  username.innerHTML = arr[dets.target.id].username;
  userImage.setAttribute("src", arr[dets.target.id].dp);

  setTimeout(() => {
    full.style.display = "none";
  }, 3000);
  var grow = 0;
  var a = setInterval(function () {
    grow++;
    growth.style.width = grow + "%";
  }, 30);
  setTimeout(function () {
    clearInterval(a);
    full.style.display = "none";
    story.style.backgroundColor = "white";
  }, 3000);
});
full.addEventListener("dblclick", function () {
  full.style.display = "none";
  story.style.backgroundColor = "white";
  clearInterval(a);
});

var p = document.querySelector("#userpost");

var kkk = document.querySelector("#kk");

p.addEventListener("dblclick", function () {
  console.log("kunal");
  kkk.style.backgroundColor = "red";
});
