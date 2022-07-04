
// Creating a object
let nauman = {
    age: 20,
    coronaCertificate: true,
    passport: true,
    laguage: 40,   //laguage weight

}
let userName;
userName = true;
if (userName) {
    if (nauman) {
        if (nauman.age >= '18') {
            if (nauman.coronaCertificate == true) {
                if (nauman.passport == true) {
                    if (nauman.laguage <= 45) {
                        console.log('The ticket has been issued.');
                    }
                }
            }
        }
    }
    else {
        console.log('You have no data of this user on the airlaine database.');
    }
}