function appendValue(val) {
  const display = document.getElementById('display');
  if (display.value === "0") {
    display.value = val;
  } else {
    display.value += val;
  }
}

function clearDisplay() {
  document.getElementById('display').value = "0";
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = "Error";
  }
}
