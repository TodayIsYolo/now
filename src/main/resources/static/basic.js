// function writePost() {
//     let title = $('#post-title').val();
//     let username = $('#post-username').val();
//     let contents = $('#post-content').val();
//     /* if (isValidContents(contents) == false) {
//           return;
//       }*/
//     let data = {'title': title, 'username': username, 'contents': contents};
//
//     $.ajax({
//         type: "POST",
//         url: "/api/blogs",
//         contentType: "application/json", // JSON 형식으로 전달함을 알리기
//         data: JSON.stringify(data),
//         success: function (response) {
//             alert('메시지가 성공적으로 작성되었습니다.');
//             window.location.reload();
//         }
//     });
// }
//
// /*function isValidContents(contents) {
//     if (contents == ""){
//         alert('내용을 작성 해주세요');
//         return false;
//     }
//     return true;
// }*/
//
// $(document).ready(function (){
//     getMessages();
// })
//
// function getMessages() {
//     $('#card-box').empty();
//     $.ajax({
//         type: 'GET',
//         url: '/api/blogs',
//         success: function (response) {
//             for(let i=0; i<response.length; i++){
//                 let blog = response[i];
//                 let id = blog.id;
//                 let username = blog.username;
//                 let title = blog.title;
//                 let modifiedAt = blog.modifiedAt;
//                 addHTML(id, username, title, modifiedAt)
//             }
//         }
//     })
// }
//
// function addHTML(id, username, title, modifiedAt){
//     let tempHtml=`<div class="card" id="card">
//                                 <div class="modalcheck" onclick="getOne(${id})">
//                                 <div class="head">
//                                 <div class="card-header">
//                                     <h3 class="name" id="${id}-username">${username}</h3>
//                                     <h3 class="date">${modifiedAt}</h3>
//                                 </div>
//                                 </div>
//                                 <div class="card-body">
//                                     <blockquote class="blockquote mb-0">
//                                         <p><h1 id="${id}-title">${title}</h1></p>
//                                     </blockquote>
//                                 </div>
//                                 </div>
//
//                             </div>`
//     $('#card-box').append(tempHtml);
// }
//
// function submit(id){
//     $("#modal-check").removeClass("is-active")
//     $("#submitbt").empty()
//     let temp = `<a className="button is-sparta" onclick="submitEdit(${id})">수정하기</a>`
//     $("#submitbt").append(temp)
//     $("#modal-submit").addClass("is-active")
// }
// function submitEdit(id) {
//     let username = $('#submit-username').val().trim();
//     let title = $('#submit-title').val().trim();
//     let contents = $('#submit-content').val().trim();
//
//     let data = {'username' : username, 'title' : title, 'contents' : contents}
//     $.ajax({
//         type: "PUT",
//         url:`api/blogs/${id}`,
//         data: JSON.stringify(data),
//         contentType: 'application/json',
//         success: function (response) {
//             alert('수정완료!');
//             window.location.reload()
//         }
//     })
// }
//
//
// function getOne(id) {
//     $('#one-box').empty();
//     $.ajax({
//         type: 'GET',
//         url: `/api/blogs/${id}`,
//         success: function (response) {
//
//
//             let id = response.id;
//             let username = response.username;
//             let contents = response.contents;
//             let title = response.title;
//             let modifiedAt = response.modifiedAt;
//             plusHTML(id, username, title, contents, modifiedAt)
//
//
//         }
//     })
// }
//
// function plusHTML(id, username, title, contents, modifiedAt){
//     let temp=`<p class="control" id="one">
//                         <div class="card border-success mb-3" style="max-width: 550px;">
//                             <div class="card-header bg-transparent border-success">제목:${title}</div>
//                             <div class="card-footer bg-transparent border-success">작성자:${username}</div>
//
//                             <div class="card-body text-success">
//                                 <p class="card-text">${contents}</p>
//                             </div>
//                             <div class="card-footer bg-transparent border-success">작성날짜:${modifiedAt}</div>
//                         </div>
//                         </p>
//                         <div class="bt">
//                             <img id="${id}-edit" class="icon-start-edit" src="images/edit.png" alt="" onclick="submit(${id})">
//                             <img  id="${id}-delete" class="icon-delete" src="images/delete.png" alt="" onclick="deleteOne(${id})">
//                         </div>`
//     $('#one-box').append(temp);
//     $("#modal-check").addClass("is-active")
// }
//
// function deleteOne(id) {
//     $.ajax({
//         type: "DELETE",
//         url: `/api/blogs/${id}`,
//         success: function (response) {
//             alert('메시지 삭제에 성공하였습니다.');
//             window.location.reload();
//         }
//     })
// }
//
// //게시물 수정에서 취소버튼 누르면 reload추가 or .empty 해도 될 듯
// //수정할 때 원래 글 그대로 받아오려면=.text