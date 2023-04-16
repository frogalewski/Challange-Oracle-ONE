git aconst textInput = document.getElementById('text-input');
const codeSelect = document.getElementById('code-select');
const submitButton = document.getElementById('submit-button');
const resultOutput = document.getElementById('result-output');

submitButton.addEventListener('click', () => {
  const text = textInput.value;
  const code = codeSelect.value;

  if (code === 'encode') {
    const encodedText = encodeURI(text);
    resultOutput.value = encodedText;
  } else if (code === 'decode') {
    const decodedText = decodeURI(text);
    resultOutput.value = decodedText;
  }
});
