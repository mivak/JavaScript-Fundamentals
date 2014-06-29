function parseURL() {
    var url = jsConsole.read('#URL'),
        result = {},
        position = 0,
        pattern = "/",
        index = url.indexOf(pattern, position);
 
    result["protocol"] = url.substring(position, index - 1);
 
    position = index + 2;
    index = url.indexOf(pattern, position);
    result["server"] = url.substring(position, index);
    position = index;
    index = url.indexOf(pattern, position);
    result["resource"] = url.substring(position);

    for (var i in result) {
        jsConsole.writeLine(result[i]);
    }   
}