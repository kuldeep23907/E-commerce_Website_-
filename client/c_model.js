class ProductItem {
  constructor(product_name, index) {
    this.product_name = product_name;
    this.index = index;
  }
}

class AppModel {
  input = "";
  cartCollection = [];

  constructor() {
    console.log(this.cartCollection);
    //  this.get_database_data("all");
    this.number_cart_items();
    this.addToCart();
  }

  //   get_database_data(filter) {
  //     var tt = "server/get.php";
  //     var self = this;
  //     this.productCollection = [];
  //     $.ajax({
  //       url: tt,
  //       k: 0,
  //       data: { filter: filter },
  //       success: function(result) {
  //         for (var k = 0; k < result.length; k++) {
  //           var newItem = new ProductItem(
  //             result[k][0].product_name,
  //             result[k][0].index
  //           );
  //           self.productCollection.push(newItem);
  //         }
  //       }
  //     });
  //     console.log(this.productCollection);
  //   }

  number_cart_items(temp) {
    var self = this;
    var card_list = $("#cart_items");
    $.post("server/count.php", {}, function(result) {
      console.log(result["data"][0].number);

      card_list.text("No. of cart items " + result["data"][0].number);
    });
  }

  addToCart() {
    var self = this;
    this.cartCollection = [];

    $.post("server/cart_get.php", {}, function(result) {
      console.log(result);
      var data_json = JSON.parse(JSON.stringify(result));
      console.log("session", data_json["data"][0]["items"][0]);

      for (var k = 0; k < data_json["data"][0]["items"].length; k++) {
        var newItem = new ProductItem(
          data_json["data"][0]["items"][k].product_name,
          data_json["data"][0]["items"][k].id
        );
        self.cartCollection.push(newItem);
      }
      console.log("cart", self.cartCollection);
    });
  }

  buy_cart() {
    var self = this;

    $.post("server/session_close.php", {}, function(result) {
      self.cartCollection = [];
      alert("Your cart is empty");
      console.log("cart", self.cartCollection);
    });
  }
  // addTodo = function(caption, isCompleted) {
  //   var getUrl = "server/insert.php";
  //   var self = this;
  //   if (caption == "") return;
  //   $.ajax({
  //     url: getUrl,
  //     type: "post",
  //     data: {
  //       caption: caption,
  //       iscompleted: isCompleted
  //     },
  //     dataType: "json",
  //     success: function(result) {
  //       console.log(result);

  //       var data_json = JSON.parse(JSON.stringify(result));
  //       console.log(data_json["data"]);
  //       self.productCollection.push(
  //         new TodoItem(caption, isCompleted, data_json["data"][0].index)
  //       );
  //     },

  //     error: function(result) {
  //       console.log(result);
  //     }
  //   });
  // };

  //   addCart(index, i, product_name) {
  //     var self = this;
  //     console.log("index", index);
  //     $.post(
  //       "server/insert.php",
  //       { id: index, product_name: product_name },
  //       function(result) {
  //         console.log(result);
  //         if (result["success"] == true) self.productCollection.splice(i, 1);
  //         else if (result["error"] == true) console.log(result);
  //       }
  //     );
  //     this.number_cart_items();
  //   }

  //   console.log(this.productCollection);
  // }

  // editTodo(index, caption, todoItem) {
  //   console.log("index", index);
  //   $.post("server/edit.php?turn=1", { id: index, caption: caption }, function(
  //     result
  //   ) {
  //     if (result["success"] == true) todoItem.caption = caption;
  //     else if (result["error"] == true) console.log(result);
  //   });

  //   console.log(this.productCollection);
  // }

  // toggleTodo(index, todoItem) {
  //   var self = this;
  //   console.log(todoItem);

  //   $.ajax({
  //     url: "server/edit.php?turn=0",
  //     dataType: "text",
  //     type: "post",
  //     contentType: "application/x-www-form-urlencoded",
  //     data: { id: index },
  //     success: function(result) {
  //       todoItem.toggle();
  //     },

  //     error: function(result) {
  //       console.log(result);
  //     }
  //   });

  //   console.log(this.productCollection);
  // }
}
