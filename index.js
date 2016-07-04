#!/usr/bin/env node
/*
  ___|                       |                       ___|         | _)
   |       _` |   _` |   _` |  __|   _` |  |   |      |       _` |  |  |
   |      (   |  (   |  (   |  |    (   |  |   |      |      (   |  |  |
  \____| \__,_| \__, | \__,_| \__| \__,_| \__, |     \____| \__,_| _| _|
                |___/                     ____/
*/
var touch = require("touch")
var program = require('commander');
var moment = require('moment');
var fs = require('fs');
moment.locale('en');
var figlet = require('figlet');
program
  .option('-s, --string <string>', 'H*ck*d string')
  .option('-n, --name <name>', 'H*ck*d file name')
  .parse(process.argv);

if (program.string && program.name) {
  figlet(program.string, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      // data was here..
      var string =  '/* \n ' + data + '\n\n ' +moment().format('LLLL') + ' \n */';
      console.log(string);
      touch(program.name, {}, function(err) {
        console.log(err);
      });
      fs.appendFile(program.name, string, function (err) {
         if(err) { console.log(err); }
      });
  });
  console.log();
} else {
  console.log('Use like this: \n shell -s Hacked! -n test.txt');
}
