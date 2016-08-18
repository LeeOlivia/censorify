/**
 * Created by LJ196 on 2016/8/18.
 */
var censoredWords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr) {
    for(idx in censoredWords){
        inStr=inStr.replace(censoredWords[idx],"****");
    }
    for(id in customCensoredWords){
        inStr=inStr.replace(customCensoredWords[idx],"****");
    }
    return inStr;
}
function addCensoredWords(word) {
    customCensoredWords.push(word);
}
function getCensoreWords() {
    return censoredWords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoredWord=addCensoredWords;
exports.getCensoredWords=getCensoreWords;