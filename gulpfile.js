/**
 * @module gulpfile
 */

'use strict'

const gulp = require(`gulp`)
const ts = require(`gulp-typescript`)
const install = require(`gulp-install`)
const del = require(`del`)
const zip = require(`gulp-zip`)
const runSequence = require(`run-sequence`)
const exec = require(`child_process`).exec
const apiVersion = 'current' // use ALIAS (points to $latest VERSION)
const lambdaFunctionName = 'fn-cleanup-api'
const region = 'us-east-1:752727858468'

gulp.task(`clean:build`, () => {
  console.log(`Executing task clean:build`)
  return del(`build`)
})

gulp.task(`clean`, [`clean:build`, `clean:dist`])

const tsProject = ts.createProject(`tsconfig.json`)
gulp.task(`tsc`, () => {
  console.log(`Executing task tsc`)
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(`build`))
})

gulp.task(`config`, function () {
  console.log(`Executing task config`)
  return gulp.src([`config/*`, `!config/default.json`])
    .pipe(gulp.dest(`dist/config`))
})

gulp.task(`js`, () => {
  console.log(`Executing task js`)
  return gulp.src([`build/src/**/*`])
    .pipe(gulp.dest(`dist/`))
})

gulp.task(`install-dependencies`, function () {
  console.log(`Executing task install-dependencies`)
  return gulp.src([`./package.json`, `./npm-shrinkwrap.json`])
    .pipe(gulp.dest(`dist/`))
    .pipe(install({ production: true }))
})

gulp.task(`zip`, () => {
  console.log(`Executing task zip`)
  const timestamp = Date.now()
  return gulp.src([`dist/**/*`, `!dist/package.json`, `!dist/**/*.txt`])
    .pipe(zip(`${lambdaFunctionName}.zip`))
    .pipe(gulp.dest(`dist/`))
})

gulp.task(`update-lambda`, (cb) => {
  console.log(`Executing task update-lambda`)
  exec(`aws lambda update-function-code --function-name ${lambdaFunctionName} --zip-file fileb://dist/${lambdaFunctionName}.zip --publish`, (err, stdout, stderr) => {
    console.log(`lambda update-function-code response with: ${stdout}`)
    if (stderr) {
      console.log(`lambda update-function-code error with: ${stderr}`)
    }
    const config = JSON.parse(stdout)
    console.log(`new API version set to ${config.Version}`)
    cb(err)
  })
})

gulp.task(`ci`, (cb) => {
  console.log(`Executing task test & tslint`)
  exec(`npm run ci`, (err, stdout, stderr) => {
    if (stderr) {
      console.log(`error in tests with: ${stderr}`)
    }
    cb(err)
  })
})

gulp.task(`build`, (callback) => {
  return runSequence(
    [`ci`],
    [`clean:build`],
    [`tsc`],
    callback
  )
})

gulp.task(`package`, (callback) => {
  return runSequence(
    [`ci`],  // run all tests & tslint
    [`clean`], // remove previous builds
    [`tsc`],   // compile source into JS files on 'build' folder
    [`js`, `install-dependencies`, `config`], // move relevant JS files to 'dist' folder 
    [`zip`],  // compress into 'fn-cleanup-api.zip'
    callback
  )
})

gulp.task(`deploy`, (callback) => {
  return runSequence(
    [`package`],  // compress file to upload on AWS
    [`update-lambda`],  // deploy on AWS Lambda
    callback
  )
})

gulp.task(`makeDeployPrep`,(callback)=>{
  return runSequence(
    [`clean`],
    [`tsc`],   // compile source into JS files on 'build' folder
    [`js`, `install-dependencies`, `config`],
    callback
  )
})
