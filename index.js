const review = document.getElementById('review');
const review_container = document.getElementById('review-container');
function addReview() {
  if (review.value.trim() === "") {
    alert("Please enter a review...");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = review.value;
  review_container.appendChild(li);
  const delbutton = document.createElement("button")
  delbutton.innerHTML = "Delete Review";
  review_container.appendChild(delbutton)
  review.value = "";
  delbutton.addEventListener("click",function(e){
    li.remove();
    delbutton.remove();
  })
}