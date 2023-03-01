 let img_height;
    let img_width;
    let resize_height_DATA;
    let resize_width_DATA;
    let canvas = document.getElementById("c");
    let ctx = canvas.getContext("2d");
    let imger = new Image();
    function handleFiles(files) {
      if (files.length) {
        imger.src = window.URL.createObjectURL(files[0]);
        img = document.getElementById("demo_img");
        img.src = imger.src;
      }
    }
    const handleInputFileButton = () => {
      document.getElementById("infile").click();
    };

    imger.addEventListener(
      "load",
      function (e) {
        img_height = e.target.height;
        img_width = e.target.width;
        canvas.height = e.target.height;
        canvas.width = e.target.width;
        document.getElementById("height").value = img_height;
        document.getElementById("width").value = img_width;
        window.URL.revokeObjectURL(this.src);
      },
      false
    );

    let download = document.getElementById("download");
    download.addEventListener(
      "click",
      function (ev) {
        let fileName = prompt("Name your file");
        if (fileName.length == 0) {
          fileName = "img";
        }

        download.href = canvas.toDataURL();
        download.download = fileName + ".png";
      },
      false
    );
    const resizeImage = () => {
      resize_height_DATA = document.getElementById("height").value;
      resize_width_DATA = document.getElementById("width").value;
      document
        .getElementById("demo_img")
        .setAttribute("height", resize_height_DATA);
      document
        .getElementById("demo_img")
        .setAttribute("width", resize_width_DATA);
      canvas.height = resize_height_DATA;
      canvas.width = resize_width_DATA;

      ctx.drawImage(imger, 0, 0, resize_width_DATA, resize_height_DATA);

      window.URL.revokeObjectURL(this.src);
      download.style = "pointer-events:auto";
    };