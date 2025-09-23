import TimerComponent from "./startCountdown";

customElements.define("timer-component", TimerComponent);
main();

function main() {
  console.log("Main function running");
  const app = document.getElementById("app");
  app!.innerHTML =
    /*html*/
    `
        <timer-component></timer-component>

    `;
}

export default main;
