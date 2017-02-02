module.exports = function(grunt) {
    require('time-grunt')(grunt)
    require('load-grunt-config')(grunt)

    // configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        responsive_images: {
            default: {
                options: {
                    engine: 'gm',
                    newFilesOnly: true,
                    sizes: [
                        {
                            name: 'thumbnail',
                            rename: false,
                            width: 400,
                            height: 400,
                            aspectRatio: true,
                            upscale: true,
                            quality: 100
                        },
                        {
                            name: 'thumbnail-x2',
                            rename: false,
                            width: 800,
                            height: 800,
                            aspectRatio: true,
                            upscale: true,
                            quality: 100
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        cwd: '_assets/images/projects',
                        src: ['**/*.{jpg,gif,png}'],
                        custom_dest: 'public/images/projects/{%= path %}/{%= name %}/'
                    }
                ]
            }
        }
        copy: {
            images: {
                files: [
                    {
                        expand: true,
                        cwd: '_assets/images/projects',
                        src: ['**/*.{jpg,gif,png}'],
                        dest: 'public/images/projects/',
                        rename: function(dest, src) {
                            project = src.split('/')[0];
                            file = src.split('/')[1];
                            return dest + project + '/original/' + file;
                        }
                    }
                ]
            }
        }
        imagemin: {
            default: {
                options: {
                    optimizationLevel: 5
                }
                files: [
                    {
                        expand: true,
                        cwd: 'public/images/projects',
                        src: ['**/*.{jpg,gif,png}'],
                        dest: 'public/images/projects'
                    }
                ]
            }
        }
    })

    grunt.registerTask('build_images', [
        'responsive_images',
        'copy:images',
        'imagemin'
    ]);

    grunt.registerTask('build_images_from_scratch', [
        'clean:images',
        'build_images'
    ]);
};
