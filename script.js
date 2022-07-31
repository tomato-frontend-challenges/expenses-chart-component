const days = document.getElementsByClassName('spending__day');

const maxAmount = data.reduce((prev, curr) => (curr.amount > prev.amount) ? curr : prev).amount;
const barContainerElement = document.getElementsByClassName('spending__day-container')[0];
const maxHeight = window.getComputedStyle(barContainerElement).height;

for (let i = 0; i < days.length; i++) {
  const day = days[i].lastElementChild.textContent;
  const {amount} = data.find(element => element.day === day);
  const bar = days[i].firstElementChild.firstElementChild;
  const tooltip = bar.firstElementChild;
  const newPXHeight = (parseFloat(maxHeight) * amount) / maxAmount;  

  tooltip.textContent = '$' + amount.toString();
  bar.style.height = `${newPXHeight}px`;
}