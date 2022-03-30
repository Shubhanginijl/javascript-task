let element = document.getElementById("template");
let content = document.getElementById("content");
function fetchData() {
  window
    .fetch("./list.json")
    .then(data => {
      data
        .json()
        .then(value => {
          for (val of value) {
            element.innerHTML = ` ${element.innerHTML}<option value=${val}>${val}</option>`;
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

fetchData();
function show(ele) {
  window
    .fetch("./db.json")
    .then(value => {
      value.json().then(res => {
        var option = ele.options[ele.selectedIndex];
        let dataValue = [...res].filter(x => {
          let data = option.value;
          return x.ship_id === data;
        });
          console.log(dataValue);
          content.innerHTML = `<div>
          <p>${dataValue[0]["ship_name"]}</p>
          <p>${dataValue[0]["ship_type"]}</p>
          <p>${dataValue[0]['missions'][0]['name']}</p>
          <button>Load</button>
          </div>`;
      });
    })
    .catch(err => console.log(err));
}
