
let text = "This is a test with a miztake";

let url = "https://api.languagetoolplus.com/v2/check";
let data_obj = {
    "text": text,
    "language": "auto",
    // "disabledRules": "",
    // "motherTongue": "",
    // "preferredVariants": "",
    // "enabledCategories": "",
    // "disabledCategories": "",
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


const response = fetch(url, options).then(response => response.json()).then(response => console.log(response));
