 document
      .getElementsByClassName("fa fa-bars text-light mt-1")[0]
      .addEventListener(
        "click",
        (asideOpen = () => {
          document.getElementById("topbar").style.height = "100%";
          document.getElementById("topbar_content").style.display = "block";
        })
      );
    document
      .getElementsByClassName("fa fa-times text-light")[0]
      .addEventListener(
        "click",
        (asideClose = () => {
          document.getElementById("topbar").style.height = "0%";
          document.getElementById("topbar_content").style.display = "none";
        })
      );