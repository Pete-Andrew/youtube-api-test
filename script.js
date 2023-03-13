$(document).ready(function () {
  var API_KEY = "AIzaSyCmhzO1q2A0IGFd_sNNt10YNyKjZ7d08as";
//   var video = "";

  $("#form").submit(function (event) {
    event.preventDefault();
    alert("form is submitted");

    var search = $("#search").val() + " movie trailer";
    console.log(search);

    videoSearch(API_KEY, search, 1);
  });
});

function videoSearch(API_KEY, search, maxResults) {
  $("#videos").empty();
  $.get(
    "https://www.googleapis.com/youtube/v3/search?key=" +
      API_KEY +
      "&type=video&part=snippet&maxResults=" +
      maxResults +
      "&q=" +
      search,

    function (data) {
      console.log(data);

      data.items.forEach((item) => {
        video = `
            
            <iframe width="420" height=315" src="https://youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            
            
            `;

        $("#videos").append(video);
      });
    }
  );
}

// https://www.youtube.com/watch?v=EAyo3_zJj5c

// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCmhzO1q2A0IGFd_sNNt10YNyKjZ7d08as&type=video&q=ajax

// AIzaSyCmhzO1q2A0IGFd_sNNt10YNyKjZ7d08as
