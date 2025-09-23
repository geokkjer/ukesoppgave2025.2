import TimerComponent from "./components/startCountdown";

customElements.define("timer-component", TimerComponent);

export function main() {
  console.log("Main function running");
  const app = document.getElementById("app");
  app!.innerHTML = `
    <timer-component></timer-component>
  `;
}

main();
