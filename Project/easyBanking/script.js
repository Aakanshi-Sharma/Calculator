const hamburger = document.querySelector(".hamburger");
const section1 = document.querySelector(".section-1");
const header = document.querySelector(".header");
const close = document.querySelector(".close");

hamburger.addEventListener("click", function () {
  const html = `
  <div class="createdDiv">
    <ul class="createdUl">
    <li class="createdLi">Home</li>
    <li class="createdLi">About</li>
    <li class="createdLi">Contact</li>
    <li class="createdLi">Blog</li>
    <li class="createdLi">Careers</li>
    </ul>
  </div>
    `;

  section1.insertAdjacentHTML("beforeend", html);

  document.querySelector(".createdDiv").style.opacity = 0.8;
  document.querySelector(".createdDiv").style.width = "90%";
  document.querySelector(".createdDiv").style.backgroundColor = "white";
  document.querySelector(".createdDiv").style.zindex = 2;
  document.querySelector(".createdDiv").style.position = "absolute";
  document.querySelector(".column_2").style.zindex = 1;

  hamburger.classList.add("hidden");
  close.classList.remove("hidden");

  close.addEventListener("click", function () {
    document.querySelector(".createdDiv").remove();
    hamburger.classList.remove("hidden");
    close.classList.add("hidden");
    document.querySelector(".column_2").style.opacity = 1;
  });
  // closeBtn.addEventListener("click", function () {
  //   document.querySelector(".createdDiv").remove();
  // });
});
