const texts = [
      { el: document.querySelector(".line-1"), text: "Compare Prices." },
      { el: document.querySelector(".line-2"), text: "Make Better Choices." }
    ];

    let active = 0, i = texts[0].text.length, erasing = true;

    // show both lines initially
    texts.forEach(t => t.el.textContent = t.text);

    function type() {
      let t = texts[active];
      t.el.textContent = t.text.slice(0, i);

      if (erasing) {
        i--;
        if (i < 0) { erasing = false; i = 0; }
      } else {
        i++;
        if (i > t.text.length) {
          erasing = true;
          active = (active + 1) % texts.length; // switch line
          i = texts[active].text.length;
        }
      }
      setTimeout(type, erasing ? 80 : 120);
    }
    type();
    