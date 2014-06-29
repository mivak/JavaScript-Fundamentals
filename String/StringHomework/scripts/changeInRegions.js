function changeInRegions() {
    var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.',
        stack = [],
        replaced = '';

    jsConsole.writeLine('Text: ' + text);

    for (var i = 0; i < text.length; i++) {
        if (text[i] + text[i + 1] === "<u") {
            i += 7;
            stack.push("up");
        }
        else if (text[i] + text[i + 1] === "<l") {
            i += 8;
            stack.push("low");
        }
        else if (text[i] + text[i + 1] === "<m") {
            i += 8;
            stack.push("mix");
        }
        else if (text[i] + text[i + 1] + text[i + 2] === "</u") {
            i += 8;
            stack.pop();
        }
        else if (text[i] + text[i + 1] + text[i + 2] === "</l") {
            i += 9;
            stack.pop();
        }
        else if (text[i] + text[i + 1] + text[i + 2] === "</m") {
            i += 9;
            stack.pop();
        }
        else {
            var state = stack[stack.length - 1];
            if (state === "up") {
                replaced += text[i].toUpperCase();
            }
            else if (state === "low") {
                replaced += text[i].toLowerCase();
            }
            else if (state === "mix") {
                if (parseInt(Math.random() * 2) > 0.5) {
                    replaced += text[i].toLowerCase()
                }
                else {
                    replaced += text[i].toUpperCase();
                }
            }
            else {
                replaced += text[i];
            }
        }
    }

    jsConsole.writeLine('Replaced text: ' + replaced);
}