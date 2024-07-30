document.addEventListener("DOMContentLoaded", () => {
  const tipButtons = document.querySelectorAll(".buttonTip");
  const resetButton = document.querySelector(".reset");
  const customInput = document.querySelector(".customInput");
  const tipAmountDiv = document.getElementById("tip");
  const billAmountInput = document.getElementById("bill");
  const nrPeopleInput = document.getElementById("nrPeople");
  const totalAmountDiv = document.getElementById("total");

  const clearTipSelection = () => {
    tipButtons.forEach((btn) => btn.classList.remove("selected"));
  };

  tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clearTipSelection();
      button.classList.add("selected");
      customInput.value = "";
      const billAmount = parseFloat(billAmountInput.value);
      const nrPeople = parseInt(nrPeopleInput.value);

      if (!isNaN(billAmount) && !isNaN(nrPeople)) {
        const tipPercentage = button.dataset.tip;
        const tipPerPerson = (billAmount * tipPercentage) / nrPeople;
        const formattedTipPerPerson = tipPerPerson.toFixed(2);
        tipAmountDiv.innerHTML = ` ${formattedTipPerPerson}`;
        const totalPerPerson =
          (billAmount + billAmount * tipPercentage) / nrPeople;
        const formattedTotalPerPerson = totalPerPerson.toFixed(2);
        totalAmountDiv.innerHTML = `${formattedTotalPerPerson}`;
      } else
        alert(
          "Complete the fields of bill and number of people before clicking the tip % button"
        );
    });
  });

  resetButton.addEventListener("click", () => {
    clearTipSelection();
    document.getElementById("form").reset();
    tipAmountDiv.innerHTML = `$0.00`;
    totalAmountDiv.innerHTML = `$0.00`;
  });

  customInput.addEventListener("input", () => {
    clearTipSelection();
    const inputPercentage = parseFloat(billAmountInput.value);
    const billAmount = parseFloat(billAmountInput.value);
    const nrPeople = parseFloat(nrPeopleInput.value);

    if (!isNaN(billAmount) && !isNaN(nrPeople)) {
      const tipPerPerson = (billAmount * inputPercentage) / nrPeople;
      const formattedTipPerPerson = tipPerPerson.toFixed(2);
      tipAmountDiv.innerHTML = ` ${formattedTipPerPerson}`;
      const totalPerPerson = (billAmount * (1 + inputPercentage)) / nrPeople;
      const formattedTotalPerPerson = totalPerPerson.toFixed(2);
      totalAmountDiv.innerHTML = `${formattedTotalPerPerson}`;
    } else
      alert(
        "Complete the fields of bill and number of people before clicking the tip % button"
      );
  });
});
