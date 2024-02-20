function openPage(pageName, elmnt, bgColor, txtColor) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color = ""; // Сброс цвета текста для всех элементов
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = bgColor;
    elmnt.style.color = txtColor; // Установка цвета текста для активного элемента
  }
  
  // Получить элемент с id="defaultOpen" и выполнить на нем клик
  document.getElementById("defaultOpen").click();




function openPage2(pageName2, elmnt2, bgColor2, txtColor2) {
  var i2, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i2 = 0; i2 < tabcontent2.length; i2++) {
    tabcontent2[i2].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablink2");
  for (i2 = 0; i2 < tablinks2.length; i2++) {
    tablinks2[i2].style.backgroundColor = "";
    tablinks2[i2].style.color = ""; // Сброс цвета текста для всех элементов
  }
  document.getElementById(pageName2).style.display = "grid";
  elmnt2.style.backgroundColor = bgColor2;
  elmnt2.style.color = txtColor2; // Установка цвета текста для активного элемента
}
  
// Получить элемент с id="defaultOpen" и выполнить на нем клик
document.getElementById("defaultOpen2").click();


  