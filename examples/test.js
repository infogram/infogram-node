var InfogramAPI = require('../');

var infogram = new InfogramAPI({
  apiKey: 'xxx',
  apiSecret: 'xxx'
});

var project_id = 'projectid';

var params = {
  theme_id: 308,
  content: [
    {
      type: 'h2',
      text: 'Node you are awesome'
    },
    {
      type: 'chart',
      chart_type: 'bar',
      data: [
        ['apples', 'today', 'yesterday', 'd. bef. yesterday'],
        ['John', 4, 6, 7],
        ['Peter', 1, 3, 9],
        ['George', 4, 4, 3]
      ]
    },
  ]
}

// infogram.createProject(params).then(function(data) {
//   console.log(data);
// }, function(err) {
//   console.error(err);
// });

// infogram.getProject(project_id).then(function(data) {
//   console.log(data);
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
