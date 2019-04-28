function el(type, attrs = [], children = []) {
  const e = document.createElement(type);

  Object.keys(attrs).forEach(key => {
    e.setAttribute(key, attrs[key]);
  });

  children.forEach(child => {
    if (typeof child === "string") {
      if (e.textContent) {
        e.textContent = child;
      } else {
        e.innerHTML = child;
      }
    } else {
      e.appendChild(child);
    }
  });
  return e;
}

// usage
const newElement = el("div", { className: "bold" }, [
  el("p", {}, ["here is text in a paragraph"])
]);

document.appendChild(newElement);
