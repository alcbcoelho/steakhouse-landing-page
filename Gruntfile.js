module.exports = function(grunt) {
    grunt.initConfig({
        replace: {
            build: {
                options: {
                    patterns: [
                        {
                            match: "CSSDIR",
                            replacement: "./css/main.css"
                        },
                        {
                            match: /IMGDIR/g,
                            replacement: "./images"
                        }
                    ]
                },
                files: {
                    "./public/index.html" : "./src/index.html"
                }
            }
        },
        htmlmin: {
            build: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    "./public/index.html" : "./public/index.html"
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-replace");

    grunt.registerTask("default", ["replace", "htmlmin"]);
}