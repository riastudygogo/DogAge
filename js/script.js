// 載入上次儲存的生日與結果
window.onload = function () {
  const savedBirthday = localStorage.getItem("dogBirthday");
  const savedResult = localStorage.getItem("dogAgeResult");

  if (savedBirthday) {
    document.getElementById("birthday").value = savedBirthday;
  }

  if (savedResult) {
    document.getElementById("resultBox").innerHTML = savedResult;
  }
};

// 計算狗年齡
document.getElementById("calcBtn").addEventListener("click", function () {
  const birthday = document.getElementById("birthday").value;

  if (!birthday) {
    alert("請先選擇日期！");
    return;
  }

  // 儲存生日
  localStorage.setItem("dogBirthday", birthday);

  const birthDate = new Date(birthday);
  const today = new Date();
  const diffTime = today - birthDate;

  const dogYears = (diffTime / (1000 * 60 * 60 * 24 * 365)).toFixed(1);

  // ⭐ 使用獸醫換算公式（人類年齡=16 × ln(狗年齡)+31）
  const humanYears = (16 * Math.log(dogYears) + 31).toFixed(1);

  const resultHTML = `
    狗狗現在大約 <span class="result-number">${dogYears}</span> 歲狗年齡，<br>
    換算成人類年齡約為 <span class="result-number">${humanYears}</span> 歲（依照獸醫 ln 換算公式）。
  `;

  // 顯示與儲存結果
  document.getElementById("resultBox").innerHTML = resultHTML;
  localStorage.setItem("dogAgeResult", resultHTML);
});
