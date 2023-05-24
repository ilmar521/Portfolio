document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('loom-companion-mv3');
    if (element) {
      element.parentNode.removeChild(element);
    }
  });

// document.querySelectorAll('#carouselProject1.carousel-item img').forEach(function(element) {
//     element.addEventListener('click', function() {
//       var src = this.getAttribute('src');
//       document.getElementById('modalImage').setAttribute('src', src);
//     });
//   });

// document.querySelectorAll('#carouselProject2 .carousel-item img').forEach(function(element) {
//     element.addEventListener('click', function() {
//       var src = this.getAttribute('src');
//       document.getElementById('modalImage').setAttribute('src', src);
//     });
//   });
// document.querySelectorAll('#carouselProject3.carousel-item img').forEach(function(element) {
//     element.addEventListener('click', function() {
//       var src = this.getAttribute('src');
//       document.getElementById('modalImage').setAttribute('src', src);
//     });
//   });
// document.querySelectorAll('#carouselProject4.carousel-item img').forEach(function(element) {
//     element.addEventListener('click', function() {
//       var src = this.getAttribute('src');
//       document.getElementById('modalImage').setAttribute('src', src);
//     });
//   });
// document.querySelectorAll('#carouselProject5.carousel-item img').forEach(function(element) {
//     element.addEventListener('click', function() {
//       var src = this.getAttribute('src');
//       document.getElementById('modalImage').setAttribute('src', src);
//     });
//   });
// document.querySelectorAll('#carouselProject6.carousel-item img').forEach(function(element) {
//     element.addEventListener('click', function() {
//       var src = this.getAttribute('src');
//       document.getElementById('modalImage').setAttribute('src', src);
//     });
//   });

// document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
//     var modal = new bootstrap.Modal(document.getElementById('Project2'));
//     modal.show();
//   });