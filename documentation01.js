/*
buatlah sebuah fungsi untuk mengubah urutan sebuah text 
dengan cara mengubah urutan dengan aturan:
1. text tersebut dibelah menjadi 2 bagian dari tengah
3. jika panjang text tersebut adalah ganjil, maka 
huruf tengah dibiarkan
2. bagian depan diurutkan terbalik, dan bagian belakang 
dibiarkan tetap
​*/

// contoh :
// genap
// text = "asikasik"
// step 1 =  "asik"|"asik"
// step 2 = "kisa" | "asik"
// step 3 = "kisaasik"
// ​
// ​
// ganjil
// text = "pratama"
// step 1 =  "pra"|"t"|"ama"
// step 2 = "arp" |"t"|"ama"
// step 3 = "arptama"

function change(text) {
    let complete = '';
    let middle = '';
    console.log(text)
    if (text.length % 2 === 1) {
       middle = (text.length - 1) / 2;
       console.log(text[middle])
       for (let i = middle - 1;i>=0;i--) complete += text[i];
    } else {
        middle = (text.length / 2) - 1;
        console.log(text[middle]);
        for (let i = middle;i>=0;i--) complete += text[i]
    }
    for (let i = middle + 1;i<text.length;i++) complete += text[i];
    console.log(complete)
}

change('yusril') 

// ===============================================================================================

/*
buatlah sebuah fungsi untuk melakukan generate password dari sebuah text
dengan ketentuan sebagai berikut :
1 jika bertemu dengan karakter kecil maka diubah menjadi karakter besar
2 jika bertemu dengan karakter besar maka diubah menjadi karakter kecil
3 semua huruf vokal (a, i, u, e, o) diubah menjadi huruf v kecil
4 kemudian semua data tersebut dibalik
​
contoh :
text : AfistaPratama
step 1 : AFISTAPRATAMA
step 2 : aFISTApRATAMA
step 2 : vFvSTvpRvTvMv
step 3 : vMvTvRpvTSvFv
*/

function generatePassword(pass){

    function cekVokal(string){
        let vokal = ["a", "i", "u", "e", "o"]
        let str = string.toLowerCase()
        for(let i = 0 ; i < vokal.length;i++){
            if(str === vokal[i] ){
                return "v"
            }
        }
        return string
    }

    let result = "";
    for(let i = pass.length - 1 ; i>= 0; i-- ){
        if(pass[i]===pass[i].toUpperCase()){
            result += cekVokal(pass[i].toLowerCase())
        }else{
            result += cekVokal(pass[i].toUpperCase())
        }
    }
    console.log(result)
}

generatePassword("AfistaPratama")

//==============================================================================

/*
buatlah sebuah fungsi untuk menampilkan domain dari sebuah email emnggunakan sintaks looping
*/
​
​
function getDomain(email) {
   
    let hasil = "" 
    let kondisi = false
    
   for( let i = 0 ; i < email.length; i++){
       if(email[i] === '@'){
           kondisi = true 
           continue
       }else if(email[i]==="."){
           break 
       }

       if(kondisi){
        hasil += email[i]
       }
   }

   return hasil
}

console.log(getDomain("dedy@gmail.com"))
console.log(getDomain("eddy@yahoo.com"))
console.log(getDomain("eddy@workspace.com"))
console.log(getDomain("eddy@impactbyte.com"))
​

//===============================================================================

/*
buatlah sebuah fungsi untuk mengembalikan string untuk mengubah kata awal menjadi huruf besar
*/
​
function changeText(text) {
    let nama = "";

    for( let i=0; i < text.length ;i++){
        if(i == 0 || text[i - 1] == " "){
            nama += text[i].toUpperCase()    
        }else{
            nama += text[i]
        }
    }

    return nama;
}

console.log(changeText("selamat pagi dunia")) // Selamat Pagi Dunia
console.log(changeText("hari ini sangat cerah")) // Hari Ini Sangat Cerah
console.log(changeText("Indonesia adalah negaraku")) // Indonesia Adalah Negaraku
console.log(changeText("Haloo")) // Haloo
​