# Celigo-NodeJS-training1

## Exercise 1
Find a package to convert an XML to JSON. (see https://www.npmjs.com/package/xml-parser for example)
1. Write a wrapper over the package. Implement an XmlParser helper Object/function which exposes a methods to parse an XML and takes as an input options
2. Implement a method which takes in options file path and reads an XML file from filesystem and returns it’s JSON. The method should have error handling for non-existent file paths.

## Exercise 2
Use handlebars package
1. Explore handlebars as provided in the documentation. Play around with it here - http://tryhandlebarsjs.com/ 
2. Create handlebar template to generate a template as given under. Handlebar feeder Data : data fed to compile, Expected XML Template : output

## Exercise 3
request package (pre-requisite basic overview on request module and eventEmitter)
1. Use request package to download google.com homepage and save it into a file using fs package.
2. Use request package and event it emits to stream a file from web as a file in filesystem.

## Exercise 4
Async
1. For following list of images, download the images parallel and create compressed file and save in a folder file system. Before writing image in the FS print the index of the image in console
http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg
https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg
https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg
https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg
http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg
https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg
https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg
https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg
https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg
2. For the list of images above, make sure to not save more than 5 image in a folder, if there are more than 5 images create a new folder and saved images

## Exercise 5
Miscellaneous - check packages which shorten a url. (eg. bitly, rebrandly). Write a UrlShortner, which takes as input an array/file of URLs and saves a CSV of original and new shortened url. All the above links can be used, for the exercise.