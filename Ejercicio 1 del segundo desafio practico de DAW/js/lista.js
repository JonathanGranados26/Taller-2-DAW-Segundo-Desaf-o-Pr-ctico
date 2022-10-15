$(function() {
    var peliculas = [];
 
    $.getJSON('../code.json', function(data) {
        $.each(data.peliculas, function(i, f) {
           var tblRow = "<tr>" +
           "<td>" + f.Nombre + "</td>"
            +
            "<td>" + f.Director + "</td>" 
            + "<td>" + f.Clasificacion + "</td>" 
            + "<td>" + f.Duracion + "</td>" 
            + "<td>" + f.butacas + "</td>"  
            + "<td>" + f.Horarios + "</td>" 
            + "</tr>"
        $(tblRow).appendTo("#datos tbody"); 

      });
 
    });
 
 });