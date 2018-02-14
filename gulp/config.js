var layout = 'build/';

module.exports = {
    dest: './' + layout,
    browsersync: {
        server: {
            baseDir: './' + layout
        },
        tunnel: false,
        open: true,
        host: 'localhost',
        port: 3000
    },
    html: {
        src: './src/*.html',
        dest: layout
    },
    js: {
        srcInternal: './src/js/internal.js',
        srcExternal: './src/js/external.js',
        srcAll: './src/js/*.js',
        srcJquery: 'bower_components/jquery/dist/*.*', // jquery делаем отдельно чтобы подключить его в head
        srcHtml5shiv: 'bower_components/html5shiv/dist/*.*', // html5shiv делаем отдельно чтобы подключить его в head
        development: {
            dest: layout + 'js/',
            destJquery: layout + 'js/jquery/',
            destHtml5shiv: layout + 'js/html5shiv/'
        }
    },
    sass: {
        src: './src/sass/',
        partials: './src/sass/partials/',
        srcInternal: './src/sass/internal.scss',
        srcExternal: './src/sass/external.scss',
        options: {
            includePaths: ['./src/sass/'],
            sourceMap: true,
            errLogToConsole: true
        },
        development: {
            dest: layout + 'css/'
        }
    },
    autoprefixer: {
        browsers: [
            'last 10 versions',
            'IE 8',
            'IE 9',
            '> 3%'
        ]
    },
    images: {
        src: './src/img/**/*.*',
        dest: './' + layout + 'img',
        development: {
            dest: layout + 'img/'
        }
    },
    svg: {
        sprites: './src/img/svg/*.svg',
        dest: './' + layout + 'img'
    },
    templates: {
      path: './src/templates/'
    },
    imagemin: {
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    },
    fonts: {
        src: './src/fonts/**/*.*',
        development: {
            dest: layout + 'fonts/'
        }
    },
    watch: {
        html: './src/**/*.html',
        jsAll: './src/js/*.js',
        jsInternal: ['./src/js/partials/internal/*.js', './src/js/internal.js'],
        jsExternal: ['./src/js/partials/external/*.js', './src/js/external.js'],
        sassInternal: ['./src/sass/partials/internal/*.scss', './src/sass/internal.scss'],
        sassExternal: ['./src/sass/partials/external/*.scss', './src/sass/external.scss'],
        images: ['./src/img/**/*.*', '!./src/img/**/*.svg'],
        sprites: './src/img/**/*.svg',
        fonts: './src/fonts/**/*.*',
        svg: './src/img/svg/*.svg'
    },
    clean: {
        development: {
            dest: './' + layout
        }
    },
    permission: {
        minify: {
            html: false,
            css: true,
            js: true
        }
    },


    /**
     * Wrap gulp streams into fail-safe function for better error reporting
     * Usage:
     * gulp.task('js', config.wrapPipe(function(success, error) {
     *   return gulp.src('js/*.js')
     *      .pipe(js().on('error', error))
     *      .pipe(gulp.dest('app/css'));
     * }));
     */
    wrapPipe: function(taskFn) {
        return function(done) {
            var onSuccess = function() {
                done();
            };
            var onError = function(err) {
                done(err);
            };
            var outStream = taskFn(onSuccess, onError);
            if(outStream && typeof outStream.on === 'function') {
                outStream.on('end', onSuccess);
            }
        }
    }
};
