import TimerComponent from "./components/startCountdown";

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
