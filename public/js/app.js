'use strict';

/*================================================
Module - Main App Module
================================================ */
angular.module('myApp', ['ui.ace', 'myApp.controllers'])


/*
Use ocpu.seturl to allow cross-domain requests to the OpenCPU server, 
since the function generating the chart is not on a public OpenCPU server
*/
ocpu.seturl("http://ramnathv.ocpu.io/rCharts/R");
