let activity = document.querySelector("#activity");
let participants = document.querySelector("#participants");
let price = document.querySelector("#price");
let type = document.querySelector("#type");

const url = "https://www.boredapi.com/api/activity";

async function getdata () {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData)
    console.log(respData.activity);

    activity.innerHTML = respData.activity;
    participants.innerHTML = respData.participants;
    price.innerHTML = respData.price;
    type.innerHTML = respData.type;
}

getdata();

