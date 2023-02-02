$(document).ready(function(){
    $('#myCarousel').carousel({
    interval: 2000
    });});

window.onload= function(){
    var btnremove= document.getElementsByClassName('btn-danger')
    for (i =0;i< btnremove.length;i++){
        var btn = btnremove[i]
        btn.addEventListener('click', removeitem)
    }

    var quantitys= document.getElementsByClassName('cart-quantity-input')
    for (i =0;i<quantitys.length;i++){
        var input= quantitys[i]
        input.addEventListener('change', changedquantitys)
    } 
    
    var addtoclickedbutton = document.getElementsByClassName('btn-warning')
    for (i=0; i< addtoclickedbutton.length;i++){
        var btnadd =addtoclickedbutton[i]
        btnadd.addEventListener('click', addtoclickedbuy) 
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',clicktopay)
}
//xoa san pham
function removeitem(event){
    var btnclick= event.target
    btnclick.parentElement.parentElement.remove()
    updatetotalcart()
}
//thay doi so luong
function changedquantitys(event) {
    var inputchanged= event.target
    if(isNaN(inputchanged.value) || inputchanged.value <= 0){
        inputchanged.value=1
    }
    updatetotalcart()
}
//Tong tien cac san pham
function updatetotalcart() {
    var shoptitems= document.getElementsByClassName('cart-items')[0]
    var Rowcart= shoptitems.getElementsByClassName('cart-row')
    var Totals= 0
    for(var i =0;i<Rowcart.length;i++){
        var Rowcarts =Rowcart[i]
        var Elementprice= Rowcarts.getElementsByClassName('cart-price')[0]
        var Elementquantitys= Rowcarts.getElementsByClassName('cart-quantity-input')[0]
        var Price= parseFloat(Elementprice.innerText.replace('đ',''))
        var quantity= Elementquantitys.value
        Totals = Totals + (Price * quantity)
    }
    Totals = Totals *1000
    document.getElementsByClassName('cart-total-price')[0].innerText= Totals+'VNĐ'
}
//Them san pham
function addtoclickedbuy(event) {
    var button = event.target
    var listitem= button.parentElement
    var titleitem= listitem.getElementsByClassName('title')[0].innerText
    var priceitem= listitem.getElementsByClassName('price')[0].innerText
    var imageitem= listitem.getElementsByClassName('imgitem')[0].src

    additemtocart(titleitem,priceitem,imageitem)
    updatetotalcart()
}
function additemtocart(titleitem,priceitem,imageitem) {
    var cartrow= document.createElement('div')
    cartrow.classList.add('cart-row')
    var cartitems = document.getElementsByClassName('cart-items')[0]
    var nameitem= cartitems.getElementsByClassName('cart-item-title')
    for (i= 0;i<nameitem.length;i++){
        if(nameitem[i].innerText == titleitem){
        return
        }
    }
    var cartrowcontent= `
    <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageitem}" width="100" height="100">
            <span class="cart-item-title">${titleitem}</span>
        </div>
        <span class="cart-price cart-column">${priceitem}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Xóa</button>
        </div>`
    cartrow.innerHTML =cartrowcontent
    cartitems.append(cartrow)
    cartrow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeitem)
    cartrow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', changedquantitys)
}
//thanh toan san pham
function clicktopay() {
    alert('Cám ơn bạn đã mua hàng')
    var cartitem= document.getElementsByClassName('cart-items')[0]
    while (cartitem.hasChildNodes()){
        cartitem.removeChild(cartitem.firstChild)
    }
    updatetotalcart()
}


