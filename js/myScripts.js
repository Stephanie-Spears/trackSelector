
// $(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $(".clickable").click(function() {
//     $(".track-details").toggle();
//   });
//
//   for (var i = 0; i < epicodusTracks.length; i++) {
//     for (var e = 0; e < epicodusTracks.tracks[e].length; e++) {}
//     $(".track-entry").append(formattedEntries);
//     var formattedEntries =
//     $("h3 .clickable").append(epicodusTracks[i].title) +
//     $(".track-details p").append(epicodusTracks[i].details) +
//     $(".track-details").append(epicodusTracks[i].link);
//   }
// });

var epicodusTracks = [
  {
    "title": "PHP/Drupal",
    "details": "PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.",
    "link" : "<a href='https://www.epicodus.com/php/'>Learn more from Epicodus</a>"
  },
  {
    "title": "Ruby/Rails",
    "details": "Ruby on Rails, or simply Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model view controller (MVC) framework, providing default structures for a database, a web service, and web pages.",
    "link" : "<a href='https://www.epicodus.com/ruby/'>Learn more from Epicodus</a>"
  },
  {
    "title": "Java/Android",
    "details": "Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets.",
    "link" : "<a href='https://www.epicodus.com/java/'>Learn more from Epicodus</a>"
  },
  {
    "title": "CSS/Design",
    "details": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. ... CSS is designed primarily to enable the separation of document content from document presentation, including aspects such as the layout, colors, and fonts.",
    "link" : "<a href='https://www.epicodus.com/css/'>Learn more from Epicodus</a>"
  },
  {
    "title": "C#/.NET",
    "details": "NET is a framework which provides 'ground' for applications which are created to use it. These application can be created using different programming languages: C# (very common), Visual Basic .NET, F#, Managed C++ and even directly in MSIL (=Microsoft Intermediate Language, its what .net applications are compiled to).",
    "link" : "<a href='https://www.epicodus.com/c-sharp/'>Learn more from Epicodus</a>"
  }
];

$(function() {
    $( "#titleButton" ).click(function() {
        $( "#trackDetails" ).toggle();
    });
});

$(function() {
    $( "#formButton" ).click(function() {
        $( "#blankForm" ).toggle();
    });
});


// $("div.my-menu").click(function() {
//   alert("Redirecting to Epicodus Site.");
// });
//
// $("div.take-survey").click(function() {
//   alert("Directing to track selector");
// });


//$ can replace 'jQuery' as a shortcut, and you can remove the (document).ready, too

// jQuery(document).ready(function() {
//   jQuery("h1").click(function() {
//     alert("This is a header.");
//   });
// });
