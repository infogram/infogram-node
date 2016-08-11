var InfogramAPI = require('../');

var infogram = new InfogramAPI('apiKey', 'apiSecret');

var params = {
  theme_id: 308,
  content: [
    {
      "type": "h1",
      "text": "Testing API client"
    },
    {
      "type": "body",
      "text": "Lorem ipsum dolor sit amet..."
    },
    {
      "type": "quote",
      "text": "God does not play dice",
      "author": "Albert Einstein"
    },
    {
      "type": "chart",
      "chart_type": "bar",
      "data": [
        [
          ["apples", "today", "yesterday", "d. bef. yesterday"],
          ["John", 4, 6, 7],
          ["Peter", 1, 3, 9],
          ["George", 4, 4, 3]
        ]
      ],
      "settings": {
        "width": 0.5,
        "height": 300
      }
    },
    {
      "type": "map",
      "territory": "world",
      "data": [
        {
          "title": "Japan",
          "value": 126434964,
          "label": "Japan",
          "group": "A",
          "color": "#0000FF"
        },
        {
          "title": "United States",
          "value": 318968000,
          "label": "USA",
          "group": "A",
          "color": "#FF0000"
        }
      ]
    }
  ]
}

infogram.createProject(params).then(function(data) {
  console.log(data);
}, function(err) {
  console.error(err);
});

// infogram.getProject(project_id).then(function(data) {
//   console.log(data);
// }, function(err) {
//   console.error(err);
// });

// infogram.getProject(project_id, { format: 'png' }).then(function(data) {
//   fs.writeFile('test.png', data, function(err) {
//     if(err) {
//       return console.log(err);
//     }

//     console.log('The file was saved!');
//   });
// }, function(err) {
//   console.error(err);
// });

// infogram.deleteProject(project_id).then(function(data) {
//   console.log(data);
// }, function(err) {
//   console.error(err);
// });

// infogram.updateProject(project_id, params).then(function(data) {
//   console.log(data);
// }, function(err) {
//   console.error(err);
// });

// infogram.getLibrary().then(function(data) {
//   console.log(data);
// }, function(err) {
//   console.error(err);
// });

// infogram.getUserLibrary('maksim_berjoza5').then(function(data) {
//   console.log(data);
// }, function(err) {
//   console.error(err);
// });

// infogram.getThemes().then(function(data) {
//   console.log(data);
// }, function(err) {
//   console.error(err);
// });
