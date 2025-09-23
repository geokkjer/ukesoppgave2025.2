
export default class TimerComponent extends HTMLElement {
  private timeLeft = 0;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const heading = this.getAttribute("heading") ?? "Nedtelling til hendelse:";
    const countdown = this.getAttribute("countdown") ?? "00";
    const button = this.getAttribute("button") ?? "Start 10 sek";

    this.shadowRoot!.innerHTML = /*HTML*/ `
    <head>
    <link rel="stylesheet" href="style.css">
    </head>
    <div class='countdown-container'>
        <p>${heading}</p>
        <div class='countdown'>${countdown}</div>
        <button id="startButton">${button}</button>
    </div>
        `;
    const btn = this.shadowRoot!.querySelector("button")!;
    btn.addEventListener("click", () => this.startCountdown(100));
  }
  private startCountdown(seconds: number) {
    this.timeLeft = seconds;
    const countdownElement = this.shadowRoot!.querySelector(
      ".countdown"
    ) as HTMLElement;
    setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        countdownElement.textContent = "Tid er ute!";
        return;
    }
    countdownElement.textContent = `${String(this.timeLeft)}`
    }, 1000);
  }
}

