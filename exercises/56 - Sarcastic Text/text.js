// Get HTML elements
const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const inputForms = Array.from(document.querySelectorAll('[name="filter"]'));
/* eslint-disable */
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};
/* eslint-enable */

// Mutate and update result based on input selection
transformText = function (startingText) {
        // Get Input
        const selectedInput = inputForms.filter((element) => element.checked === true)[0].id;
        let resultText = '';
        const arrayTmp = startingText.split('');
        if (selectedInput === 'sarcastic') {
                resultTmp = arrayTmp.map((element, index) => {
                        if (index % 2 === 0) {
                                return element;
                        }
                        return element.toUpperCase();
                });
                resultText = resultTmp.join('');
        } else if (selectedInput === 'unable') {
                resultTmp = arrayTmp.map((element, index) => {
                        if (element === ' ') {
                                return '...';
                        }
                        return element;
                });
                resultText = resultTmp.join('');
        } else if (selectedInput === 'funky') {
                resultTmp = arrayTmp.map((element) => {
                        const funkyLetter = funkyLetters[element];
                        if (funkyLetter) {
                                return funkyLetter;
                        }
                        return element;
                });
                resultText = resultTmp.join('');
        } else if (selectedInput === 'normal') {
                resultText = startingText;
        }
        // Udpdate Results
        result.innerHTML = resultText;
};

// Add Events
textarea.addEventListener('input', () => {
        transformText(textarea.value);
});
inputForms.forEach((input) =>
        input.addEventListener('input', () => {
                transformText(textarea.value);
        })
);
