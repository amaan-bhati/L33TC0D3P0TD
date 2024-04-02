var isIsomorphic = function (s, t) {

    //if the length of s is not equal to the length of t, the strings are definitely not isomorphic
    if (s.length !== t.length) {
        return false;
    }

    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (sMap[sChar] === undefined && tMap[tChar] === undefined) {
            sMap[sChar] = tChar;
            tMap[tChar] = sChar;
        } else if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
            return false;
        }
    }

    return true;
}
