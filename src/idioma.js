export default function platzom(str) {
    let translation = str;

    //si la palabra termina en Ar se le quitan los ultims dos caracteres
    if (str.toLowerCase().endsWith("ar")) {
        translation = str.slice(0, -2);

    }

    // si inicia con z se le agrega p al final

    if (str.toLocaleLowerCase().startsWith("z")) {
        translation += "pe";

    }

    //
    const length = translation.length;
    if (length >= 10) {
        const firstHalf = translation.slice(0, Math.round(length / 2));
        const secondHalf = translation.slice(Math.round(length / 2));
        translation = `${firstHalf}-${secondHalf}`;

    }

    //Si es palindromo
    const reverse = (str) => str.split("").reverse().join("");

    function minMay(str) {
        const length = str.length;
        let trasnslation = "";
        var flag = true;
        for (let i = 0; i < length; i++) {
            let char = str.charAt(i);
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
