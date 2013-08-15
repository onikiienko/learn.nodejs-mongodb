/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 7/25/13
 * Time: 6:45 PM
 * To change this template use File | Settings | File Templates.
 */
var fs = require("fs");

var titles = [];
var names = [];

function readData(file_handle) {

    fs.read(file_handle, 10000, null, 'ascii', function (err, data) {
        if (err) throw err;

        var myRe = /<title>(.*)<\/title>/;
        titles.push(myRe.exec(data)[1]);

        fs.close(file_handle);
    });
};

function openFiles(files) {

    for (value in files) {
        fs.open('./pages/' + files[value], "r", 0666, function (err, file_handle) {
            if (err) throw err;
            names.push(file_handle);
            readData(file_handle);
        });
    }
};

function readDir() {

    fs.readdir("./pages", function (err, files) {
        if (err) throw err;
        exports.files = files;
        openFiles(files);
    });
};

readDir();
exports.titles = titles;





