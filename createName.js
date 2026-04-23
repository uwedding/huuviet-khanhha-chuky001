function CreateName(Name) {
  var urlString = window.location.href;
  var url = new URL(urlString);
  var nameValue = url.searchParams.get("name");
  const newName = String(nameValue);

  if (nameValue !== null) {
    let str = decodeURIComponent(newName);
    if (str.includes("%20")) {
      let str = str.replace(/%20/g, " ");
      $(".class_tenKhachMoi").html(
        '<div class="ladi-paragraph ladi-transition">' + str + "</div>"
      );
    } else {
      $(".class_tenKhachMoi").html(
        '<div class="ladi-paragraph ladi-transition">' + str + "</div>"
      );
    }
  } else {
    $(".class_tenKhachMoi").html(
      '<div class="ladi-paragraph ladi-transition">' + Name + "</div>"
    );
  }
}

function CreateNameV2(Name, style) {
  var urlString = window.location.href;
  var url = new URL(urlString);
  var nameValue = url.searchParams.get("name") || url.searchParams.get("n");
  const newName = String(nameValue);

  if (nameValue !== null) {
    let str = decodeURIComponent(newName);
    if (str.includes("%20")) {
      let str = str.replace(/%20/g, " ");
      $(".class_tenKhachMoi").html(
        '<div class="ladi-paragraph ladi-transition"><span style="' +
        style +
        '">' +
        str +
        "</span></div>"
      );
    } else {
      $(".class_tenKhachMoi").html(
        '<div class="ladi-paragraph ladi-transition"  ><span style="' +
        style +
        '">' +
        str +
        "</span></div>"
      );
    }
  } else {
    $(".class_tenKhachMoi").html(
      '<div class="ladi-paragraph ladi-transition"  ><span style="' +
      style +
      '">' +
      Name +
      "</span></div>"
    );
  }
}

function CreateNameV3(name, classAdd, styleName, styleWrapName) {
  var urlString = window.location.href;
  var url = new URL(urlString);
  var nameValue = url.searchParams.get("name") || url.searchParams.get("n");
  const newName = String(nameValue);

  // let classAdd = ".class_tenKhachMoi"
  // let name = "Báº¡n vÃ  Gia ÄÃ¬nh"
  // let styleName = ""
  // let styleWrapName = "padding:4px 20px;border-radius:15px; border:1px solid #566954;"

  let setName = name;
  if (nameValue !== null) {
    let str = decodeURIComponent(newName);
    if (str.includes("%20")) {
      let str = str.replace(/%20/g, " ");
      setName = str;
    } else {
      setName = str;
    }
  } else {
    setName = name;
  }
  let tagStyle =
    `<h3 class="ladi-headline ladi-transition"><div style="` +
    styleWrapName +
    `"><span style="` +
    styleName +
    `">` +
    setName +
    `</span></div><br></h3>`;
  $(classAdd).html(tagStyle);
}

// CreateNameV3('Báº¡n ddd', ".class_tenKhachMoi", "display: block;  word-wrap: break-word; max-width: 100%;", "display: inline-block;  padding:2px 20px;border-radius:15px; border:1px solid #FFFFFF;")
