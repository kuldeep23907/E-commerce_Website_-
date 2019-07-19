class AppController {
  // complete_flag = 0;
  // uncomplete_flag = 0;

  constructor() {
    self = this;
    this.model = new AppModel();
    self.render();
  }

  // addTodo(caption, isCompleted) {
  //   this.model.addTodo(caption, isCompleted);
  //   this.render();
  // }

  attachEventHandlers() {
    var self = this;
    // $("#addtodo")
    //   .off()
    //   .click(function(e) {
    //     var input = $("#caption").val();
    //     self.addTodo(input, false);
    //   });

    // $("#completed")
    //   .off()
    //   .click(function(e) {
    //     if (self.complete_flag == 0) {
    //       self.model.get_database_data("completed");
    //       self.complete_flag = 1;
    //     } else if (self.complete_flag == 1) {
    //       self.model.get_database_data("all");
    //       self.complete_flag = 0;
    //     }
    //     self.render();
    //   });

    // $("#uncompleted")
    //   .off()
    //   .click(function(e) {
    //     if (self.uncomplete_flag == 0) {
    //       self.model.get_database_data("uncompleted");
    //       self.uncomplete_flag = 1;
    //     } else if (self.uncomplete_flag == 1) {
    //       self.model.get_database_data("all");
    //       self.uncomplete_flag = 0;
    //     }
    //     self.render();
    //   });

    $("#buy")
      .off()
      .click(function(e) {
        self.model.buy_cart();
        window.open("index.html");
      });

    // $("#view_cart")
    //   .off()
    //   .click(function() {
    //     self.model.addToCart();
    //     $(document).ajaxStop(function() {
    //       window.open("cart.html");
    //     });
    //   });
  }

  render() {
    var self = this;

    var list = $("#list").html("");

    for (var i in this.model.cartCollection) {
      var productItem = this.model.cartCollection[i];
      var indexnew = this.model.cartCollection[i]["index"];
      //console.log(indexnew);
      var product_name = productItem.product_name;

      var li = $("<li></li>");
      li.text(productItem.product_name);
      var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
      img.attr("src", "assest/item" + indexnew + ".jpeg");
      img.appendTo(li);
      img.attr("width", "50px");
      img.attr("height", "50px");
      // var doneBtn = $("<input type='checkbox'>")
      //   .off()
      //   .click(
      //     function(productItem, i, indexnew) {
      //       self.model.toggleTodo(indexnew, productItem);
      //     }.bind(null, productItem, li, indexnew)
      //   );

      //   var cartBttn = $("<input type='button'>")
      //     .off()
      //     .click(
      //       function(indexnwew, i, product_name) {
      //         console.log(indexnew);
      //         self.model.addCart(indexnew, i, product_name);
      //         self.render();
      //       }.bind(null, indexnew, i, product_name)
      //     );

      //   cartBttn.val("Add to cart");

      // li.off().dblclick(
      //   function(li, productItem, indexnew) {
      //     var inputnew = $("<input type='text'>");
      //     li.text("");
      //     li.prepend(inputnew);
      //     inputnew.dblclick(
      //       function(li, inputnew, productItem, indexnew) {
      //         self.model.editTodo(indexnew, inputnew.val(), productItem);
      //         self.render();
      //       }.bind(null, li, inputnew, productItem, indexnew)
      //     );
      //   }.bind(null, li, productItem, indexnew)
      // );

      // if (productItem.isCompleted) {
      //   doneBtn.prop("checked", true);
      //   li.css("text-decoration", "line-through");
      // } else {
      //   doneBtn.prop("checked", false);
      //   li.css("text-decoration", "line");
      // }

      // li.append(doneBtn);
      //li.append(cartBttn);
      list.append(li);
    }
    this.attachEventHandlers();
  }
}
