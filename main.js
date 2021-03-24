const elements = {
  textArea: document.querySelector("#text"),
  textSize: document.querySelector("#textSize"),
  textFont: document.querySelector("#textFont"),
  textColor: document.querySelector("#textColor"),
  backgroundColor: document.querySelector("#backgroundColor"),
  btnAlignLeft: document.querySelector("#btnAlignLeft"),
  btnAlignCenter: document.querySelector("#btnAlignCenter"),
  btnAlignRight: document.querySelector("#btnAlignRight"),
  btnAlignJustify: document.querySelector("#btnAlignJustify"),
  btnUnderLine: document.querySelector("#btnUnderLine"),
  btnItalic: document.querySelector("#btnItalic"),
  btnBold: document.querySelector("#btnBold"),
  btnPrint: document.querySelector("#printText"),
};
const fonts = ["Arial", "Times New Roman", "Poppins", "Lobster"];
const clearClassAlignBtns = () => {
  elements.btnAlignLeft.classList.remove("active");
  elements.btnAlignCenter.classList.remove("active");
  elements.btnAlignRight.classList.remove("active");
  elements.btnAlignJustify.classList.remove("active");
};
/* Yazı Boyutu */
let textSize = Number(elements.textSize.value);
elements.textArea.style.fontSize = `${textSize}pt`;
elements.textSize.addEventListener("change", (e) => {
  elements.textArea.style.fontSize = `${Number(elements.textSize.value)}pt`;
});
/* Yazı Fontu */
let textFont = fonts[parseInt(elements.textFont.value)];
elements.textFont.addEventListener("change", (e) => {
  textFont = fonts[parseInt(elements.textFont.value)];
  elements.textArea.style.fontFamily = textFont;
});
/* Yazı Rengi */
let textColor = elements.textColor.value;
elements.textArea.style.color = textColor;
elements.textColor.addEventListener("change", (e) => {
  textColor = elements.textColor.value;
  elements.textArea.style.color = textColor;
});
/* Arkaplan Rengi */
let backgroundColor = elements.backgroundColor.value;
elements.textArea.style.backgroundColor = backgroundColor;
elements.backgroundColor.addEventListener("change", (e) => {
  backgroundColor = elements.backgroundColor.value;
  elements.textArea.style.backgroundColor = backgroundColor;
});
/* Yazıyı Sola Hizalama */
elements.btnAlignLeft.addEventListener("click", (e) => {
  elements.textArea.style.textAlign = "left";
  clearClassAlignBtns();
  elements.btnAlignLeft.classList.add("active");
});
/* Yazıyı Sağa Hizalama */
elements.btnAlignRight.addEventListener("click", (e) => {
  elements.textArea.style.textAlign = "right";
  clearClassAlignBtns();
  elements.btnAlignRight.classList.add("active");
});
/* Yazıyı Ortaya Hizalama */
elements.btnAlignCenter.addEventListener("click", (e) => {
  elements.textArea.style.textAlign = "center";
  clearClassAlignBtns();
  elements.btnAlignCenter.classList.add("active");
});
/* Yazıyı Sığdır  */
elements.btnAlignJustify.addEventListener("click", (e) => {
  elements.textArea.style.textAlign = "justify";
  clearClassAlignBtns();
  elements.btnAlignJustify.classList.add("active");
});
/* Altı Çizili Yazı */
elements.btnUnderLine.addEventListener("click", (e) => {
  if (elements.textArea.style.textDecoration != "underline") {
    elements.textArea.style.textDecoration = "underline";
    elements.btnUnderLine.classList.add("active");
  } else {
    elements.textArea.style.textDecoration = "none";
    elements.btnUnderLine.classList.remove("active");
  }
});
/* Itlik Yazı */
elements.btnItalic.addEventListener("click", (e) => {
  if (elements.textArea.style.fontStyle != "italic") {
    elements.textArea.style.fontStyle = "italic";
    elements.btnItalic.classList.add("active");
  } else {
    elements.textArea.style.fontStyle = "unset";
    elements.btnItalic.classList.remove("active");
  }
});
/* Kalın Yazı */
elements.btnBold.addEventListener("click", (e) => {
  if (elements.textArea.style.fontWeight != "600") {
    elements.textArea.style.fontWeight = "600";
    elements.btnBold.classList.add("active");
  } else {
    elements.textArea.style.fontWeight = "400";
    elements.btnBold.classList.remove("active");
  }
});
/* Çıktı Al */
elements.btnPrint.addEventListener("click", (e) => {
  window.print();
});
