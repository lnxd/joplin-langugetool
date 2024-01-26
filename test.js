
let text = "This is a test with a miztake";

let url = "https://api.languagetoolplus.com/v2/check";
let url_2 = url.split("check")[0] + "words/add"
console.log(url_2);

// let data_obj = {
//     "text": text,
//     "language": "auto",
//     // "disabledRules": "",
//     // "motherTongue": "",
//     // "preferredVariants": "",
//     // "enabledCategories": "",
//     // "disabledCategories": "",
// }

let data_obj = {
    word: "mstake",
    username: "alberto.di.b.o@gmail.com",
    apiKey: "pit-CUO0ftJ4abbk"
}

let data = new FormData();
for (let key in data_obj) {
    console.log(key, data_obj[key]);
    data.append(key, data_obj[key]);
}
console.log(data);

let options = {
    method: 'POST',
    body: new URLSearchParams(data_obj),
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    // }
}


const response = fetch(url_2, options).then(response => response.json()).then(response => console.log(response));
