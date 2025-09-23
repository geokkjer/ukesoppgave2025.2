import styleText from './style.css';
export default class TimerComponent extends HTMLElement {
  private timeLeft = 0;
  private intervalId: number | undefined;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const heading = this.getAttribute("heading") ?? "Nedtelling til hendelse:";
    const countdown = this.getAttribute("countdown") ?? "00";
    const button = this.getAttribute("button") ?? "Start 10 sek";

    Important: use import.meta.url to fetch CSS relative to this module file
    const cssUrl = new URL("./style.css", import.meta.url).href;
    let css = "";
    try {
      const res = await fetch(cssUrl);
      if (res.ok) css = await res.text();
      else console.warn("Kunde inte hämta CSS:", cssUrl, res.status);
    } catch (e) {
      console.warn("Fetch error for CSS:", e);
    }

    this.shadowRoot!.innerHTML = `
    <style>
    </style>
      <div class="countdown-container">
        <p>${heading}</p>
        <div class="countdown">${countdown}</div>
        <button id="startButton">${button}</button>
      </div>
    `;

    const btn = this.shadowRoot!.querySelector("#startButton")!;
    btn.addEventListener("click", () => this.startCountdown(10));
  }

  private startCountdown(seconds: number) {
    this.timeLeft = seconds;
    const countdownElement = this.shadowRoot!.querySelector(
      ".countdown"
    ) as HTMLElement;

    // Clear previous intervals if any
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = window.setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        countdownElement.textContent = "Tid er ute!";
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = undefined;
        }
        return;
      }
      countdownElement.textContent = `${this.timeLeft}`;
    }, 1000);
  }
}