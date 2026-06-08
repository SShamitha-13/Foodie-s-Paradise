// 🔹 Variables
let total = 0;
let count = 0;

// 🔹 Add item
function addToBill(item, price) {
    let container = document.getElementById("billItems");

    let span = document.createElement("span");
    span.className = "item";
    span.innerText = item + " ₹" + price;

    container.appendChild(span);

    total += price;
    count++;

    document.getElementById("total").innerText = "Total: ₹" + total;
}

// 🔹 Generate bill
function generateBill() {
    if (count === 0) {
        alert("Please select items!");
        return;
    }

    let gst = total * 0.05;
    let sgst = total * 0.05;
    let final = total + gst + sgst;

    document.getElementById("finalBill").innerText =
        "Items: " + count +
        " | GST: ₹" + gst.toFixed(2) +
        " | SGST: ₹" + sgst.toFixed(2) +
        " | Final: ₹" + final.toFixed(2);

    document.getElementById("paymentOptions").style.display = "block";
}

