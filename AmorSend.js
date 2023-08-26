async function enviarMensagensDeAmor() {
  const main = document.querySelector("#main");
  const textarea = main.querySelector(`div[contenteditable="true"]`);

  if (!textarea) throw new Error("ERRO, abra a conversa");

  for (let x = 1; x <= 100; x++) {
    const message = `Eu te amo ${x}%  ❤️`;

    console.log(message);

    textarea.focus();
    document.execCommand('insertText', false, message);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));

    setTimeout(() => {
      const sendButton = main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`);
      sendButton.click();
    }, 400); 

    if (x !== 100) {
      const randomDelay = Math.random() * 0.8 * 400; 
      await new Promise(resolve => setTimeout(resolve, 2000 + randomDelay)); 
    }
  }

  return 100; 
}

enviarMensagensDeAmor();
