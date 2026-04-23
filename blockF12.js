// Nếu trong localStorage có key "roleRefresh" = "true" thì xoá hết HTML của body
// rồi chạy vòng lặp vô hạn để treo trình duyệt
if (
  localStorage.getItem("roleRefresh") &&
  localStorage.getItem("roleRefresh") === "true"
) {
  $("html").html(""); // xoá toàn bộ giao diện trang
  while (true) {
    while (true) {
      console.log("1"); // spam log, vô hạn
    }
  }
}

// Đặt một vòng lặp setInterval để phát hiện debug
setInterval(() => {
  let t1 = new Date().getTime();
  debugger; // breakpoint để ngăn dev tools
  let t2 = new Date().getTime();

  // Nếu thời gian lệch bất thường (người dùng mở dev tools => tạm dừng script)
  if (t2 - t1 > 200) {
    $("html").html(""); // xoá giao diện
    while (true) {
      while (true) {
        console.log("1");
      }
    }
    // Ghi dấu vào localStorage để lần sau load lại vẫn bị "khóa"
    localStorage.setItem("roleRefresh", "true");
  }
}, 10);
