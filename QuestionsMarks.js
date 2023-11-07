function QuestionsMarks(str) { 
let temp = "0";
let num = 0;
var count = 0;
let a =0;
for (let i = 0; i < str.length; i++) {
            let ch = str[i];
            if (ch == '?' && i > temp && temp!=0) {
              count = count + 1;
              }
            if (count == 3 && !isNaN(String(ch) * 1)) {
              a = Number(num) + Number(ch);
            }
            if (count ==3  && a == 10 ) {
                return true;
            } 
            // if current character is a digit
            if (!isNaN(String(ch) * 1)) {
                temp = i;
                num = ch;
            }
}
 {return false;}
} 
console.log(QuestionsMarks(readline()));