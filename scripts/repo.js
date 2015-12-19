var repo = {};
repo.all = [];

//looked at Natalie's code to help when I got stuck
repo.requestAll = function(callback) {
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/pnwlady/repos?sort=updated',
    headers: {
      Authorization: 'token' + githubToken
    }
  }).done(function(data) {
    console.log(data);
    callback(data);
  });
};
