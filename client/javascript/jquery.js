$(function() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/Goals',
    jsonpCallback: 'JSONCALLBACK', //specify callback name
    contentType: 'application/json',
    dataType: 'jsonp', //specify jsonp
    success: function(response) {
      var data = response.results;
      for (var i=0; i<data.length; i++) {
        var row = "<tr>";
      
        row += "<td>";
        row += data[i].title;
        row += "</td>";
        row += "<td>";
        row += data[i].description;
        row += "</td>";
        
        row += "</tr>";
    
        $('#output tbody').append(row);
      }
    },
    error: function(e) {
      console.log('error', e);
    }
  });
});