var posts = [
  {id: 0 , title: 'title0' , body: 'body0'},
  {id: 1 , title: 'title1' , body: 'body1'},
  {id: 2 , title: 'title2' , body: 'body2'},
  {id: 3 , title: 'title3' , body: 'body3'},
];
var getNextId = (function() {
  var currentId = 4;
  return function() {
    return currentId++;
  };
})();
var getPost = function(id) {
  return posts.filter(function(p) {
    return p.id == id;
  })[0];
};
var deletePost = function(id) {
  var index = posts.indexOf(getPost(id));
  posts.splice(index , 1);
};

exports.index = function(req , res) {
  res.render('blog/index' , {posts: posts});
};

exports.show = function(req ,res) {
  res.render('blog/show' , {post: getPost(req.params.id)});
};

exports.edit = function(req , res) {
  res.render('blog/edit' , {post: getPost(req.params.id)});
};

exports.update = function(req , res) {
  post = getPost(req.params.id);
  post.title = req.body.title;
  post.body = req.body.body;
  res.redirect('/posts/' + post.id);
};

exports.new = function(req , res) {
  res.render('blog/new');
};

exports.create = function(req , res) {
  var newPost = {
    id: getNextId() ,
    title: req.body.title,
    body: req.body.body,
  };
  posts.push(newPost);
  res.redirect('/');
};

exports.destroy = function(req , res) {
  deletePost(req.body.id);
  res.redirect('/');
};
