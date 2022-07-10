let l = 0;
function intro() {
    window.location.href = "Level-1.html"
}

function lvl2() {
    window.location.href = "Level-2.html"
}

function convert(text, chk) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = text
    speech.rate = 0.7
    speech.volume = 1;
    speech.pitch = 2;
    voices = window.speechSynthesis.getVoices();
    if (chk == 0) {
        speech.voice = voices[8]
    }
    else {
        speech.voice = voices[0]
    }
    console.log(voices)
    window.speechSynthesis.speak(speech);
}

function dialog() {
    var text = dia[l].d
    document.getElementById('chat').innerText = text
    let chk
    if (l % 2 == 0) {
        chk = 0
    }
    else {
        chk = 1
    }
    convert(text, chk);
    l++;
}

const dia = [
    {
        "d": "Hey Kid, How are you?"
    },
    {
        "d": "Hello Papa Whale !! I am doing great. And how are you?"
    },
    {
        "d": "I am also fine. Well, I heard that you want to learn about trading. Is that right?"
    },
    {
        "d": "Yes Yes!!! Can you teach me?"
    },
    {
        "d": "Oh sure !!! Well, do you know what a stock is?"
    },
    {
        "d": "No, what is it?"
    },
    {
        "d": "Well, a stock is basically a very small part of a company."
    },
    {
        "d": "Well, what do you mean? So if I buy stock, I own a company?"
    },
    {
        "d": "No, you do not own the whole company - you own part of the company."
    },
    {
        "d": "So, do I own part of a company if I buy one little baby tiny stock?"
    },
    {
        "d": "The answer is yes, you do own part of the company if you buy one little tiny baby stock."
    },
    {
        "d": "I have another question. Why would I want to buy a stock?"
    },
    {
        "d": "Well, you would want to buy a stock because if this company that you buy the stock in does well, then, the stock price - which is how much you bought it for - will go up."
    },
    {
        "d": "Well then, if the stock price went up from what I bought it for, then do I make money?"
    },
    {
        "d": "No, you do not make money actually."
    },
    {
        "d": "Well, why is that? Then what's the point of buying a stock?"
    },
    {
        "d": "Well, if it goes up, then you have to go to your brokerage account, then sell it, and after you sell it, you get the money that its now trading for or selling for. That way, you can make money. Or, if the stock price went down or the company didn't do well, you might lose money. But that's ok because stocks are a risk, and you could make a lot of money."
    }
]
