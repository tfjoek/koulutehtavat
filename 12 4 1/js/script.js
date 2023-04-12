var input = prompt("What month are you born in? Please provide numbers from 1-12.")


if (input == 12 || input == 1 || input == 2) {
    alert("JOULU!");
}
else if (input >= 3 && input <= 5) {
    alert("KEVÄT!");
}
else if (input >= 6 && input <= 8) {
    alert("KESÄ!");
}
else if (input >= 9 && input <= 11) {
    alert("SYKSY!");
}

