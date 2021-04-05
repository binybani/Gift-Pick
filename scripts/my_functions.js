
function sayHello(){
    firebase.auth().onAuthStateChanged(function(somebody){
        if(somebody){
            //console.log(somebody.uid)
            db.collection("users")
            .doc(somebody.uid)
            .get()          //READ!!
            .then(function(doc){
                //console.log(doc.data().name);
                var n = doc.data().name;
                $("#name-goes-here").text(n);
            })

        }
    })
}
sayHello();

function writeContact() {
    var contactsRef = db.collection("contacts");
    contactsRef.add({
        code: "FRD",
        frstname: "Yubin",
		lastname: "Kim",             
        cellNum: "123-456-789",
        email: "yubin@comp1800.com",
        picture: "peson1.jpg"
    });
    contactsRef.add({
        code: "FRD",
        frstname: "Jenny",
		lastname: "Yuon",             
        cellNum: "123-456-789",
        email: "jenny@comp1800.com",
        picture: "peson2.jpg"
    });
    contactsRef.add({
        code: "COWK",
        frstname: "Dan",
		lastname: "Choi",             
        cellNum: "123-456-789",
        email: "dan@comp1800.com",
        picture: "peson3.jpg"
    });
    contactsRef.add({
        code: "COWK",
        frstname: "Jhon",
		lastname: "Park",             
        cellNum: "123-456-789",
        email: "jhon@comp1800.com",
        picture: "peson4.jpg"
    });
    contactsRef.add({
        code: "FAM",
        frstname: "Younhee",
		lastname: "Kim",             
        cellNum: "123-456-789",
        email: "younhee@comp1800.com",
        picture: "peson5.jpg"
    });
    contactsRef.add({
        code: "FAM",
        frstname: "Changzhong",
		lastname: "Kim",             
        cellNum: "123-456-789",
        email: "changzhong@comp1800.com",
        picture: "peson6.jpg"
    });
    contactsRef.add({
        code: "FAM",
        frstname: "Yongjin",
		lastname: "Kim",             
        cellNum: "123-456-789",
        email: "yongjin@comp1800.com",
        picture: "peson7.jpg"
    });
    contactsRef.add({
        code: "FAM",
        frstname: "Junga",
		lastname: "Yu",             
        cellNum: "123-456-789",
        email: "junga@comp1800.com",
        picture: "peson8.jpg"
    });
}
//writeContacts();
