$(document).ready(function() {
  const baseUrl = "https://api.github.com/users/yhmgood0130/repos";
  var gitHubData;

  $.get(baseUrl, (data)=> {
    listOfGitHub(data);
  })

  let counter = 1;
  
  function listOfGitHub(data) {
    var editedData = data.sort((a,b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    })
    $.each(editedData,function(index,repo){
      let date = new Date(repo.created_at);
      $('.repo-list').append(`<tr>
                                <th scope="row">${counter}</th>
                                <td><a href=${repo.html_url}>${repo.name}</a></td>
                                <td>${date.toDateString()}</td>
                              </tr>`);
                              counter++;
    })

  }

})
