const modEx = {
    "number": (max, min) => {
        // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript#7228322
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    "integer": modEx.number,
    "arrayNoRepeat": (length, array) => {
        if (length && !array)
            for (let i = 0; i < length; i++)
                array.push(i);
        // based on https://stackoverflow.com/a/18806417/
        let i = array.length;
        let j = 0;
        let temp;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    },
    "anr": modEx.arrayNoRepeat,
    "letter": (caps) => {
        // based on https://stackoverflow.com/questions/16106701/how-to-generate-a-random-string-of-letters-and-numbers-in-javascript#16106759
        let charset = "abcdefghijklmnopqrstuvwxyz";
        charset = (caps) ? charset.toUpperCase() : charset;
        return charset.charAt(Math.floor(Math.random() * charset.length));
    },
    "string": (len) => {
        // https://stackoverflow.com/questions/16106701/how-to-generate-a-random-string-of-letters-and-numbers-in-javascript#16106759
        let text = "";
        let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < len; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        return text;
    }
}
module.exports = modEx;