// const links = document.querySelectorAll('a')
// const highlight = document.createElement('span')
// highlight.classList.add('highlight')
// document.body.append(highlight)

// const hightlightLink = (e) => {
//   const linkCoords = e.currentTarget.getBoundingClientRect();
//   const coords = {
//     width: linkCoords.width,
//     height: linkCoords.height,
//     top: linkCoords.top + window.scrollY,
//     left: linkCoords.left + window.scrollX
//   };


//   highlight.style.width = `${coords.width}px`;
//   highlight.style.height = `${coords.height}px`;
//   highlight.style.transform = `translate(${coords.left}px), ${coords.top}px)`;
// }

// links.forEach(link => link.addEventListener('mouseenter', hightlightLink))

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
