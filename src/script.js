$(document).ready(function(){
$('.success').hide();
$('.error').hide();
$('#update_product').hide();
})
$(".close-2").click(function(){
    $(".error").hide();
});
$(".close-1").click(function(){
    $(".success").hide();
});
var array = [];
var temp = 0;
function myFunction(){
    var sku = $('#product_sku').val();
    var pName = $('#product_name').val();
    var pPrice = $('#product_price').val();
    var pQuantity = $('#product_quantity').val();
    myLogic(sku , pName , pPrice , pQuantity);
    myDisplay(array);
    
} 
function myLogic(id , pName , pPrice , pQuantity){
    for(var i = 0; i<array.length; i++){
        if(array[i].sku == id){

            $(".error").show();
            return;
        }
    }  
    $("#product_sku").css("border","1px solid black");
    $("#product_name").css("border","1px solid black");
    $("#product_price").css("border","1px solid black");

    if (id == "" || isNaN(id) || pName == "" || pPrice == "" || isNaN(pPrice)){
        if(id == "" || isNaN(id)){
            $("#product_sku").css("border","1px solid red");  
        }else{
            $("#product_sku").css("border","1px solid black");
        }
        if(pName == ""){
            $("#product_name").css("border","1px solid red");   
        }else{
            $("#product_name").css("border","1px solid black");
        }
        if(pPrice == "" || isNaN(pPrice)){
            $("#product_price").css("border","1px solid red");
        }else{
            $("#product_price").css("border","1px solid black");
        }
        return;
    }
    
    
    obj = {};
    obj["sku"] = id;
    obj["pName"] = pName;
    obj["pPrice"] = pPrice;
    obj["pQuantity"] = pQuantity;
    array.push(obj);
    $(".success").show();
}
function myDisplay(result){
    var txt = document.getElementById('table1');  
    txt.innerHTML="<tr>\
      <th>SKU</th>\
      <th>Name</th>\
      <th>Price</th>\
      <th>Quantity</th>\
      <th>Action</th>\
  </tr>";
  for(let i = 0; i<result.length;i++){
      txt.innerHTML +='<tr>\
      <th>' + result[i].sku+ '</th>\
      <th>'+ result[i].pName+'</th>\
      <th>'+result[i].pPrice+'</th>\
      <th>'+result[i].pQuantity+'</th>\
      <td><a href="#" class="edit" onclick = formEdit("'+result[i].sku+'")>Edit</a><a href="#" class="delete" onclick = formDelete(\"'+result[i].sku+'\")>Delete</a></td>\
  </tr>';
  }
    $('#product_sku').val("");
    $('#product_price').val("");
    $('#product_name').val("");
    $('#product_quantity').val("");
} 
function formEdit(id){
       $('#add_product').hide();
       $('#update_product').show();
       for(var i =0;i<array.length;i++){
           if(array[i].sku == id){
               $('#product_sku').val(array[i].sku);
               $('#product_name').val(array[i].pName);
               $('#product_price').val(array[i].pPrice);
               $('#product_quantity').val(array[i].pQuantity);
               temp = i;
           }
       }   
}
function myUpdates(){
    $('#add_product').show();
    $('#update_product').hide();
    // array[temp].sku = $('#product_sku').val();
    array[temp].pName = $('#product_name').val();
    array[temp].pPrice = $('#product_price').val();
    array[temp].pQuantity = $('#product_quantity').val();
    myDisplay(array);
}
function formDelete(id) {
    if(confirm("You want to delete this product?")){
    for(var i =0; i<array.length; i++){
        if(array[i].sku == id){
            array.splice(i,1);
        }
    }
    myDisplay(array);
}
}