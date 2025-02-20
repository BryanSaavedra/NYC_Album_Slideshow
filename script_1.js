const imgUrlsArr = [
  "https://raw.githubusercontent.com/BryanSaavedra/NYC_Album_Slideshow/refs/heads/main/image1.jpg",
  "https://raw.githubusercontent.com/BryanSaavedra/NYC_Album_Slideshow/refs/heads/main/image2.jpg",
  "https://raw.githubusercontent.com/BryanSaavedra/NYC_Album_Slideshow/refs/heads/main/image3.jpg",
  "https://raw.githubusercontent.com/BryanSaavedra/NYC_Album_Slideshow/refs/heads/main/image4.jpg",
  "https://raw.githubusercontent.com/BryanSaavedra/NYC_Album_Slideshow/refs/heads/main/image5.jpg",
  "https://raw.githubusercontent.com/BryanSaavedra/NYC_Album_Slideshow/refs/heads/main/image6.jpg"
];
const articleContainer = document.getElementById("article-container");

articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;

let imgIndex = 0;

function previousImg() {
  if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
    imgIndex--;
  } else {
    imgIndex = imgUrlsArr.length - 1;
  }
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}

function nextImg() {
  if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}