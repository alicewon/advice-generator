
function fetchAdviceSlip() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => console.log(data));
}

export default fetchAdviceSlip();

