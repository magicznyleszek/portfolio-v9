module.exports = (grunt) ->

    # configuration
    grunt.initConfig(
        pkg: grunt.file.readJSON('package.json')
        compass:
            default:
                options:
                    config: '_assets/config.rb'
                    basePath: '_assets'
        watch:
            styles:
                files: ['_assets/styles/**/*.scss']
                tasks: ['compass']
    )

    # load tasks
    grunt.loadNpmTasks('grunt-contrib-compass')
    grunt.loadNpmTasks('grunt-contrib-watch')

    # register tasks
    grunt.registerTask('default', ['compass', 'watch'])
    grunt.registerTask('build', ['compass'])
