module.exports = function(grunt) {
    grunt.initConfig({
        replace: {
            build: {
                options: {
                    patterns: [
                        {
                            match: "replaceme",
                            replacement: "./css/main.css"
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