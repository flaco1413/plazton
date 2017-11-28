"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;

    //si la palabra termina en Ar se le quitan los ultims dos caracteres
    if (str.toLowerCase().endsWith("ar")) {
        translation = str.slice(0, -2);
    }

    // si inicia con z se le agrega p al final

    if (str.toLocaleLowerCase().startsWith("z")) {
        translation += "pe";
    }

    //
    var length = translation.length;
    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firstHalf + "-" + secondHalf;
    }

    //Si es palindromo
    var reverse = function reverse(str) {
        return str.split("").reverse().join("");
    };

    function minMay(str) {
        var length = str.length;
        var trasnslation = "";
        var flag = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            trasnslation += flag ? char.toUpperCase() : char.toLowerCase();
            flag = !flag;
        }
        return trasnslation;
    }
    if (str == reverse(str)) {
        return minMay(str);
    }
    return translation;
}