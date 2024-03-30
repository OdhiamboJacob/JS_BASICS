//playing with images
/*const images = document.querySelector('img')

images.onclick = () =>{
    const mySrc =images.getAttribute('src');
    if(mySrc ==="../Media/Hydrological.jpg") {
        images.setAttribute("src","../Media/TiltingLevel1.jpg");
    }
    if(mySrc ==="../Media/Logo.jpg"){
        images.setAttribute("src","../Media/TL1.jpg");
    }
    if(mySrc ==="../Media/TiltingLevel"){
        images.setAttribute("src","../Media/TL2.jpg");
    }
    if(mySrc ==="../Media/TL2.jpg"){
        images.setAttribute("src","../Media/Hydrological.jpg");
    }

}*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "../Media/Logo.jpg") {
    myImage.setAttribute("src", "../Media/TL2.jpg");
  }else {
    myImage.setAttribute("src", "../Media/Logo.jpg");
  }
}
