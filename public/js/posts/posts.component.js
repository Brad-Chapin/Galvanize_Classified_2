(function (){
  angular.module("app")
  .component("posts", {
    templateUrl: "js/posts/posts.template.html",
    controller: PostController
  });

  PostController.$inject= ["$http"];
  function PostController ($http) {
    const vm = this;
    vm.submitPost = submitPost;
    vm.deletePost = deletePost;
    vm.editPost = editPost;

    vm.$onInit = function () {
      $http.get("/api/classifieds")
      .then(function (response){
        vm.posts = response.data;
        console.log(response.data);
      });
    }

    function submitPost () {
      $http.post("/api/classifieds", vm.post)
      .then(function (response){
        vm.posts.push(response.data);
        delete vm.post;
      });
    }

    function deletePost (post) {
      event.preventDefault();
      $http.delete("api/classifieds" + post.id)
      .then (function (response){
        function findPost (e) {
          return e.id == post.id;
        }
        let toDelete = vm.posts.findIndex(findPost);
        vm.posts.splice (toDelete, 1);
      });
    }

    function editPost () {}
  }
})();
