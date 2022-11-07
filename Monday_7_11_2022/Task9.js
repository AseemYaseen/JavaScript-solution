function canIGetADrivingLicense (age) {

    if (age >= 20){

        console.log(`yes you can`)
    }
    else if (age < 20) {


        x = 20-age
        console.log(`please come back after ${x} years to get one`)
    }

}
canIGetADrivingLicense(prompt())

