
    const handleInputFileButton = () => {
      document.getElementById("infile").click();
    };
    let dis_arr = ["blury", "sepia", "invert", "contrast", "brighter", "satur"];
    const remove_input_att = (arr) => {
      arr.forEach((element) => {
        document.getElementById(element).removeAttribute("disabled");
      });
    };
    const handleChangeData = () => {
      document.getElementById("blur_value").innerHTML = blur + "px";

      document.getElementById("sepia_value").innerHTML = sepia_DATA + "%";
      document.getElementById("invert_value").innerHTML = invert_DATA + "%";
      document.getElementById("contrast_value").innerHTML = contrast_DATA + "%";
      document.getElementById("brightness_value").innerHTML =
        brightness_DATA + "%";
      document.getElementById("saturation_value").innerHTML =
        staurated_DATA + "%";
    };
    let window_height;
    let window_width;
    let img_height;
    let img_width;
    let canvas = document.getElementById("c");
    let ctx = canvas.getContext("2d");
    let imger = new Image();
    imger.addEventListener(
      "load",
      function (e) {
        window_height = screen.height;
        window_width = screen.width;
        if (e.target.height <= 810) {
          img.src = imger.src;
          canvas.height = e.target.height;
          canvas.width = e.target.width;
          img_height = e.target.height;
          img_width = e.target.width;
          ctx.filter = "none";
          ctx.drawImage(imger, 0, 0, img_width, img_height);
          window.URL.revokeObjectURL(this.src);

          remove_input_att(dis_arr);
        } else {
          alert(
            `image height exceed it shoud me under 800 we are redirecting you to image resizer`
          );
          window.location.href = "resize.html";
        }
      },
      false
    );
    let grayscale_DATA = 0;
    let blur = 0;
    let brightness_DATA = 100;
    let sepia_DATA = 0;
    let invert_DATA = 0;
    let staurated_DATA = 100;
    let contrast_DATA = 100;
    let img;
    const bluring = () => {
      blur = document.getElementById("blury").value;
      img.style.cssText =
        "-webkit-filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";
      img.style.cssText =
        "filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";

      ctx.filter =
        "sepia(" +
        sepia_DATA +
        "%) saturate(" +
        staurated_DATA +
        "%) blur(" +
        blur +
        "px) brightness(" +
        brightness_DATA +
        "%) invert(" +
        invert_DATA +
        "%) contrast(" +
        contrast_DATA +
        "%)";
      ctx.drawImage(imger, 0, 0, img_width, img_height);
      handleChangeData();
    };
    const sepia = () => {
      sepia_DATA = document.getElementById("sepia").value;
      img.style.cssText =
        "-webkit-filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";
      img.style.cssText =
        "filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";

      ctx.filter =
        "sepia(" +
        sepia_DATA +
        "%) saturate(" +
        staurated_DATA +
        "%) blur(" +
        blur +
        "px) brightness(" +
        brightness_DATA +
        "%) invert(" +
        invert_DATA +
        "%) contrast(" +
        contrast_DATA +
        "%)";
      ctx.drawImage(imger, 0, 0, img_width, img_height);
      handleChangeData();
    };
    const invert = () => {
      invert_DATA = document.getElementById("invert").value;
      img.style.cssText =
        "-webkit-filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";
      img.style.cssText =
        "filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";

      ctx.filter =
        "sepia(" +
        sepia_DATA +
        "%) saturate(" +
        staurated_DATA +
        "%) blur(" +
        blur +
        "px) brightness(" +
        brightness_DATA +
        "%) invert(" +
        invert_DATA +
        "%) contrast(" +
        contrast_DATA +
        "%)";
      ctx.drawImage(imger, 0, 0, img_width, img_height);
      handleChangeData();
    };
    const contrast = () => {
      contrast_DATA = document.getElementById("contrast").value;
      img.style.cssText =
        "-webkit-filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";
      img.style.cssText =
        "filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";

      ctx.filter =
        "sepia(" +
        sepia_DATA +
        "%) saturate(" +
        staurated_DATA +
        "%) blur(" +
        blur +
        "px) brightness(" +
        brightness_DATA +
        "%) invert(" +
        invert_DATA +
        "%) contrast(" +
        contrast_DATA +
        "%)";
      ctx.drawImage(imger, 0, 0, img_width, img_height);
      handleChangeData();
    };
    const brighting = () => {
      brightness_DATA = document.getElementById("brighter").value;
      img.style.cssText =
        "-webkit-filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";
      img.style.cssText =
        "filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";

      ctx.filter =
        "sepia(" +
        sepia_DATA +
        "%) saturate(" +
        staurated_DATA +
        "%) blur(" +
        blur +
        "px) brightness(" +
        brightness_DATA +
        "%) invert(" +
        invert_DATA +
        "%) contrast(" +
        contrast_DATA +
        "%)";
      ctx.drawImage(imger, 0, 0, img_width, img_height);
      handleChangeData();
    };
    const satr = () => {
      staurated_DATA = document.getElementById("satur").value;
      img.style.cssText =
        "-webkit-filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";
      img.style.cssText =
        "filter: saturate(" +
        staurated_DATA +
        "%) brightness(" +
        brightness_DATA +
        "%) grayscale(" +
        grayscale_DATA +
        "%) sepia(" +
        sepia_DATA +
        "%) invert(" +
        invert_DATA +
        "%) blur(" +
        blur +
        "px) contrast(" +
        contrast_DATA +
        "%);";

      ctx.filter =
        "sepia(" +
        sepia_DATA +
        "%) saturate(" +
        staurated_DATA +
        "%) blur(" +
        blur +
        "px) brightness(" +
        brightness_DATA +
        "%) invert(" +
        invert_DATA +
        "%) contrast(" +
        contrast_DATA +
        "%)";
      ctx.drawImage(imger, 0, 0, img_width, img_height);
      handleChangeData();
    };

    function handleFiles(files) {
      if (files.length) {
        imger.src = window.URL.createObjectURL(files[0]);
        img = document.getElementById("demo_img");
        document.getElementById("download").style = "pointer-events: auto";
      }
    }
    //Download button
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
 