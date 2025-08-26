// function getId(id) {
//     document.getElementById(id)
// }
document
    .getElementById("all-product-section")
    .addEventListener("click", function (e) {
        if (e.target.classList[0] === "add-to-cart-btn") {
            // console.log("you clicked to the button");
            const productImage =
                e.target.parentNode.parentNode.parentNode.children[0].children[0].getAttribute(
                    "src"
                );
            const productTitle =
                e.target.parentNode.parentNode.children[1].innerText;
            const productPrice =
                e.target.parentNode.parentNode.children[2].children[0]
                    .innerText;
            //console.log(productImage, productTitle, productPrice);
            //console.log(productPrice);

            const purchaseSectionCart =
                document.getElementById("added-cart-section");
            const div = document.createElement("div");
            div.innerHTML = ` <div
                                class="flex justify-between items-center bg-[#F4F1F1] my-4 px-3 py-1 rounded-md"
                            >
                                <img
                                    class="w-10"
                                    src="${productImage}"
                                    alt=""
                                />
                                <div class="flex justify-between items-center">
                                <div>
                                    <h1 class="font-bold">${productTitle}</h1>
                                    <p class="font-light text-gray-400">
                                        <span>${productPrice}</span> Tk.
                                    </p> 
                                </div>
                                <button id="delete-cart-button" class="btn btn-circle btn-sm bg-[#e527b2] text-white border-none">
  <i class="fa-solid fa-trash"></i>
</button>
                                </div>`;
            purchaseSectionCart.appendChild(div);

            const totalPrice = document.getElementById("totalPrice").innerText;
            const newTotalPrice = parseInt(productPrice) + parseInt(totalPrice);
            //console.log(newTotalPrice);
            document.getElementById("totalPrice").innerText = newTotalPrice;

            const totalDiscount = document.getElementById("totalDiscount");
            const totalQuantity =
                document.getElementById("totalQuantity").innerText;
            const newQuantity = parseInt(totalQuantity) + 1;
            console.log(newQuantity);

            document.getElementById("totalQuantity").innerText = newQuantity;
        }
    });

document
    .getElementById("delete-cart-button")
    .addEventListener("click", function () {});
