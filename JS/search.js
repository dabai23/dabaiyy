window.onload = function () {
  document.getElementById('search-form').addEventListener('submit', function (event) {
    var query = document.getElementsByName('query')[0].value;
    if (query !== '求神呐') {
      event.preventDefault();
      alert('不存在音乐，内心os：本站仅收录了‘求神呐’建议搜索这个');
    }
  });
};