//detail products
        let item1= {id:1, name: "Sổ Tay Slim Notebook - Ruột Sổ Chấm Bi", price: "7.500 đ", img: "../SanPham/sp4/1.PNG",detail: `THÔNG TIN CHI TIẾT <br>
        Thương hiệu	Furiin<br>
        Xuất xứ	Việt Nam<br>
        Số trang	128<br>
        Chất liệu	<br>
        Bìa	Bìa mềm giấy mỹ thuật 180 GSM<br>
        Số Trang	128 trang Premium Ivory (Trắng ngà)<br>
        Định Lượng	80 GSM<br>
        Kích Thước	13 x 20 cm<br>
        Kiểu Gáy	May chỉ thủ công, có thể mở phẳng 180 độ<br>
        Tiêu Chuẩn	FSC  Certified<br>
         
        
        SKU	6120611583406<br>
        Xuất xứ thương hiệu	Việt Nam<br>
        MÔ TẢ SẢN PHẨM<br>
        Nếu bạn đang có mong muốn tìm cho mình một quyển sổ tay đơn giản, tập trung vào việc viết lách, ghi chú nhưng không kém phần sang trọng mà giá cả lại phải chăng thì dòng sổ tay Slim Notebook do Furiin sản xuất là lựa chọn rất phù hợp với bạn.<br>
        
        Sổ tay Slim Notebook là một dòng sổ tay mang tính trải nghiệm tiêu chuẩn do Furiin sản xuất. Với thiết kế tối giản nhưng thanh lịch, tập trung vào công năng cũng như trải nghiệm người dùng.<br>
        
        Sổ tay Furiin có khả năng giở phẳng 180 độ, bên cạnh đó là chất giấy Premium Ivory định lượng 80 GSM. Bìa mềm giấy mỹ thuật nhập khẩu giúp gia tăng tính thẩm mỹ cũng như trải nghiệm người dùng.<br>
        
         
        
        Bìa	Bìa mềm giấy mỹ thuật 180 GSM<br>
        Số Trang	128 trang Premium Ivory (Trắng ngà)<br>
        Định Lượng	80 GSM<br>
        Kích Thước	13 x 20 cm<br>
        Kiểu Gáy	May chỉ thủ công, có thể mở phẳng 180 độ<br>
        Tiêu Chuẩn	FSC  Certified<br>
         
        
        Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ...`};
        let item2= {id:2, name: "Băng Keo Hai Mặt Siêu Dính Trong Suốt Chống Nước", price:"17.000 đ", img: "../SanPham/sp5/1.PNG",detail: `Thương hiệu	OEM <br>
        SKU-4521261116698<br>
        MÔ TẢ SẢN PHẨM<br>
        Băng keo hai mặt siêu dính được làm từ nano PU keo, bền, chất kết dính hai mặt, trong suốt. ĐẶC BIỆT không để lại dấu vết trên tường hoặc bất kỳ bề mặt nào.<br>
        Không trơn trượt, có thể cắt được, có thể giặt và tái sử dụng. Khả năng chịu nhiệt từ -20°C ~ 100 °C.<br>
        Khi bị bẩn, bạn có thể rửa sạch bằng nước và lau khô nó để phục hồi của nó độ dính. Không cần sử dụng khăn lau hoặc chất tẩy rửa nào khác. Có thể tái sử dụng nhiều lần mà không để lại vết hoặc keo khi tháo ra.<br>
        Có thể chịu lực rất tốt lên đến 45kg trên bề mặt nhẵn. Có thể dán được rất nhiều loại đồ vật như giá để đồ, gương, dao, điện thoại, máy tính bảng...<br>
        Thích hợp cho nhựa, kim loại, gỗ, bức tường và các bề mặt khác để đảm bảo vệ sinh bề mặt, đồ vật, không có lỗ, không bám bụi bẩn và bụi sẽ cho kết quả tốt nhất.<br>
        
        Băng keo hai mặt siêu dính được làm từ nano PU keo, bền, chất kết dính hai mặt, trong suốt. ĐẶC BIỆT không để lại dấu vết trên tường hoặc bất kỳ bề mặt nào. Không trơn trượt, có thể cắt được, có thể giặt và tái sử dụng. Khả năng chịu nhiệt từ -20°C ~ 100 °C. Khi bị bẩn, bạn có thể rửa sạch bằng nước và lau khô nó để phục hồi của nó độ dính. Không cần sử dụng khăn lau hoặc chất tẩy rửa nào khác. Có thể tái sử dụng nhiều lần mà không để lại vết hoặc keo khi tháo ra. Có thể chịu lực rất tốt lên đến 45kg trên bề mặt nhẵn. Có thể dán được rất nhiều loại đồ vật như giá để đồ, gương, dao, điện thoại, máy tính bả Thích hợp cho nhựa, kim loại, gỗ, bức tường và các bề mặt khác để đảm bảo vệ sinh bề mặt, đồ vật, không có lỗ, không bám bụi bẩn và bụi sẽ cho kết quả tốt nhất.<br>
        
        Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ...`};

        let listitem= [item1,item2];
        
        function detail(id) {
            let sp = listitem.find(spTemp => spTemp.id === id);
            localStorage.setItem("id", sp.id);
            localStorage.setItem("name", sp.name);
            localStorage.setItem("price", sp.price);
            localStorage.setItem("img", sp.img);
            localStorage.setItem("detailitem", sp.detail);
        }