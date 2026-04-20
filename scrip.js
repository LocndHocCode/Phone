const PRICE_LIST = {
    "iphone 11 64": 5200000,
    "iphone 12 128": 8300000,
    "iphone 13 128": 10200000,
    "iphone 14 128": 13200000,
};

function calculate() {
    let model = document.getElementById("model").value;
    let battery = parseInt(document.getElementById("battery").value);
    let damage = document.getElementById("damage").value;
    let repair = document.getElementById("repair").value;

    let price = PRICE_LIST[model] || 0;

    // 🔋 PIN
    if (battery < 80) price -= 1000000;
    else if (battery < 85) price -= 600000;
    else if (battery < 90) price -= 300000;

    // 📸 NGOẠI HÌNH
    const damageMap = {
        "đẹp": 0,
        "nhẹ": -200000,
        "viền": -500000,
        "nặng": -1500000
    };
    price += damageMap[damage];

    // 🔧 SỬA
    const repairMap = {
        "zin": 0,
        "pin": -500000,
        "màn": -1000000,
        "main": -3000000
    };
    price += repairMap[repair];

    // 📲 HIỂN THỊ
    document.getElementById("result").innerHTML = `
        <h2>💰 Giá thu: ${price.toLocaleString()} VNĐ</h2>
        <p>${model}</p>
        <a href="https://zalo.me/09xxxxxxxx?text=Tôi muốn bán ${model}">
            👉 Chốt qua Zalo
        </a>
    `;
}