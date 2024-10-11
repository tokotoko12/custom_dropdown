const dropdownSelected = document.getElementById("dropdownSelected");
const dropdownList = document.getElementById("dropdownList");
const dropdownItems = document.querySelectorAll(".dropdown-item");

// ドロップダウンを開く/閉じる
dropdownSelected.addEventListener("click", () => {
    dropdownList.style.display = dropdownList.style.display === "block" ? "none" : "block";
});

// アイテムがクリックされたときの処理
dropdownItems.forEach(item => {
    console.log(item);
    item.addEventListener("click", () => {
        dropdownSelected.textContent = item.getAttribute("data-value");
        dropdownList.style.display = "none"; // ドロップダウンを閉じる
    });
});

// ドキュメント全体のクリックでドロップダウンを閉じる
document.addEventListener("click", (event) => {
    if (!dropdownSelected.contains(event.target) && !dropdownList.contains(event.target)) {
        dropdownList.style.display = "none";
    }
});
