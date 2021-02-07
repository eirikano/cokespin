var button = document.getElementById("button");
var result = document.getElementById("result");
var quote = document.getElementById("quote");
var delayInMilliseconds = 1000;

quotes = [
    "Winners never quit, and quitters never win. ―Vince Lombardi",
    "It always seems impossible until it’s done. ―Nelson Mandela",
    "There is no failure except in no longer trying. ―Elbert Hubbard",
    "Never give up on something that you can’t go a day without thinking about. ―Winston Churchill",
    "Never give up, for that is just the place and time that the tide will turn. ―Harriet Beecher Stowe",
    "Ikke la temperaturen i Sauda styre ovnen din. ―Eirik Nordbø",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. ―Thomas Edison",
    "It does not matter how slowly you go as long as you do not stop. ―Confucius",
    "Successful men and women keep moving. They make mistakes, but they don’t quit. ―Conrad Hilton",
    "Do not fear failure but rather fear not trying. ―Roy Bennett",
    "Never give up on the fight until you win the belt. ―Israelmore Ayivor",
    "På tide å prøve høyreaktiv koks? ―Eirik Nordbø",
];


function onclick_button() {
    quote.innerHTML = ""
    result.innerHTML = "3...";
    setTimeout(function () {
        result.innerHTML = "2...";
        setTimeout(function () {
            result.innerHTML = "1...";
            setTimeout(function () {

                randi = Math.round(Math.random())
                switch (randi) {
                    case 0:
                        result.innerHTML = "Trekk koks!";
                        break
                    case 1:
                        result.innerHTML = "Legg på koks!";
                }

                setTimeout(function () {
                    quote.innerHTML = quotes[Math.round(Math.random() * (quotes.length - 1))];

                }, delayInMilliseconds);

            }, delayInMilliseconds);
        }, delayInMilliseconds);
    }, delayInMilliseconds);


}



button.addEventListener("click", function () { onclick_button(); })

