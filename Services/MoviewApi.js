'use strict';
import $ from 'jquery';

class MovieService {

  static getTop10(){
    return $.ajax({
      url:config.id+'/user',
      type:'GET',
      beforeSend: function(request) {
        request.setRequestHeader('Authorization', 'Bearer '+LocalStorageService.getItem('userToken').token);
      }
    })
  }

  static getByKeyword(data,id){
    return $.ajax({
      url:config.api+'/document/'+id,
      type:'POST',
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.upload.addEventListener("progress", function (evt) {
            if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;

                $(".source-progress").width(Math.round(percentComplete * 100)+'%');
            }
        }, false);
        return xhr;
      },
      beforeSend: function(request) {
        request.setRequestHeader('Authorization', 'Bearer '+LocalStorageService.getItem('userToken').token);
      },
      enctype: 'multipart/form-data',
      processData: false,  // Important!
      contentType: false,
      cache: false,
      data:data
    })
  }

}// end Class


export default MovieService;
