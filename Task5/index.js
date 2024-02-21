document.addEventListener("DOMContentLoaded", function() {
    var changeImage = [
        "url('photo/image1.jpg')",
         "url('photo/image2.jpg')",
         "url('photo/image3.jpg')",
    ]; 
    var currentIndex = 0;
    document.body.style.backgroundImage = changeImage[currentIndex];
    function changeBackgroundImage() { 
      currentIndex = (currentIndex + 1) % changeImage.length;
      console.log(currentIndex);
      document.body.style.backgroundImage = changeImage[currentIndex];
    }
    const intervalTime = 2000; 
    setInterval(changeBackgroundImage, intervalTime);
  });