
const toggleOff = () => {
  const selected = document.getElementById("selected");
  selected.removeAttribute("id");
};

const toggleOn = (tab) => {
  tab.setAttribute("id", "selected");
};

const hideText = () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    section.setAttribute("hidden", "");
  });
};

const showText =(tab) => {
  const toShow = document.getElementById(`${tab.firstChild.innerText.toLowerCase()}`);
  toShow.removeAttribute("hidden");
};

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    toggleOff();
    toggleOn(tab);
    console.log(tab.firstChild.innerText);
    hideText();
    showText(tab);
  })
});



