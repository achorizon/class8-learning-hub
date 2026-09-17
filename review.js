import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

import { db } from "./firebase-review.js";

const reviewForm = document.getElementById("reviewForm");
const nameInput = document.getElementById("reviewName");
const commentInput = document.getElementById("reviewComment");
const ratingInput = document.getElementById("reviewRating");

const totalReviews = document.getElementById("totalReviews");
const averageRating = document.getElementById("averageRating");
const visitorReviews = document.getElementById("visitorReviews");

let selectedRating = 0;

const stars = document.querySelectorAll(".rating-star");

stars.forEach(function(star) {
  star.addEventListener("click", function() {
    selectedRating = Number(star.dataset.rating);
    ratingInput.value = selectedRating;

    stars.forEach(function(item) {
      if (Number(item.dataset.rating) <= selectedRating) {
        item.textContent = "★";
        item.classList.add("selected");
      } else {
        item.textContent = "☆";
        item.classList.remove("selected");
      }
    });
  });
});

async function loadReviews() {
  try {
    const reviewsRef = collection(db, "reviews");

    const reviewsQuery = query(
      reviewsRef,
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(reviewsQuery);

    totalReviews.textContent = snapshot.size;

    if (snapshot.size === 0) {
      averageRating.textContent = "0.0/5";
      visitorReviews.innerHTML =
        "<p>No reviews yet. Be the first visitor to review!</p>";
      return;
    }

    let totalRating = 0;

    visitorReviews.innerHTML = "";

    snapshot.forEach(function(doc) {
      const review = doc.data();

      totalRating += Number(review.rating);

      const reviewBox = document.createElement("div");
      reviewBox.className = "visitor-review";

      const starsBox = document.createElement("div");
      starsBox.className = "visitor-review-stars";
      starsBox.textContent = "★".repeat(review.rating) +
        "☆".repeat(5 - review.rating);

      const nameBox = document.createElement("h3");
      nameBox.textContent = review.name;

      const commentBox = document.createElement("p");
      commentBox.textContent = review.comment;

      reviewBox.appendChild(starsBox);
      reviewBox.appendChild(nameBox);
      reviewBox.appendChild(commentBox);

      visitorReviews.appendChild(reviewBox);
    });

    const average = totalRating / snapshot.size;

    averageRating.textContent = average.toFixed(1) + "/5";

  } catch (error) {
    console.error("Error loading reviews:", error);

    visitorReviews.innerHTML =
      "<p>Reviews could not be loaded.</p>";
  }
}

reviewForm.addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();
  const rating = Number(ratingInput.value);

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  if (rating < 1 || rating > 5) {
    alert("Please select a star rating.");
    return;
  }

  if (comment === "") {
    alert("Please write your review.");
    return;
  }

  const submitButton = reviewForm.querySelector("button[type='submit']");

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    await addDoc(collection(db, "reviews"), {
      name: name,
      rating: rating,
      comment: comment,
      createdAt: serverTimestamp()
    });

    alert("Thank you! Your review has been submitted.");

    reviewForm.reset();

    selectedRating = 0;
    ratingInput.value = "";

    stars.forEach(function(star) {
      star.textContent = "☆";
      star.classList.remove("selected");
    });

    await loadReviews();

  } catch (error) {
    console.error("Error submitting review:", error);

    alert("Sorry, your review could not be submitted.");
  }

  submitButton.disabled = false;
  submitButton.textContent = "Submit Review";
});

loadReviews();
