/* Draws the shelf on the About page from SHELVES (see shelf-data.js).
   You shouldn't need to edit this file. */
(function () {
  var tabsEl = document.getElementById("shelf-tabs");
  var rowEl = document.getElementById("shelf-row");
  var introEl = document.getElementById("shelf-intro");
  if (!tabsEl || !rowEl || typeof SHELVES === "undefined") return;

  var COLORS = ["#e8663f", "#13908d", "#d98c00", "#6f9a1f", "#e0607a", "#1f8fb0"];

  // Figure out which image URL (if any) to use for an item.
  function coverFor(item) {
    if (item.cover) return Promise.resolve(item.cover);
    if (item.isbn) {
      return Promise.resolve(
        "https://covers.openlibrary.org/b/isbn/" + item.isbn + "-M.jpg?default=false"
      );
    }
    if (item.autoArt) {
      var term = encodeURIComponent((item.title || "") + " " + (item.by || ""));
      return fetch("https://itunes.apple.com/search?entity=album&limit=1&term=" + term)
        .then(function (r) { return r.json(); })
        .then(function (d) {
          var art = d.results && d.results[0] && d.results[0].artworkUrl100;
          return art ? art.replace("100x100", "400x400") : null;
        })
        .catch(function () { return null; });
    }
    return Promise.resolve(null);
  }

  function placeholder(item, index) {
    var p = document.createElement("div");
    p.className = "face front placeholder";
    p.style.background = COLORS[index % COLORS.length];
    p.textContent = item.title;
    return p;
  }

  function buildItem(item, index) {
    var wrap = document.createElement("div");
    wrap.className = "item";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "flip";
    btn.setAttribute("aria-label", "Flip to see my take on " + item.title);

    var inner = document.createElement("div");
    inner.className = "flip-inner";

    var front = document.createElement("div");
    front.className = "face front";
    front.appendChild(placeholder(item, index)); // shown until/unless an image loads

    var back = document.createElement("div");
    back.className = "face back";
    var strong = document.createElement("strong");
    strong.textContent = item.title;
    back.appendChild(strong);
    var take = document.createElement("span");
    take.textContent = item.take || "Add your take in shelf-data.js";
    back.appendChild(take);
    if (item.link) {
      var br = document.createElement("br");
      var a = document.createElement("a");
      a.href = item.link;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = "Learn more";
      a.addEventListener("click", function (e) { e.stopPropagation(); });
      back.appendChild(br);
      back.appendChild(a);
    }

    inner.appendChild(front);
    inner.appendChild(back);
    btn.appendChild(inner);
    btn.addEventListener("click", function () { btn.classList.toggle("flipped"); });

    var cap = document.createElement("div");
    cap.className = "caption";
    var b = document.createElement("b");
    b.textContent = item.title;
    cap.appendChild(b);
    if (item.by) {
      var s = document.createElement("span");
      s.textContent = item.by;
      cap.appendChild(s);
    }

    wrap.appendChild(btn);
    wrap.appendChild(cap);

    // Try to load cover art; fall back to the colored card on any failure.
    coverFor(item).then(function (url) {
      if (!url) return;
      var img = new Image();
      img.alt = "Cover of " + item.title;
      img.onload = function () {
        // Open Library can return tiny 1x1 images for unknown ISBNs.
        if (img.naturalWidth < 20) return;
        front.innerHTML = "";
        front.appendChild(img);
      };
      img.src = url;
    });

    return wrap;
  }

  function show(index) {
    var shelf = SHELVES[index];
    Array.prototype.forEach.call(tabsEl.children, function (t, i) {
      t.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    introEl.textContent = shelf.intro || "";
    rowEl.innerHTML = "";
    shelf.items.forEach(function (item, i) { rowEl.appendChild(buildItem(item, i)); });
  }

  SHELVES.forEach(function (shelf, i) {
    var t = document.createElement("button");
    t.type = "button";
    t.setAttribute("role", "tab");
    t.textContent = shelf.label;
    t.addEventListener("click", function () { show(i); });
    tabsEl.appendChild(t);
  });

  show(0);
})();
