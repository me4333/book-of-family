var images = ["https://w7.pngwing.com/pngs/486/108/png-transparent-father-others-miscellaneous-child-hand-thumbnail.png","https://www.kindpng.com/picc/m/690-6900393_15-cartoon-mom-png-for-free-on-mbtskoudsalg.png","https://e7.pngegg.com/pngimages/194/1022/png-clipart-mr-peabody-penny-peterson-animated-film-dreamworks-animation-cartoon-mr-peabody-sherman-comics-boy.png","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fea277d-540b-42af-b152-782940dc49ef/de48ozx-cbc308f3-b9b6-4108-b7de-f94b1fb1e661.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmZWEyNzdkLTU0MGItNDJhZi1iMTUyLTc4Mjk0MGRjNDllZlwvZGU0OG96eC1jYmMzMDhmMy1iOWI2LTQxMDgtYjdkZS1mOTRiMWZiMWU2NjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VlftSpNRT299xPBEK_Z2flUdeVoy9q_Oj5RJT8zLQrU"];
var names = ["Virender Sharma","Shivali Sharma","Shiven Sharma","Shivang Sharma"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}