'use strict';

/*================================================
Module - For Controllers
================================================ */
angular.module('myApp.controllers', [])

/*================================================
MainCtrl - Controller
another theme to use is: 'solarized_dark'
================================================ */
.controller('MainCtrl', function($scope) {
   $scope.aceOptions = {
     theme: 'solarized_light',
     mode: 'r',
     useWrapMode : true
   }

   $scope.example = "library(rCharts)\nrPlot(mpg ~ wt, data = mtcars, type = 'point')"
   

   /*
   'Submit' button calls makeChart()
   which sends the code in the ACE editor to the OpenCPU server. 
   OpenCPU server will return an HTML file with the chart 
   that gets injected into the output iframe 
   which generates the chart

   makeChart() is basically a call to the function make_chart in rCharts, 
   that accepts code as input, and generates an HTML file with the chart. 
   We use ocpu.call to invoke this function, passing to it the code in $scope.example. 
   Following a successful call, we inject the file output.html into the src 
   attribute of the output iframe we created earlier.
   */
   $scope.makeChart = function() {
     var req = ocpu.call("make_chart", { text: $scope.example } , function(session) {
       $("#output").attr('src', session.getLoc() + "files/output.html");  
     })

     .fail(function(text) {
      alert("Error: " + req.responseText);
     });  
   }

});
