class AnnouncementBar extends HTMLElement {
  connectedCallback() {
    const messages = this.querySelectorAll(".announcement-bar__message");
    let currentIndex = 0;

    if (messages.length <= 1) return; // nothing to rotate if there is only one message

    const animateSecond = this.getAttribute("data-speed");
    const interval = parseInt(animateSecond);

    setInterval(() => {
      messages[currentIndex].classList.add("hidden");
      currentIndex = (currentIndex + 1) % messages.length;
      messages[currentIndex].classList.remove("hidden");
    }, interval);
  }
}

customElements.define("announcement-bar", AnnouncementBar);
